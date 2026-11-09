// Full-page screenshots at the four required widths. Usage: node qa/screens.cjs <baseUrl> <outDir>
const { chromium } = require("playwright");
(async () => {
const [base = "http://localhost:3100", out = "qa/output"] = process.argv.slice(2);
const widths = [375, 768, 1280, 1920];
const browser = await chromium.launch();
for (const w of widths) {
  const page = await browser.newPage({ viewport: { width: w, height: w < 800 ? 812 : 1000 }, deviceScaleFactor: 1 });
  await page.goto(base + "/", { waitUntil: "networkidle" });
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += 500) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 250)); }
    const imgs = [...document.images];
    await Promise.all(imgs.map((i) => (i.complete ? null : new Promise((r) => { i.onload = i.onerror = r; setTimeout(r, 8000); }))));
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(1500);
  await page.screenshot({ path: `${out}/home-${w}-fold.png` });
  await page.screenshot({ path: `${out}/home-${w}-full.png`, fullPage: true });
  const sw = await page.evaluate(() => [document.documentElement.scrollWidth, window.innerWidth]);
  console.log(w, "scrollWidth/innerWidth", sw.join("/"));
  await page.close();
}
await browser.close();
})();
