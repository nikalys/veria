# Veria — Complete Improvement Plan

---

## ⚙️ Agent Rules (Read Before Starting)

These rules apply to every milestone. They **cannot be skipped**.

### Anti-Hallucination Rules
- **Never confirm a step is done without evidence.** Before checking a box, you must have either (a) written the code and seen it saved, or (b) opened the file and verified the change exists with your own read.
- **Never assume a file path.** Always use the exact paths stated in the step. If a file does not exist at that path, stop and report it to the user — do not create files in a guessed location.
- **Never invent CSS class names or JS function names.** Only use class names and function names that you have read directly from the actual source files in this session. If you are unsure whether a class exists, open the file and search for it first.
- **Never open the browser without permission.** Do not launch, open, or navigate a browser at any point unless the user has explicitly said to do so. All verify steps that require a browser check must be deferred to the user — describe what they should look for and wait for their report.
- **Never skip the Verify step.** Every milestone ends with a verification checklist. Do not move to the next milestone until every verify checkbox is ticked based on actual browser or file inspection — not assumption.
- **If a step contradicts what you see in a file, stop.** Do not reconcile the contradiction on your own. Report the discrepancy to the user and wait for guidance.
- **Do not batch-write multiple milestones at once.** Complete one milestone, verify it, get user sign-off, then begin the next.

### Check-In Protocol
A `🛑 STOP — USER REVIEW` gate appears after every milestone. When you reach one:
1. Show the user a brief summary of exactly what was changed (file names + what was added/modified).
2. Ask the user to open the browser and confirm the visual result matches the description in the gate.
3. Do **not** proceed to the next milestone until the user explicitly says "looks good" or equivalent approval.
4. If the user reports a problem, fix it within the current milestone before proceeding.

---

> **How to use this plan**: Work top-to-bottom. Each milestone is independent — you can pause after any milestone and resume later. Check boxes as you complete steps. Instructions are written for low-context execution.

## Milestone 1 — Style Showcase CSS (Per-Style Specificity)

**Goal**: Make each style's showcase panel look authentically different by adding heavy per-style CSS overrides. Right now all styles share the same visual language. This is the highest-impact change.

### Step 1.1 — Audit the existing showcase CSS
- [ ] Open `c:\Users\nikalys\Desktop\veria\app\css\visuals.css`
- [ ] Read all existing CSS rules starting with `[data-style=` to understand what token overrides already exist
- [ ] Make a mental note of which styles already have overrides and which are missing

### Step 1.2 — Add signature CSS overrides for every style
- [ ] In `visuals.css`, for each `[data-style="style_name"]` block, add enough property overrides so that each style is **unmistakably different from every other style**. The target properties to override for each style are:
  - `background`, `color`, `border`, `border-radius`, `font-family`, `box-shadow`, `letter-spacing`, `text-transform`, `backdrop-filter` (where applicable)
- [ ] Use the following as your ground-truth creative brief for each style. Implement these in order:

  **glassmorphism**
  ```css
  [data-style="glassmorphism"] .sc-card {
    background: rgba(255,255,255,0.08);
    backdrop-filter: blur(18px);
    -webkit-backdrop-filter: blur(18px);
    border: 1px solid rgba(255,255,255,0.18);
    border-radius: 16px;
    box-shadow: 0 8px 32px rgba(0,0,0,0.25);
  }
  [data-style="glassmorphism"] .style-showcase {
    background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
  }
  ```

  **neobrutalism**
  ```css
  [data-style="neobrutalism"] .sc-card,
  [data-style="neobrutalism"] .sc-btn-primary,
  [data-style="neobrutalism"] .sc-input {
    border: 3px solid #000;
    border-radius: 0;
    box-shadow: 4px 4px 0px #000;
  }
  [data-style="neobrutalism"] .sc-btn-primary {
    background: #FFE600;
    color: #000;
  }
  [data-style="neobrutalism"] .style-showcase {
    background: #f5f5f5;
    color: #000;
  }
  ```

  **neumorphism**
  ```css
  [data-style="neumorphism"] .style-showcase {
    background: #e0e5ec;
    color: #6c757d;
  }
  [data-style="neumorphism"] .sc-card,
  [data-style="neumorphism"] .sc-btn-primary {
    background: #e0e5ec;
    border: none;
    border-radius: 12px;
    box-shadow: 6px 6px 12px #b8bec7, -6px -6px 12px #ffffff;
    color: #6c757d;
  }
  ```

  **cyberpunk**
  ```css
  [data-style="cyberpunk"] .style-showcase {
    background: #0a0a0f;
    color: #00ffcc;
  }
  [data-style="cyberpunk"] .sc-card {
    border: 1px solid #00ffcc;
    border-radius: 0;
    background: rgba(0,255,204,0.05);
    box-shadow: 0 0 12px rgba(0,255,204,0.3), inset 0 0 8px rgba(0,255,204,0.05);
  }
  [data-style="cyberpunk"] .sc-btn-primary {
    background: transparent;
    border: 2px solid #00ffcc;
    color: #00ffcc;
    text-shadow: 0 0 8px #00ffcc;
    border-radius: 0;
    letter-spacing: 0.15em;
  }
  ```

  **minimalism**
  ```css
  [data-style="minimalism"] .style-showcase {
    background: #ffffff;
    color: #111111;
  }
  [data-style="minimalism"] .sc-card {
    border: 1px solid #e0e0e0;
    border-radius: 2px;
    box-shadow: none;
    background: #ffffff;
  }
  [data-style="minimalism"] .sc-btn-primary {
    background: #111111;
    color: #ffffff;
    border-radius: 2px;
    letter-spacing: 0.08em;
  }
  ```

  **brutalism**
  ```css
  [data-style="brutalism"] .style-showcase {
    background: #ffffff;
    color: #000000;
    font-family: 'Times New Roman', serif;
  }
  [data-style="brutalism"] .sc-card {
    border: 2px solid #000;
    border-radius: 0;
    box-shadow: none;
    padding: 8px;
  }
  [data-style="brutalism"] .sc-btn-primary {
    background: #000;
    color: #fff;
    border-radius: 0;
    border: 2px solid #000;
  }
  ```

  **vaporwave**
  ```css
  [data-style="vaporwave"] .style-showcase {
    background: linear-gradient(180deg, #1a0030 0%, #3d006e 50%, #b30086 100%);
    color: #ff77ff;
  }
  [data-style="vaporwave"] .sc-card {
    border: 1px solid #ff77ff;
    border-radius: 4px;
    background: rgba(179,0,134,0.2);
  }
  [data-style="vaporwave"] .sc-btn-primary {
    background: linear-gradient(90deg, #ff00cc, #3333ff);
    border: none;
    color: #fff;
    border-radius: 0;
    letter-spacing: 0.2em;
  }
  ```

  **synthwave**
  ```css
  [data-style="synthwave"] .style-showcase {
    background: #0d0221;
    color: #f72585;
    border-top: 3px solid #f72585;
  }
  [data-style="synthwave"] .sc-card {
    border: 1px solid #7209b7;
    background: rgba(114,9,183,0.15);
    border-radius: 4px;
    box-shadow: 0 0 20px rgba(247,37,133,0.2);
  }
  [data-style="synthwave"] .sc-btn-primary {
    background: #f72585;
    color: #0d0221;
    border-radius: 2px;
    border: none;
    letter-spacing: 0.15em;
  }
  ```

  **art_deco**
  ```css
  [data-style="art_deco"] .style-showcase {
    background: #1a1206;
    color: #d4af37;
  }
  [data-style="art_deco"] .sc-card {
    border: 1px solid #d4af37;
    border-radius: 0;
    background: #1a1206;
    box-shadow: inset 0 0 0 3px #d4af37, inset 0 0 0 5px #1a1206, inset 0 0 0 6px #d4af37;
  }
  [data-style="art_deco"] .sc-btn-primary {
    background: #d4af37;
    color: #1a1206;
    border-radius: 0;
    letter-spacing: 0.25em;
    border: none;
  }
  ```

  **bauhaus**
  ```css
  [data-style="bauhaus"] .style-showcase {
    background: #ffffff;
    color: #000000;
  }
  [data-style="bauhaus"] .sc-card {
    border: 3px solid #000;
    border-radius: 0;
    box-shadow: none;
    background: #fff;
  }
  [data-style="bauhaus"] .sc-btn-primary {
    background: #E63F00;
    color: #fff;
    border-radius: 0;
    border: none;
    letter-spacing: 0.1em;
  }
  [data-style="bauhaus"] .sc-badge { background: #004FFF; color: #fff; }
  ```

  **dark_glassmorphism**
  ```css
  [data-style="dark_glassmorphism"] .style-showcase {
    background: linear-gradient(135deg, #0a0015 0%, #12001f 100%);
  }
  [data-style="dark_glassmorphism"] .sc-card {
    background: rgba(100,0,200,0.1);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(160,80,255,0.25);
    border-radius: 16px;
    box-shadow: 0 8px 32px rgba(100,0,200,0.3);
  }
  ```

  **claymorphism**
  ```css
  [data-style="claymorphism"] .style-showcase {
    background: #f0e8ff;
    color: #3a1f5d;
  }
  [data-style="claymorphism"] .sc-card {
    border-radius: 24px;
    border: none;
    background: #c9b8ff;
    box-shadow: 8px 8px 20px rgba(139,100,230,0.3), -4px -4px 10px rgba(255,255,255,0.7), inset 2px 2px 6px rgba(255,255,255,0.5);
  }
  [data-style="claymorphism"] .sc-btn-primary {
    border-radius: 20px;
    background: #7c4dff;
    border: none;
    box-shadow: 4px 4px 12px rgba(124,77,255,0.4), -2px -2px 6px rgba(255,255,255,0.4);
  }
  ```

  **material_design**
  ```css
  [data-style="material_design"] .style-showcase {
    background: #fafafa;
    color: #212121;
  }
  [data-style="material_design"] .sc-card {
    border-radius: 4px;
    border: none;
    box-shadow: 0 2px 4px rgba(0,0,0,0.12), 0 4px 8px rgba(0,0,0,0.08);
    background: #fff;
  }
  [data-style="material_design"] .sc-btn-primary {
    background: #6200EE;
    border-radius: 4px;
    border: none;
    box-shadow: 0 3px 6px rgba(98,0,238,0.4);
    letter-spacing: 0.08em;
  }
  ```

  **flat_design**
  ```css
  [data-style="flat_design"] .style-showcase {
    background: #ecf0f1;
    color: #2c3e50;
  }
  [data-style="flat_design"] .sc-card {
    border-radius: 4px;
    border: none;
    box-shadow: none;
    background: #ffffff;
  }
  [data-style="flat_design"] .sc-btn-primary {
    background: #3498db;
    border-radius: 4px;
    border: none;
    box-shadow: none;
  }
  ```

  - [ ] Continue with remaining styles (`maximalism`, `skeuomorphism`, `dark_mode`, etc.) following the same pattern. For each style, choose a background, a foreground color, and styling for `.sc-card` and `.sc-btn-primary` that is **instantly recognizable** as that style.

### Step 1.3 — Verify visually
- [ ] Open `index.html` in a browser (via a local server or by double-clicking)
- [ ] Click several styles in the sidebar (e.g., Glassmorphism, Neobrutalism, Vaporwave, Minimalism)
- [ ] In the right-hand **visual examples** panel, confirm that each style looks **unmistakably distinct** from the others
- [ ] Fix any styles that still look too similar or broken

---

> ### 🛑 STOP — USER REVIEW (after Milestone 1)
> **Agent**: Before continuing, report to the user:
> - Which file was edited (`app/css/visuals.css`)
> - List the style names whose CSS blocks were added or modified
> - Ask the user to open the site, navigate to at least **3 different styles** (e.g. Glassmorphism, Neobrutalism, Vaporwave) and confirm the showcase on the right looks visually distinct and correct for each
> - **Do not begin Milestone 2 until the user confirms the showcases look correct.**

---

## Milestone 2 — Typography Per Style in Showcase

**Goal**: Each style's showcase panel should use an authentic typeface. Inter is the default; we need to inject different Google Fonts per style.

### Step 2.1 — Define a font map
- [ ] In `app/js/app.js`, near the top of the file (after the `state` object, before `init()`), add a constant:
  ```js
  const STYLE_FONTS = {
    bauhaus:              'https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap',
    swiss_design:         'https://fonts.googleapis.com/css2?family=Barlow:wght@400;700&display=swap',
    editorial_magazine:   'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&display=swap',
    serif_luxury:         'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&display=swap',
    dark_luxury:          'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;600&display=swap',
    monospace_terminal:   'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap',
    retro_web:            'https://fonts.googleapis.com/css2?family=VT323&display=swap',
    brutalism:            'https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap',
    newspaper_print:      'https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap',
    typographic_editorial:'https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&display=swap',
    corporate_memphis:    'https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;900&display=swap',
    pastel_kawaii:        'https://fonts.googleapis.com/css2?family=Quicksand:wght@400;600&display=swap',
    cottagecore:          'https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;1,400&display=swap',
    pixel_art_8bit:       'https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap',
    handcrafted_zine:     'https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&display=swap',
  };
  ```

### Step 2.2 — Load the font when a style entry is rendered
- [ ] In `app/js/app.js`, find the `renderEntry` function
- [ ] At the top of that function, after the entry is retrieved, add this logic:
  ```js
  // Inject style-specific font if defined
  const fontUrl = STYLE_FONTS[id];
  if (fontUrl) {
      const existingLink = document.querySelector(`link[data-style-font="${id}"]`);
      if (!existingLink) {
          const link = document.createElement('link');
          link.rel = 'stylesheet';
          link.href = fontUrl;
          link.setAttribute('data-style-font', id);
          document.head.appendChild(link);
      }
  }
  ```

### Step 2.3 — Apply the font in matching CSS rules
- [ ] In `visuals.css`, for each style that has a font defined in `STYLE_FONTS`, add a `font-family` override to its `[data-style="id"] .style-showcase` rule. Example:
  ```css
  [data-style="bauhaus"] .style-showcase { font-family: 'Bebas Neue', sans-serif; }
  [data-style="monospace_terminal"] .style-showcase { font-family: 'JetBrains Mono', monospace; }
  [data-style="retro_web"] .style-showcase { font-family: 'VT323', monospace; letter-spacing: 0.05em; }
  [data-style="pixel_art_8bit"] .style-showcase { font-family: 'Press Start 2P', monospace; font-size: 0.65em; }
  [data-style="editorial_magazine"] .style-showcase { font-family: 'Playfair Display', serif; }
  [data-style="serif_luxury"] .style-showcase { font-family: 'Cormorant Garamond', serif; letter-spacing: 0.05em; }
  [data-style="handcrafted_zine"] .style-showcase { font-family: 'Caveat', cursive; }
  [data-style="corporate_memphis"] .style-showcase { font-family: 'Nunito', sans-serif; }
  [data-style="pastel_kawaii"] .style-showcase { font-family: 'Quicksand', sans-serif; }
  ```

### Step 2.4 — Verify
- [ ] Open the browser and navigate to `#/styles/bauhaus` — the showcase on the right should now use Bebas Neue
- [ ] Navigate to `#/styles/monospace_terminal` — should use JetBrains Mono
- [ ] Navigate to `#/styles/pixel_art_8bit` — should use Press Start 2P
- [ ] Confirm fonts load within 1–2 seconds (they rely on Google Fonts CDN, so internet connection is required)

---

> ### 🛑 STOP — USER REVIEW (after Milestone 2)
> **Agent**: Before continuing, report to the user:
> - The `STYLE_FONTS` constant was added to `app/js/app.js`
> - Font-injection logic was added to `renderEntry()`
> - Font-family overrides were added to `app/css/visuals.css`
> - Ask the user to navigate to `#/styles/bauhaus`, `#/styles/monospace_terminal`, and `#/styles/pixel_art_8bit` and confirm each one renders with a visually different typeface in the showcase panel
> - **Do not begin Milestone 3 until the user confirms fonts are loading.**

---

## Milestone 3 — Landing Page Visual Grid

**Goal**: Replace the minimal landing page with a rich preview grid that shows 8 style cards rendered in their own aesthetics, so visitors immediately see what the library contains.

### Step 3.1 — Create the grid data
- [ ] In `app/js/app.js`, find the `renderLanding()` function
- [ ] Add a constant just above `renderLanding()` for the featured styles:
  ```js
  const FEATURED_STYLES = [
    'glassmorphism', 'neobrutalism', 'neumorphism', 'cyberpunk',
    'minimalism', 'vaporwave', 'claymorphism', 'art_deco'
  ];
  ```

### Step 3.2 — Rewrite `renderLanding()` to include the grid
- [ ] In `renderLanding()`, after the existing hero `<div>`, add a featured grid section:
  ```js
  const featuredGrid = FEATURED_STYLES.map(styleId => `
    <a href="#/styles/${styleId}" class="featured-card" data-style="${styleId}">
      <div class="featured-card-inner" data-style="${styleId}">
        <div class="sc-card">
          <div class="sc-card-img"></div>
          <div class="sc-card-content">
            <div class="sc-card-title">${styleId.replace(/_/g, ' ')}</div>
          </div>
        </div>
      </div>
      <span class="featured-label">${styleId.replace(/_/g, ' ')}</span>
    </a>
  `).join('');

  // Append to contentMount after hero section:
  // add <section class="featured-grid"><h2>explore styles</h2><div class="featured-grid-items">${featuredGrid}</div></section>
  ```
- [ ] Replace the full `contentMount.innerHTML` in `renderLanding()` with a complete HTML string that includes both the hero `<div>` and this new featured grid `<section>`.

### Step 3.3 — Style the featured grid
- [ ] In `app/css/main.css`, add CSS for `.featured-grid`, `.featured-grid-items`, `.featured-card`, `.featured-card-inner`, `.featured-label`:
  ```css
  .featured-grid {
    padding: var(--space-2xl) var(--space-xl);
    max-width: 960px;
    margin: 0 auto;
  }
  .featured-grid h2 {
    font-size: 0.75rem;
    letter-spacing: 0.15em;
    color: var(--text-muted);
    margin-bottom: var(--space-lg);
  }
  .featured-grid-items {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: var(--space-md);
  }
  .featured-card {
    display: block;
    text-decoration: none;
    border-radius: 12px;
    overflow: hidden;
    transition: transform var(--transition-fast), box-shadow var(--transition-fast);
    border: 1px solid var(--border-base);
  }
  .featured-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-md);
  }
  .featured-card-inner {
    height: 120px;
    padding: var(--space-md);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .featured-label {
    display: block;
    padding: var(--space-sm) var(--space-md);
    font-size: 0.75rem;
    border-top: 1px solid var(--border-base);
    background: var(--bg-surface);
    color: var(--text-secondary);
  }
  ```
- [ ] The `.featured-card-inner` uses `data-style` which will pick up the same `visuals.css` overrides from Milestone 1, so the cards will automatically reflect each style's aesthetic.

### Step 3.4 — Also update the hardcoded HTML landing in `index.html`
- [ ] Open `c:\Users\nikalys\Desktop\veria\index.html`
- [ ] Find the `<section class="landing-page entry-page">` block
- [ ] After the closing `</div>` of `<div class="shortcuts">`, add the same featured grid HTML structure (matching what `renderLanding()` now outputs) so that the initial page load also shows the grid before JS runs.

### Step 3.5 — Verify
- [ ] Open the site. The landing page should now show the hero + a grid of 8 style preview cards
- [ ] Hovering each card should trigger a subtle lift animation
- [ ] Clicking any card should navigate to that style's entry

---

> ### 🛑 STOP — USER REVIEW (after Milestone 3)
> **Agent**: Before continuing, report to the user:
> - `renderLanding()` in `app/js/app.js` was rewritten
> - New CSS classes were added to `app/css/main.css`
> - The hardcoded section in `index.html` was updated
> - Ask the user to open the site's home page (`#/`) and confirm: (1) a grid of 8 style preview cards is visible below the hero, (2) each card looks styled differently, (3) hovering causes a lift animation, (4) clicking navigates to the correct style entry
> - **Do not begin Milestone 4 until all four landing page checks pass.**

---

## Milestone 4 — Component Live Previews

**Goal**: The "visuals" tab on component pages should show a live rendered preview of the component itself (not just cross-reference cards).

### Step 4.1 — Create a component showcase renderer
- [ ] In `app/js/app.js`, create a new function `renderComponentShowcase(id)` near `renderStyleShowcase`:
  ```js
  function renderComponentShowcase(id) {
    // This object maps component ids to their HTML preview snippets.
    // Each snippet shows multiple variants of the component.
    const showcaseMap = {
      button: `
        <div class="comp-showcase-grid">
          <div class="comp-variant"><label>primary</label><button class="sc-btn sc-btn-primary">get started</button></div>
          <div class="comp-variant"><label>secondary</label><button class="sc-btn sc-btn-secondary">learn more</button></div>
          <div class="comp-variant"><label>ghost</label><button class="sc-btn sc-btn-ghost">view all</button></div>
          <div class="comp-variant"><label>danger</label><button class="sc-btn sc-btn-danger">delete</button></div>
          <div class="comp-variant"><label>disabled</label><button class="sc-btn sc-btn-primary" disabled>disabled</button></div>
          <div class="comp-variant"><label>icon + label</label><button class="sc-btn sc-btn-primary">★ save</button></div>
        </div>`,
      card: `
        <div class="comp-showcase-grid">
          <div class="comp-variant"><label>image card</label>
            <div class="sc-card" style="width:180px">
              <div class="sc-card-img"></div>
              <div class="sc-card-content"><div class="sc-card-title">card title</div><p style="font-size:0.75rem;opacity:.7">supporting detail text goes here</p></div>
            </div>
          </div>
          <div class="comp-variant"><label>text-only card</label>
            <div class="sc-card" style="width:180px;padding:16px">
              <div class="sc-card-title">text card</div>
              <p style="font-size:0.75rem;opacity:.7;margin-top:8px">no image, just content</p>
            </div>
          </div>
        </div>`,
      modal_dialog: `
        <div class="comp-showcase-grid">
          <div class="comp-variant"><label>modal</label>
            <div style="position:relative;width:220px;height:140px;background:rgba(0,0,0,0.4);border-radius:8px;display:flex;align-items:center;justify-content:center;">
              <div class="sc-card" style="width:180px;padding:16px">
                <div class="sc-card-title" style="margin-bottom:8px">confirm action</div>
                <p style="font-size:0.75rem;opacity:.7;margin-bottom:12px">this cannot be undone.</p>
                <div style="display:flex;gap:8px"><button class="sc-btn sc-btn-primary" style="font-size:0.7rem;padding:6px 10px">confirm</button><button class="sc-btn sc-btn-secondary" style="font-size:0.7rem;padding:6px 10px">cancel</button></div>
              </div>
            </div>
          </div>
        </div>`,
      toggle_switch: `
        <div class="comp-showcase-grid">
          <div class="comp-variant"><label>off</label><div class="sc-toggle"></div></div>
          <div class="comp-variant"><label>on</label><div class="sc-toggle on"></div></div>
        </div>`,
      accordion: `
        <div class="comp-showcase-grid">
          <div class="comp-variant" style="width:100%"><label>closed</label>
            <div class="sc-accordion"><div class="sc-accordion-header"><span>what is design?</span><span>↓</span></div></div>
          </div>
          <div class="comp-variant" style="width:100%"><label>open</label>
            <div class="sc-accordion"><div class="sc-accordion-header"><span>what is design?</span><span>↑</span></div><div style="padding:12px;font-size:0.8rem;opacity:.8">design is the intentional arrangement of elements to solve problems.</div></div>
          </div>
        </div>`,
      navigation_bar: `
        <div class="comp-showcase-grid">
          <div class="comp-variant" style="width:100%"><label>standard</label>
            <nav class="sc-navbar"><div class="sc-logo">logo</div><div class="sc-nav-links"><span>about</span><span>work</span><span>contact</span></div></nav>
          </div>
          <div class="comp-variant" style="width:100%"><label>with cta</label>
            <nav class="sc-navbar"><div class="sc-logo">logo</div><div class="sc-nav-links"><span>about</span><span>work</span><button class="sc-btn sc-btn-primary" style="font-size:0.75rem;padding:6px 12px">sign up</button></div></nav>
          </div>
        </div>`,
      badge_pill_tag: `
        <div class="comp-showcase-grid">
          <div class="comp-variant"><label>default</label><span class="sc-badge">default</span></div>
          <div class="comp-variant"><label>accent</label><span class="sc-badge" style="background:var(--accent-primary);color:#fff">new</span></div>
          <div class="comp-variant"><label>success</label><span class="sc-badge" style="background:#22c55e;color:#fff">live</span></div>
          <div class="comp-variant"><label>danger</label><span class="sc-badge" style="background:#ef4444;color:#fff">error</span></div>
          <div class="comp-variant"><label>pill</label><span class="sc-badge" style="border-radius:999px">pill tag</span></div>
        </div>`,
      text_input_textarea: `
        <div class="comp-showcase-grid">
          <div class="comp-variant"><label>text input</label><div class="sc-input-group"><label style="font-size:0.7rem">email</label><input type="text" class="sc-input" placeholder="hello@veria.io"></div></div>
          <div class="comp-variant"><label>textarea</label><textarea class="sc-input" rows="3" placeholder="your message..." style="resize:none;width:180px"></textarea></div>
          <div class="comp-variant"><label>error state</label><input type="text" class="sc-input" value="invalid@" style="border-color:#ef4444"></div>
        </div>`,
    };
    const html = showcaseMap[id] || `<p style="opacity:0.5;padding:var(--space-lg)">visual preview not yet available for this component.</p>`;
    return `<div class="comp-showcase-wrapper"><h3 class="showcase-header">component preview</h3>${html}</div>`;
  }
  ```

### Step 4.2 — Wire `renderComponentShowcase` into the visuals tab
- [ ] In `app/js/app.js`, find the `renderVisualsMatrix` function
- [ ] At the **very top** of `renderVisualsMatrix`, before the existing matrix code, insert:
  ```js
  // If we have a component showcase for this id, show it first
  const compShowcase = renderComponentShowcase(id);
  ```
- [ ] Then prepend `compShowcase` to the return value HTML string so it appears above the cross-reference matrix

### Step 4.3 — Style the component showcase grid
- [ ] In `app/css/main.css`, add:
  ```css
  .comp-showcase-wrapper { margin-bottom: var(--space-xl); }
  .comp-showcase-grid {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-lg);
    padding: var(--space-lg);
    background: var(--bg-surface);
    border: 1px solid var(--border-base);
    border-radius: 8px;
    margin-top: var(--space-md);
  }
  .comp-variant {
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
    align-items: flex-start;
  }
  .comp-variant label {
    font-size: 0.65rem;
    letter-spacing: 0.1em;
    color: var(--text-muted);
  }
  ```

### Step 4.4 — Verify
- [ ] Navigate to `#/components/button` → click the "visuals" tab → should show 6 button variants
- [ ] Navigate to `#/components/badge_pill_tag` → visuals tab → should show 5 badge variants
- [ ] Navigate to `#/components/modal_dialog` → visuals tab → should show a modal preview

---

> ### 🛑 STOP — USER REVIEW (after Milestone 4)
> **Agent**: Before continuing, report to the user:
> - `renderComponentShowcase()` function was added to `app/js/app.js`
> - It was wired into `renderVisualsMatrix()`
> - New CSS was added to `app/css/main.css`
> - Ask the user to navigate to `#/components/button`, click the **visuals** tab, and confirm 6 button variants are visible. Then check `#/components/badge_pill_tag` visuals tab for 5 badge variants.
> - **Do not begin Milestone 5 until the component previews are confirmed working.**

---

## Milestone 5 — Content Depth Upgrades

**Goal**: Add "do/don't" guidance, real-world examples, and a signature CSS snippet to each entry's content.

### Step 5.1 — Update the markdown template for all future entries
- [ ] Open `c:\Users\nikalys\Desktop\veria\app\CONTENT_MANAGEMENT.md`
- [ ] Add two new optional sections to the template:
  ```markdown
  **Do**:
  - **Do**: Short positive guidance statement.
  - **Do**: Another positive guidance.

  **Don't**:
  - **Don't**: A common mistake to avoid.
  - **Don't**: Another anti-pattern.

  **In the Wild**:
  - **Apple macOS Big Sur** — popularized the frosted glass effect at the OS level.
  - **Stripe** — landmark use of clean, high-contrast minimalism in fintech.

  **Signature CSS**:
  backdrop-filter: blur(10px); background: rgba(255,255,255,0.1);
  ```

### Step 5.2 — Update the content parser (`scripts/` or build script)
- [ ] Find the build script. Check `c:\Users\nikalys\Desktop\veria\scripts\` or the root directory for `build-content.js`
- [ ] Open that script and add regex parsing for the three new sections:
  - `**Do**:` → parse as array field `dos`
  - `**Don't**:` → parse as array field `donts`
  - `**In the Wild**:` → parse as array field `inTheWild`
  - `**Signature CSS**:` → parse as string field `signatureCSS`
- [ ] Follow the exact same pattern already used for `**Variations**:` and `**Use Cases**:` in the script

### Step 5.3 — Update `renderTabContent` in `app.js` to render new fields
- [ ] In `app/js/app.js`, find `renderTabContent`
- [ ] Add the new fields to the `'overview'` tab render block:
  ```js
  if (entry.dos && entry.dos.length) {
    html += `<section class="content-section do-dont-grid">
      <div class="do-block">
        <h2>✓ do</h2>
        <ul>${entry.dos.map(d => `<li>${escapeHTML(d.description || d)}</li>`).join('')}</ul>
      </div>
      ${entry.donts ? `<div class="dont-block">
        <h2>✗ don't</h2>
        <ul>${entry.donts.map(d => `<li>${escapeHTML(d.description || d)}</li>`).join('')}</ul>
      </div>` : ''}
    </section>`;
  }
  if (entry.inTheWild && entry.inTheWild.length) {
    html += `<section class="content-section">
      <h2>in the wild</h2>
      <div class="entry-list">${entry.inTheWild.map(i => `<div class="entry-item"><h3>${escapeHTML(i.name)}</h3><p>${escapeHTML(i.description)}</p></div>`).join('')}</div>
    </section>`;
  }
  if (entry.signatureCSS) {
    html += `<section class="content-section">
      <h2>signature css</h2>
      <pre class="css-snippet"><code>${escapeHTML(entry.signatureCSS)}</code></pre>
    </section>`;
  }
  ```

### Step 5.4 — Style the new sections
- [ ] In `app/css/main.css`, add:
  ```css
  .do-dont-grid { display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-lg); }
  .do-block h2 { color: #22c55e; }
  .dont-block h2 { color: #ef4444; }
  .css-snippet {
    background: var(--bg-surface);
    border: 1px solid var(--border-base);
    border-left: 3px solid var(--accent-primary);
    border-radius: 4px;
    padding: var(--space-md);
    font-family: 'JetBrains Mono', 'Courier New', monospace;
    font-size: 0.8rem;
    overflow-x: auto;
    white-space: pre-wrap;
  }
  ```

### Step 5.5 — Back-fill Do/Don't + In the Wild + Signature CSS into existing .md files
- [ ] Open each file in `c:\Users\nikalys\Desktop\veria\content\styles\` (50 files) and add the three new sections
- [ ] Start with the 10 most-visited styles: `glassmorphism`, `neumorphism`, `neobrutalism`, `minimalism`, `cyberpunk`, `flat_design`, `material_design`, `claymorphism`, `dark_glassmorphism`, `bauhaus`
- [ ] After editing each file, run the build script (`node build-content.js` from the scripts directory) to regenerate `content.json`
- [ ] Repeat for components — start with the top 10: `button`, `card`, `modal_dialog`, `navigation_bar`, `accordion`, `toggle_switch`, `badge_pill_tag`, `hero_section`, `data_table`, `tabs`

---

> ### 🛑 STOP — USER REVIEW (after Milestone 5)
> **Agent**: Before continuing, report to the user:
> - `CONTENT_MANAGEMENT.md` was updated with new section templates
> - The build script was updated with new regex parsers
> - `renderTabContent()` in `app/js/app.js` was updated to render new fields
> - New CSS was added to `app/css/main.css`
> - Content was back-filled into `.md` files and `content.json` was rebuilt
> - Ask the user to navigate to one of the back-filled style entries (e.g. `#/styles/glassmorphism`) and confirm the **overview** tab shows: (1) a green Do / red Don't section, (2) an "in the wild" section with named examples, (3) a styled code snippet block
> - If the new sections are not rendering, do not proceed — check the build script output for errors first
> - **Do not begin Milestone 6 until content depth sections are visible in at least one live entry.**

---

## Milestone 6 — UX Polish

**Goal**: Fix the small experience gaps that collectively make the site feel unrefined.

### Step 6.1 — Sidebar open by default on desktop
- [ ] In `app/js/app.js`, find the `state` object at the top of the file
- [ ] Change `sidebarCollapsed: true` to:
  ```js
  sidebarCollapsed: window.innerWidth < 768,
  ```
- [ ] In the `init()` function, after the listeners are set up, add:
  ```js
  if (!state.sidebarCollapsed) {
    sidebar.classList.add('expanded');
  }
  ```

### Step 6.2 — Add breadcrumb navigation to every entry
- [ ] In `app/js/app.js`, find `renderEntry`
- [ ] In the `entry-header` HTML for both the `styles` and `components` branches, add above the `<span class="entry-type">` element:
  ```html
  <nav class="entry-breadcrumb">
    <a href="#/">home</a>
    <span>›</span>
    <span>${type}</span>
    <span>›</span>
    <span>${id.replace(/_/g, ' ')}</span>
  </nav>
  ```
- [ ] In `app/css/main.css`, add:
  ```css
  .entry-breadcrumb {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    font-size: 0.72rem;
    color: var(--text-muted);
    margin-bottom: var(--space-md);
  }
  .entry-breadcrumb a { color: var(--text-muted); }
  .entry-breadcrumb a:hover { color: var(--text-primary); }
  ```

### Step 6.3 — Add a "copy link" button to every entry
- [ ] In `app/js/app.js`, in `renderEntry`, inside the header `<div style="display: flex; justify-content: space-between...">`, add alongside the bookmark button:
  ```html
  <button class="copy-link-btn" onclick="copyEntryLink()" title="copy link to this entry">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
      <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/>
      <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/>
    </svg>
  </button>
  ```
- [ ] In `app/js/app.js`, add the function:
  ```js
  function copyEntryLink() {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      const btn = document.querySelector('.copy-link-btn');
      if (btn) {
        btn.title = 'copied!';
        setTimeout(() => { btn.title = 'copy link'; }, 2000);
      }
    });
  }
  ```
- [ ] Style the button in `main.css` to match the bookmark and other icon buttons

### Step 6.4 — CMD+K Command Palette
- [ ] In `app/js/app.js`, at the bottom of `init()`, add:
  ```js
  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      openCommandPalette();
    }
    if (e.key === 'Escape') closeCommandPalette();
  });
  ```
- [ ] Add a `openCommandPalette()` function that:
  1. Creates a full-screen overlay `<div id="cmd-palette-overlay">`
  2. Inside it, renders a centered modal `<div id="cmd-palette">` containing a search `<input>` and a results `<ul>`
  3. On input, filters all entries from `state.manifest` (both styles and components) and renders them as clickable `<li>` items
  4. Clicking a result navigates to that entry via `window.location.hash`
- [ ] Add a `closeCommandPalette()` function that removes the overlay from the DOM
- [ ] Style in `main.css`:
  ```css
  #cmd-palette-overlay {
    position: fixed; inset: 0;
    background: rgba(0,0,0,0.6);
    backdrop-filter: blur(4px);
    z-index: 1000;
    display: flex; align-items: flex-start;
    justify-content: center;
    padding-top: 15vh;
  }
  #cmd-palette {
    width: min(560px, 90vw);
    background: var(--bg-surface);
    border: 1px solid var(--border-base);
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 24px 64px rgba(0,0,0,0.4);
  }
  #cmd-palette input {
    width: 100%;
    padding: var(--space-md) var(--space-lg);
    background: transparent;
    border: none;
    border-bottom: 1px solid var(--border-base);
    color: var(--text-primary);
    font-size: 1rem;
    font-family: var(--font-main);
    outline: none;
  }
  #cmd-palette ul {
    list-style: none;
    max-height: 320px;
    overflow-y: auto;
    padding: var(--space-sm);
  }
  #cmd-palette li a {
    display: flex;
    align-items: center;
    gap: var(--space-md);
    padding: var(--space-sm) var(--space-md);
    border-radius: 6px;
    font-size: 0.9rem;
    color: var(--text-primary);
  }
  #cmd-palette li a:hover { background: var(--bg-base); }
  ```

### Step 6.5 — Add empty search state
- [ ] In `app/js/app.js`, in the `filterSidebar` function, after the loop that hides/shows items, add:
  ```js
  const allHidden = [...document.querySelectorAll('.sidebar-category')]
    .every(cat => cat.style.display === 'none');
  let emptyState = document.getElementById('sidebar-empty');
  if (allHidden && isSearching) {
    if (!emptyState) {
      emptyState = document.createElement('div');
      emptyState.id = 'sidebar-empty';
      emptyState.className = 'sidebar-empty';
      emptyState.innerHTML = `<p>no results for "${query}"</p><button onclick="document.getElementById('sidebar-search').value='';filterSidebar('')">clear search</button>`;
      document.querySelector('.sidebar-content').appendChild(emptyState);
    }
  } else if (emptyState) {
    emptyState.remove();
  }
  ```
- [ ] In `main.css`, style `.sidebar-empty` with centered text, muted color, and a small clear button

### Step 6.6 — Verify all UX polish items
- [ ] Open the site fresh — confirm the sidebar is expanded on desktop
- [ ] Navigate to any entry — confirm the breadcrumb shows `home › styles › glassmorphism`
- [ ] Click the copy link button — confirm the URL is copied (paste in Notepad to verify)
- [ ] Press `Ctrl+K` (or `Cmd+K`) — confirm the command palette opens
- [ ] Type in the palette — confirm results filter live
- [ ] Press `Escape` — confirm the palette closes
- [ ] Search the sidebar for something that doesn't exist — confirm the empty state message appears

---

> ### 🛑 STOP — USER REVIEW (after Milestone 6)
> **Agent**: Before continuing, report to the user:
> - `state.sidebarCollapsed` initialization was changed in `app/js/app.js`
> - Breadcrumb HTML was added to `renderEntry()` in `app/js/app.js`
> - `copyEntryLink()` function and copy-link button were added to `app/js/app.js`
> - `openCommandPalette()` / `closeCommandPalette()` functions were added and keyboard listener was wired in `init()`
> - Empty search state logic was added to `filterSidebar()`
> - New CSS was added to `app/css/main.css` for all the above
> - Ask the user to verify all 6 checks in Step 6.6: sidebar open state, breadcrumbs, copy link, `Ctrl+K` palette, palette filtering, and empty search state
> - **Do not begin Milestone 7 until all 6 UX checks pass.**

---

## Milestone 7 — New Content Categories

**Goal**: Add three new content pillars: Design Principles, Motion & Animation, and Typography Terms.

### Step 7.1 — Create the folder structure
- [ ] Create the folder `c:\Users\nikalys\Desktop\veria\content\principles\`
- [ ] Create the folder `c:\Users\nikalys\Desktop\veria\content\motion\`
- [ ] Create the folder `c:\Users\nikalys\Desktop\veria\content\typography\`

### Step 7.2 — Write content files for Design Principles
- [ ] Create and populate the following files in `content/principles/`, each following the existing `.md` template format:
  - `visual_hierarchy.md`
  - `gestalt_laws.md`
  - `60_30_10_rule.md`
  - `fitts_law.md`
  - `hicks_law.md`
  - `f_pattern_reading.md`
  - `z_pattern_reading.md`
  - `grid_systems.md`
  - `white_space.md`
  - `contrast_and_emphasis.md`

### Step 7.3 — Write content files for Motion & Animation
- [ ] Create and populate the following files in `content/motion/`:
  - `easing_curves.md`
  - `staggered_reveal.md`
  - `microinteractions.md`
  - `skeleton_to_content_transition.md`
  - `parallax_scrolling.md`
  - `entrance_exit_animations.md`
  - `spring_physics.md`
  - `reduced_motion.md`

### Step 7.4 — Write content files for Typography Terms
- [ ] Create and populate the following files in `content/typography/`:
  - `kerning.md`
  - `leading.md`
  - `tracking.md`
  - `modular_scale.md`
  - `type_hierarchy.md`
  - `font_pairing.md`
  - `optical_alignment.md`
  - `baseline_grid.md`
  - `variable_fonts.md`
  - `display_vs_body_type.md`

### Step 7.5 — Update the sidebar to show the new categories
- [ ] Open `c:\Users\nikalys\Desktop\veria\index.html`
- [ ] In the `<aside class="sidebar">`, add three new `<div class="sidebar-section">` blocks for `principles`, `motion`, and `typography`, each with their own `<ul id="X-list">` element

### Step 7.6 — Update the manifest and build script
- [ ] Open `c:\Users\nikalys\Desktop\veria\app\data\manifest.json`
- [ ] Add new top-level keys for `principles`, `motion`, and `typography` following the same structure as `styles` and `components`
- [ ] Update the build script to also read from the three new `content/` subdirectories
- [ ] Update `renderSidebar()` in `app.js` to also render the three new sections

### Step 7.7 — Update routing to handle the new types
- [ ] In `app/js/app.js`, find `handleRouting()` and `renderEntry()`
- [ ] In `renderEntry`, change `const validTypes = ['components', 'styles'];` to include `'principles'`, `'motion'`, and `'typography'`
- [ ] Add a `data-type` attribute assignment per type so the entry header renders the correct label

### Step 7.8 — Rebuild and verify
- [ ] Run the build script to regenerate `content.json` with the new categories
- [ ] Refresh the browser — the sidebar should show three new sections
- [ ] Click a principle entry — confirm it loads correctly with the standard entry layout

---

> ### 🛑 STOP — USER REVIEW (after Milestone 7)
> **Agent**: Before continuing, report to the user:
> - Three new folders were created in `content/` (principles, motion, typography)
> - A total of 28 new `.md` files were created across those folders
> - `index.html` was updated with three new sidebar sections
> - `manifest.json` was updated with three new keys
> - The build script was updated to read from the new directories
> - `renderSidebar()` and `renderEntry()` in `app.js` were updated
> - `content.json` was regenerated
> - Ask the user to: (1) open the site and confirm three new sidebar sections appear (Principles, Motion, Typography), (2) click one entry from each new section and confirm it loads correctly with a definition, history, and at minimum one other section
> - **Do not begin Milestone 8 until all three new categories are confirmed working in the browser.**

---

## Milestone 8 — Compare Mode

**Goal**: Allow users to select two entries and view them side by side.

### Step 8.1 — Add a Compare button to each entry header
- [ ] In `app/js/app.js`, in `renderEntry`, alongside the bookmark and copy-link buttons, add:
  ```html
  <button class="compare-btn" data-id="${type}/${id}" onclick="toggleCompare('${type}', '${id}')">+ compare</button>
  ```

### Step 8.2 — Add compare state and toggle logic
- [ ] In the `state` object, add: `compareItems: []`
- [ ] Add the function:
  ```js
  function toggleCompare(type, id) {
    const key = `${type}/${id}`;
    const idx = state.compareItems.indexOf(key);
    if (idx !== -1) {
      state.compareItems.splice(idx, 1);
    } else {
      if (state.compareItems.length >= 2) state.compareItems.shift();
      state.compareItems.push(key);
    }
    updateCompareBar();
  }
  ```

### Step 8.3 — Add a persisent compare bar at the bottom of the page
- [ ] In `index.html`, before `</body>`, add:
  ```html
  <div id="compare-bar" class="compare-bar" style="display:none">
    <span id="compare-items-label"></span>
    <button onclick="launchCompare()">compare side by side →</button>
    <button onclick="clearCompare()">clear</button>
  </div>
  ```
- [ ] In `app/js/app.js`, add:
  ```js
  function updateCompareBar() {
    const bar = document.getElementById('compare-bar');
    const label = document.getElementById('compare-items-label');
    if (!bar || !label) return;
    bar.style.display = state.compareItems.length > 0 ? 'flex' : 'none';
    label.textContent = state.compareItems.map(k => k.split('/')[1].replace(/_/g, ' ')).join(' vs. ');
  }
  function clearCompare() { state.compareItems = []; updateCompareBar(); }
  function launchCompare() {
    if (state.compareItems.length < 2) return;
    window.location.hash = `#/compare/${state.compareItems.join('|')}`;
  }
  ```

### Step 8.4 — Add compare routing and render
- [ ] In `handleRouting()`, add a case for `parts[0] === 'compare'` that calls `renderCompareView(parts[1])`
- [ ] Add a `renderCompareView(compoundKey)` function that:
  1. Splits the key by `|` to get two `type/id` pairs
  2. Looks up both entries from `state.contentData`
  3. Renders a split-screen layout with each entry's full `renderEntry` output side by side

### Step 8.5 — Style the compare bar and view
- [ ] In `main.css`:
  ```css
  .compare-bar {
    position: fixed; bottom: 0; left: 0; right: 0;
    background: var(--accent-primary);
    color: #fff;
    padding: var(--space-md) var(--space-xl);
    display: flex; align-items: center; gap: var(--space-lg);
    z-index: 100;
    font-size: 0.85rem;
  }
  .compare-bar button {
    background: rgba(255,255,255,0.2);
    border: 1px solid rgba(255,255,255,0.4);
    color: #fff;
    padding: var(--space-xs) var(--space-md);
    border-radius: 4px;
    cursor: pointer;
  }
  .compare-view {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1px;
    background: var(--border-base);
    min-height: 100vh;
  }
  .compare-pane {
    background: var(--bg-base);
    padding: var(--space-xl);
    overflow-y: auto;
  }
  ```

### Step 8.6 — Verify
- [ ] Navigate to any style entry — click "+ compare"
- [ ] Navigate to a second style entry — click "+ compare"
- [ ] The compare bar at the bottom should show both names and a "compare side by side" button
- [ ] Click "compare side by side" — should show a split view with both entries rendered

---

> ### 🛑 STOP — USER REVIEW (after Milestone 8)
> **Agent**: This is the final milestone. Report to the user:
> - `compareItems` was added to `state` in `app/js/app.js`
> - `toggleCompare()`, `updateCompareBar()`, `clearCompare()`, `launchCompare()`, and `renderCompareView()` functions were added to `app/js/app.js`
> - Compare route case was added to `handleRouting()`
> - Compare button was added to the entry header in `renderEntry()`
> - Compare bar HTML was added to `index.html`
> - Compare bar and view CSS was added to `app/css/main.css`
> - Ask the user to run the full 4-step verification in Step 8.6
> - **All 8 milestones are now complete. Congratulate the user and ask if they would like to begin working on V2 scope items (Style Mixer, Palette Generator, Design Quiz, Figma Plugin).**
