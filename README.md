# Clayton Plastering & Tuckpointing: homepage preview

Concept preview by Elward AI Dev LLC. Not the official Clayton Plastering & Tuckpointing website. Private: `noindex`, `X-Robots-Tag`, and a disallow-all `robots.txt`.

- Content lives in `src/data/*.ts`. Unknowns are `TODO(client)` and show as "Owner to confirm" notes.
- Photos are in `src/assets/` (sources in `src/data/projects.ts` and `src/assets/_asset_log.json`). Silent clips are in `public/video/`.
- Research, facts, conflicts and the owner-confirm list are in `PREVIEW_NOTES.md`. Licenses are in `CREDITS.md`.

```bash
npm install
npm run build && npm start   # http://localhost:3000

# QA (needs Playwright; axe-core and lighthouse installed separately)
node qa/screens.cjs http://localhost:3000 qa/output
AXE_PATH=node_modules/axe-core/axe.min.js node qa/axe.cjs http://localhost:3000
node qa/keyboard.cjs http://localhost:3000
node qa/structure.cjs http://localhost:3000
```
