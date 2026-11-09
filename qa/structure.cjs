// Reduced-motion check plus a screen-reader-style outline (landmarks + headings), and link format checks.
const { chromium } = require("playwright");
(async () => {
  const base = process.argv[2] || "http://localhost:3100";
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 375, height: 812 }, reducedMotion: "reduce" });
  const page = await ctx.newPage();
  await page.goto(base + "/", { waitUntil: "networkidle" });
  await page.waitForTimeout(600);
  const motion = await page.evaluate(() => {
    const running = document.getAnimations().filter((a) => a.playState === "running").length;
    const vids = [...document.querySelectorAll("video")].map((v) => v.paused);
    const cover = getComputedStyle(document.querySelector(".cornice-cover")).transform;
    return { running, allVideosPaused: vids.every(Boolean), coverTransform: cover };
  });
  console.log("reduced motion:", motion);
  await page.evaluate(() => window.scrollTo(0, document.querySelector("#work").offsetTop));
  await page.waitForTimeout(800);
  console.log("videos paused after scrolling to clips:", await page.evaluate(() => [...document.querySelectorAll("video")].every((v) => v.paused)));
  const outline = await page.evaluate(() => {
    const out = [];
    document.querySelectorAll("header, nav, main, footer, h1, h2, h3").forEach((el) => {
      const t = el.tagName.toLowerCase();
      if (/^h\d$/.test(t)) out.push(`${"  ".repeat(+t[1] - 1)}${t}: ${el.textContent.replace(/\s+/g, " ").trim().slice(0, 70)}`);
      else out.push(`[${t}${el.getAttribute("aria-label") ? ` "${el.getAttribute("aria-label")}"` : ""}]`);
    });
    return out;
  });
  console.log(outline.join("\n"));
  const links = await page.evaluate(() => [...document.querySelectorAll('a[href^="tel:"], a[href^="sms:"], a[href^="mailto:"]')].map((a) => a.getAttribute("href").slice(0, 60)));
  console.log("contact links:", [...new Set(links)]);
  console.log("h1 count:", await page.locator("h1").count());
  await browser.close();
})();
