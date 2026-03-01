# veria — Project Plan

> **Status:** Phase 1 Complete — moving to content architecture.

---

## 1. Selected Name

✅ **Selected:** *veria*

---

## 2. Tagline Candidates

✅ **Selected:** *The language your eyes already speak.*

---

## 3. Identity

### Tone & Voice
- **Academic & authoritative** in content — accurate terminology, well-structured definitions, proper categorization
- **Friendly & approachable** in experience — clean navigation, no jargon in the UI itself, visual-first browsing
- **Lowercase typography** — UI text, branding, and component names will primarily use lowercase styling to reinforce a sleek, modern, and unassuming aesthetic
- Think: *Apple's documentation meets a beautifully organized design museum*

### Audience (priority order)
1. **Non-designers & beginners** using AI tools who need correct terminology to describe their vision
2. **Aspiring designers** building their design vocabulary
3. **Clients & stakeholders** learning to communicate visual ideas to designers/developers
4. **Experienced designers** using it as a quick-reference or teaching tool

### Positioning
> A visual reference library that helps anyone translate the design in their mind into the precise language needed to bring it to life — whether through AI tools, conversations with designers, or their own projects.

---

## 4. UI/UX Architecture & Layout

### Global Layout (The "Documentation" Model)
- **Top Navigation Bar**: Transparent and sticky. Houses the centered "veria" logo (acting as home link).
- **Right-side Nav Actions**: Includes a "Bookmarks" tab (to view saved components/styles) and a Light/Dark Mode toggle.
- **Left Sidebar (Navigation)**: Persistent navigation menu organized into **Categorized Accordions** (e.g., clicking "UI Components" expands further into "Layouts", "Navigation"). Can be collapsed into an "Icon Only" mode.
- **Main Content Area**: The right side of the screen where the selected entry's details are displayed.

### The Entry Page Layout (Tabbed UI)
When viewing a specific Component or Style, the page will not be an infinite scroll. It will feature a clean, minimal **Tabbed Interface**:
- **Tab 1: Overview** (Definition & History)
- **Tab 2: Variations**
- **Tab 3: Use Cases**
- **Tab 4: Visuals / Styles Matrix** (The cross-referencing system engine).

### The Cross-Referencing Matrix (Physical Visuals)
Instead of just providing text links to related items, the site will prove its value visually.
- **On a Component Page (e.g., "Nav Bar")**: The "Visuals" tab will display an actual HTML/CSS rendering of a Nav Bar. The user can scroll or toggle through how that exact Nav Bar looks when our different Visual Styles (e.g., Cyberpunk, Glassmorphism, Brutalism) are applied to it.
- **On a Style Page (e.g., "Cyberpunk")**: The "Visuals" tab will display that exact style applied across different core UI components (a Cyberpunk Button, a Cyberpunk Card, a Cyberpunk Nav Bar).

### The Landing/Index Page
- **Primary Action**: A prominent "Browse Library" button.
- **Secondary Actions**: Smaller shortcut buttons directly linking to specific categories (e.g., "UI Layouts," "Finish/Texture Styles").
- **Visuals**: Employs elegant SVG icons next to headings and inside buttons. **Absolutely no emojis.**

### Theme & Color System (Dark Mode First)
- **Default (Dark Mode)**: Base background is very dark grey. Text uses varying tones of light purple to create hierarchy.
- **Optional (Light Mode)**: Base background is very light grey. Text and buttons use darker purple tones, ensuring strict visual contrast.

### Typography
- **Primary Font**: A hyper-clean, modern geometric sans-serif (e.g., Inter or a similar highly legible tech font) across the entire UI for maximum clarity.

---

## 5. Feature Outline

### Core (v1 — Free)
- **Browseable catalogue** of UI Components & Layouts with named variations
- **Browseable catalogue** of Visual Styles & Aesthetic Movements with characteristics and sub-styles
- **Cross-reference matrix** — see how components look across different aesthetics (e.g. *glassmorphic card* vs *brutalist card*)
- **Search** — by name, keyword, or visual characteristic
- **Entry pages** — each component/style gets a dedicated page with description, visual examples, variations, and cross-references

### Future (v2+)
- **Prompt Builder** — select components + styles from the library → generates an accurate prompt for AI tools (Antigravity, Claude Code, v0, etc.)
- **Collections / Mood Boards** — save entries into personal collections
- **Community contributions** — users submit new terms or variations
- **Monetization** via premium prompt builder features (free foundation, paid advanced features later)

---

## 6. Technical Approach

### Stack
- **Vanilla HTML / CSS / JavaScript** — no frameworks, maximum control
- **Extremely modular CSS** — design tokens, utility classes, component styles all separated so the entire visual identity can be restyled later without touching HTML or JS
- **Data-driven content** — entries stored as structured JSON data, rendered by JS templates. This means adding/editing entries doesn't require touching layout code
- **Static site** — no backend needed for v1. Can be hosted anywhere (GitHub Pages, Netlify, Vercel)

### Modularity Principles
The app will be designed for future restyling:
1. All colors, typography, spacing, and effects defined as CSS custom properties (tokens)
2. Component HTML uses semantic classes, not style-specific ones
3. Content (entries, categories, descriptions) lives in JSON data files, separate from presentation
4. Layout and styling are fully decoupled — swapping the stylesheet changes the entire look

---

## 7. Content Architecture (high-level)

### Entry Structure (both categories)
Each entry follows this format:

| Field | Depth | Description |
|---|---|---|
| **Name** | One line | The canonical term |
| **Definition** | 1–2 sentences | What it is, concisely |
| **Brief History** | 2–4 sentences | Origin, evolution, estimated years of prominence |
| **Variations** | Deep list | Every named variation with a one-line description each |
| **Use Cases** | Deep list | Where and why this is used, with specifics |
| **Related** | Links | Related components or styles |
| **Cross-refs** | Links | How this appears across different aesthetics (or components) |

### Example: UI Component Entry
```
Hero Section
├── Definition: "The first full-viewport section a visitor sees..."
├── History: "Emerged in the early 2010s as landing pages replaced...
│            traditional homepages. Became dominant ~2013–2015..."
├── Variations (deep)
│   ├── Split-Screen Hero — viewport divided into two panels...
│   ├── Centered Hero — single focal point, centered text...
│   ├── Full-Bleed Hero — edge-to-edge background image...
│   ├── Video Background Hero — looping video as backdrop...
│   ├── Parallax Hero — layered scrolling depth effect...
│   ├── Animated/Interactive Hero — motion-driven engagement...
│   └── Slider/Carousel Hero — rotating content panels...
├── Use Cases (deep)
│   ├── SaaS landing pages — value prop + CTA above the fold
│   ├── Portfolio sites — dramatic first impression
│   ├── E-commerce — featured product showcase
│   └── Corporate sites — brand statement + navigation entry
├── Related: Navigation Bar, CTA Button, Announcement Bar
└── Cross-refs: [Glassmorphic Hero] [Brutalist Hero] [Minimalist Hero]
```

### Visual Examples
**Text-first for v1.** Visual examples (generated illustrations or screenshots) will be added once site structure and entry layout are finalized.

---

## 8. Verification Plan

Since this is a static web app, verification will be browser-based:
- **Visual review** — open the site in a browser and verify layout, navigation, and responsiveness
- **Content accuracy** — spot-check entries for correct terminology and descriptions
- **Search functionality** — test keyword searches return expected results
- **Cross-references** — verify links between components and styles work correctly
- **Modularity test** — swap CSS tokens and confirm the entire look changes without breaking layout

---

## 9. Implementation Guardrails (Hallucination Reduction — Build Phase)

These rules apply to building the site frame and data wiring. They intentionally do **not** govern content authoring, since entries already exist in markdown files.

1. **Content Source-of-Truth Rule**
	- All displayed component/style content must come only from files in `content/components/` and `content/styles/`.
	- If a field is missing, render a safe fallback label (e.g., "not provided") instead of inventing text.

2. **No-Invention Rendering Rule**
	- The app may transform, format, or truncate existing content, but must not fabricate new definitions, histories, variations, or use cases.
	- Derived UI labels must be deterministic (from slug/title/category), not guessed.

3. **Stable Schema Contract Rule**
	- Define and enforce one normalized entry contract in code (e.g., `id`, `slug`, `title`, `category`, `definition`, `history`, `variations`, `useCases`, `related`, `crossRefs`).
	- Unknown fields are ignored; missing required fields trigger non-blocking warnings and fallback UI.

4. **Deterministic Slug/ID Rule**
	- IDs/slugs are generated by a single utility and never ad hoc in templates.
	- All internal links (`related`, `crossRefs`) resolve through this same canonical mapping layer.

5. **Broken-Link Transparency Rule**
	- If a `related` or `crossRefs` target cannot be resolved, show an explicit unresolved-reference state in development logs.
	- Do not silently reroute to a "closest match."

6. **Frame-First Scope Rule**
	- Initial implementation focuses on information architecture only: shell, nav, sidebar, tabs, and content regions.
	- No visual polish/animation decisions should alter layout semantics before frame approval.

7. **Accessibility-First Structure Rule**
	- Use semantic landmarks from day one (`header`, `nav`, `main`, `aside`, `section`) and a clear heading hierarchy.
	- Interactive frame elements (accordion/sidebar/tabs) must be keyboard reachable and expose correct ARIA states/relationships.

8. **Progressive Enhancement Rule**
	- Base HTML should remain understandable if JavaScript fails.
	- JavaScript enhances interaction (tabs, search/filter, collapse states) but should not block core reading/navigation.

9. **Single Routing Truth Rule**
	- Use one URL/state convention for current view (query/hash/path) and one parser for it.
	- Current UI state must be reproducible from URL reload (no hidden transient state as source of truth).

10. **Search Integrity Rule**
	 - Search indexes only loaded content fields; no synthetic keywords unless explicitly configured.
	 - Match and ranking rules must be documented and deterministic.

11. **Observability for Data Wiring Rule**
	 - In development, log summary counts (entries loaded by type, unresolved refs, duplicate slugs).
	 - Prefer explicit warnings over silent failure.

12. **Verification Gate Rule (Per Milestone)**
	 - Before marking frame milestones complete, run:
		- Build/run check (site loads without console/runtime errors)
		- Link check (internal refs resolve or are flagged)
		- Keyboard pass (tab order and focus visibility)
		- Responsive shell pass (sidebar/top-nav/main regions hold at common breakpoints)

