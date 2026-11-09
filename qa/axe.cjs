// axe-core WCAG 2.2 AA scan at mobile and desktop widths, for every page.
// Usage: AXE_PATH=/path/to/axe.min.js node qa/axe.cjs <baseUrl>
const { chromium } = require("playwright");
const fs = require("fs");
(async () => {
  const base = process.argv[2] || "http://localhost:3100";
  const axeSrc = fs.readFileSync(process.env.AXE_PATH, "utf8");
  const pages = ["/", "/privacy", "/terms", "/accessibility"];
  const browser = await chromium.launch();
  let total = 0;
  for (const [label, vp] of [["mobile", { width: 375, height: 812 }], ["desktop", { width: 1280, height: 900 }]]) {
    for (const path of pages) {
      const page = await browser.newPage({ viewport: vp });
      await page.goto(base + path, { waitUntil: "networkidle" });
      await page.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 700) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 40)); } window.scrollTo(0, 0); });
      await page.addScriptTag({ content: axeSrc });
      const res = await page.evaluate(async () =>
        await window.axe.run(document, { runOnly: { type: "tag", values: ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa", "best-practice"] } }),
      );
      total += res.violations.length;
      console.log(`${label} ${path}: ${res.violations.length} violations, ${res.passes.length} passes, ${res.incomplete.length} needs review`);
      for (const v of res.violations) {
        console.log(`  - [${v.impact}] ${v.id}: ${v.help}`);
        for (const n of v.nodes.slice(0, 4)) console.log(`      ${n.target.join(" ")} :: ${n.failureSummary.split("\n")[1] || ""}`);
      }
      for (const v of res.incomplete) console.log(`  ? review ${v.id}: ${v.nodes.length} nodes (${v.nodes.slice(0,3).map(n=>n.target.join(" ")).join(", ")})`);
      await page.close();
    }
  }
  await browser.close();
  console.log("TOTAL VIOLATIONS", total);
  process.exit(total ? 1 : 0);
})();
