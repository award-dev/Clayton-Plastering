// Keyboard pass: tab through the whole page, check every stop has a visible focus style and isn't hidden
// behind the sticky header (desktop) or the call bar (mobile). Then operate "Match my wall" by keyboard
// and check reflow at 320px and 200% zoom (640px). Usage: node qa/keyboard.cjs <baseUrl>
const { chromium } = require("playwright");
(async () => {
  const base = process.argv[2] || "http://localhost:3100";
  const browser = await chromium.launch();
  let problems = 0;
  for (const vp of [{ width: 1280, height: 900 }, { width: 375, height: 812 }]) {
    const page = await browser.newPage({ viewport: vp });
    await page.goto(base + "/", { waitUntil: "networkidle" });
    const stops = [];
    for (let i = 0; i < 160; i++) {
      await page.keyboard.press("Tab");
      await page.waitForTimeout(450); // let smooth scrolling settle
      const probe = () => page.evaluate(() => {
        const el = document.activeElement;
        if (!el || el === document.body) return null;
        const r = el.getBoundingClientRect();
        const target = el.matches("input[type=radio]") ? el.nextElementSibling : el;
        const cs = getComputedStyle(target);
        const visibleFocus = (cs.outlineStyle !== "none" && parseFloat(cs.outlineWidth) > 0) || cs.boxShadow !== "none";
        const header = document.querySelector("header");
        const hb = header && getComputedStyle(header).position === "sticky" ? header.getBoundingClientRect().bottom : 0;
        const bar = document.querySelector('nav[aria-label="Call or text"]');
        const bt = bar && getComputedStyle(bar).display !== "none" ? bar.getBoundingClientRect().top : innerHeight;
        const box = (el.matches("input[type=radio]") ? el.parentElement : el).getBoundingClientRect();
        const inBar = bar && bar.contains(el);
        const fixed = getComputedStyle(el).position === "fixed";
        const obscured = !inBar && !fixed && !(header && header.contains(el)) && (box.top < hb - 1 || box.bottom > bt + 1);
        const label = (el.getAttribute("aria-label") || el.innerText || el.value || el.tagName).trim().replace(/\s+/g, " ").slice(0, 50);
        return { tag: el.tagName, label, visibleFocus, obscured, w: Math.round(box.width), h: Math.round(box.height), top: Math.round(box.top), bottom: Math.round(box.bottom), hb: Math.round(hb), bt: Math.round(bt) };
      });
      let info = await probe();
      if (info && info.obscured) { await page.waitForTimeout(1200); info = await probe(); } // long smooth scrolls take longer
      if (!info) continue;
      if (stops.length && stops[0].label === info.label && stops[0].tag === info.tag && i > 5) break; // wrapped around
      stops.push(info);
    }
    const bad = stops.filter((s) => !s.visibleFocus || s.obscured);
    const small = stops.filter((s) => s.tag !== "INPUT" && (s.w < 44 || s.h < 44) && s.w > 0);
    console.log(`\n${vp.width}px: ${stops.length} tab stops, ${bad.length} without visible/unobscured focus, ${small.length} under 44px`);
    bad.forEach((s) => console.log("  FOCUS", s));
    small.forEach((s) => console.log("  SMALL", s.tag, s.label, s.w + "x" + s.h));
    if (vp.width === 1280) console.log("  order:", stops.slice(0, 40).map((s) => s.label).join(" | "));
    problems += bad.length;

    // Operate Match my wall by keyboard
    await page.goto(base + "/#match", { waitUntil: "networkidle" });
    await page.focus('input[name="place"]');
    await page.keyboard.press("Space");
    await page.keyboard.press("ArrowRight");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Space");
    await page.keyboard.press("ArrowRight");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Space");
    await page.keyboard.press("ArrowRight");
    await page.keyboard.press("ArrowRight");
    const note = await page.locator("#match [aria-live]").innerText();
    const sms = await page.locator('#match a[href^="sms:"]').getAttribute("href");
    console.log("  match note:", note);
    console.log("  sms ok:", sms.startsWith("sms:+13147266359?&body=Hi%20Clayton"));
    await page.close();
  }
  for (const w of [320, 640]) {
    const page = await browser.newPage({ viewport: { width: w, height: 800 } });
    await page.goto(base + "/", { waitUntil: "networkidle" });
    const [sw, iw] = await page.evaluate(() => [document.documentElement.scrollWidth, innerWidth]);
    console.log(`reflow ${w}px: scrollWidth ${sw} / ${iw} ${sw > iw ? "OVERFLOW" : "ok"}`);
    if (sw > iw) problems++;
    await page.close();
  }
  await browser.close();
  console.log("\nPROBLEMS", problems);
})();
