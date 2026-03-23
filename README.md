# Cream Retro Coffee Shop Page

A static webpage design experiment using **Claude Code** to explore how detailed `CLAUDE.md` instructions and brand guidelines can accelerate and elevate AI-assisted UI design.


## Demo

![A demo static page](demo/demo.png)

## What This Is

A retro-styled coffee shop landing page generated entirely through Claude Code — no manual coding. The primary goal is not the page itself, but learning **how much design quality and consistency Claude can produce when given structured constraints**.



## Experiment Goals

1. **Does explicit `CLAUDE.md` guidance reduce generic AI aesthetics?**
   Testing whether rules against flat shadows, default Tailwind colors, and single-font usage actually translate to more distinctive output.

2. **How well does Claude follow brand constraints?**
   Comparing output quality when brand assets (logo, color palette, style guide) are provided in `brand_assets/` vs. designing from scratch.

3. **How many iteration rounds does it take to reach a polished result?**
   The screenshot → compare → fix loop is built into the workflow. Tracking how many passes are needed.

4. **What guardrails matter most?**
   Typography pairing, spacing tokens, interactive states, layered shadows — which rules have the highest visual impact?



## Project Structure

```
├── index.html              # Single-file output (all styles inline)
├── CLAUDE.md               # Claude instructions, guardrails, and workflow rules
├── serve.mjs               # Local dev server (serves at http://localhost:3000)
├── screenshot.mjs          # Puppeteer screenshot tool
├── brand_assets/
│   ├── logo.png            # Brand logo
│   └── brand guidelines.png  # Color palette and style guide
└── temporary screenshots/  # Auto-saved screenshot iterations
```



## Key Techniques in CLAUDE.md

### Anti-Generic Guardrails
Rules that prevent Claude from defaulting to "AI slop" aesthetics:
- No default Tailwind palette (indigo-500, blue-600, etc.)
- No flat `shadow-md` — layered, color-tinted shadows only
- No single font — always pair a display/serif with a sans
- No `transition-all` — animate only `transform` and `opacity`
- Tight letter-spacing on headings, generous line-height on body
- Every clickable element must have hover, focus-visible, and active states

### Brand Asset Enforcement
Claude checks `brand_assets/` before designing. If a logo or color palette exists, it must be used — no placeholders, no invented brand colors.

### Screenshot Feedback Loop
Built-in iteration workflow:
1. Start server: `node serve.mjs`
2. Screenshot: `node screenshot.mjs http://localhost:3000`
3. Claude reads the PNG, compares against reference, lists specific mismatches
4. Fix and re-screenshot — minimum 2 rounds before stopping

### Output Constraints
- Single `index.html`, all styles inline
- Tailwind CSS via CDN
- Mobile-first responsive
- `https://placehold.co/` for placeholder images only (real assets take priority)



## How to Run

```bash
node serve.mjs
# Open http://localhost:3000 in browser
```

To take a screenshot (requires Puppeteer):
```bash
node screenshot.mjs http://localhost:3000
node screenshot.mjs http://localhost:3000 label   # optional label suffix
```


## Takeaways

The `CLAUDE.md` can be manually written by me, but it has to be a well-structured instruction file so it can act as a persistent design brief — encoding brand rules, quality checks, and workflow steps that Claude follows consistently across sessions without needing to be re-explained.


## Acknowledgement

Inpired by [Nate Herk](https://www.youtube.com/watch?v=86HM0RUWhCk).
