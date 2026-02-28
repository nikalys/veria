# veria — Content Organization & Exhaustive Lists

This document serves as our central hub for outlining and tracking all the design vocabulary content before we build the site. 

## 1. File Structure
All content will be drafted in Markdown (`.md`) files first to keep things simple and readable. Later, we can easily script a process to convert these into the JSON data files our website will actually consume.

```text
library/
└── content/
    ├── _organization_plan.md       (This file)
    ├── styles/                     (One file per visual style)
    │   ├── glassmorphism.md
    │   ├── neobrutalism.md
    │   └── ...
    └── components/                 (One file per UI component)
        ├── hero_section.md
        ├── bento_box.md
        └── ...
```

---

## 2. Exhaustive List: Visual Styles & Movements
Our goal is to cover every aesthetic style a user might encounter or want to describe. 

**Status:** *Drafting — please review, add, or suggest removals.*

- [x] **Skeuomorphism** (Hyper-realistic, textured, mimicking physical objects)
- [x] **Flat Design** (2D, no drop shadows, solid colors, clean edges)
- [x] **Material Design** (Flat but with consistent simulated depth, lighting, and physics, popularized by Google)
- [x] **Minimalism** (Extreme simplicity, lots of whitespace, high signal-to-noise ratio)
- [x] **Maximalism** (Sensory overload, bold colors, overlapping elements, anti-whitespace)
- [x] **Brutalism (Web)** (Raw, unstyled HTML look, default system fonts, anti-design aesthetic)
- [x] **Neobrutalism / Neubrutalism** (Harsh, high-contrast, thick black borders, solid harsh shadows, flat vibrant colors)
- [x] **Neumorphism / Soft UI** (Monochromatic, elements extruded from or pressed into the background using soft dual shadows)
- [x] **Glassmorphism** (Frosted glass effect, background blur, semi-transparent overlays, vivid background shapes)
- [x] **Aurora / Gradient Mesh** (Flowing, blurred, multi-color gradients often used as backgrounds)
- [x] **Corporate Memphis / Alegria** (Flat vector illustrations, disproportionate limbs, vibrant friendly colors)
- [x] **Claymorphism** (Puffy, soft, 3D clay-like elements with double inner/outer shadows)
- [x] **Dark Mode / High Contrast** (Deep black/dark gray backgrounds with glowing or high-contrast neon accents)
- [x] **Cyberpunk / Sci-Fi UI** (Neon accents, grid lines, glowing text, complex decorative HUD metrics)
- [x] **Y2K / Frutiger Aero** (Early 2000s tech aesthetic: glossy bubbles, water textures, auroras, lens flares, optimistic futurism)
- [x] **Bauhaus** (Strict grid systems, primary colors, functionalism, stark geometry)
- [x] **Swiss / International Typographic** (Heavy reliance on typography, strict asymmetrical grids, Helvetica, large imagery)
- [x] **Retro / Vintage Web** (90s web: tiled backgrounds, pixel fonts, marquee tags, dithered images)
- [x] **Memphis Design** (80s style: scattered geometric shapes, squiggles, pastel and vibrant contrasting colors)
- [x] **Organic / Natural** (Earthy tones, fluid irregular shapes, soft curves, natural textures)
- [x] **Bento Box / Bento Grid** (Strict grid of isolated cards of varying sizes, popularized by Apple)

**Niche & Combinations**
- [x] **Dark Glassmorphism** (Glassmorphism combined with Dark Mode; deep, moody blurs often seen in crypto/web3)
- [x] **Clean Functionalism** (The modern SaaS aesthetic: unopinionated, high utility, subtle borders, Inter/system fonts)
- [x] **Editorial / Magazine** (Large serif typography, drop caps, asymmetrical layouts, dominant photography)
- [x] **Isometric 3D** (Environments and UI elements rendered at a strict 30-degree angle without perspective convergence)
- [x] **Wireframe / Blueprint UI** (Looks like an unfinished schematic; monospaced fonts, visible grid lines, crosshairs)
- [x] **Holographic / Iridescent** (Metallic, shifting gradients mimicking oil slicks or CDs, often paired with Glassmorphism)
- [x] **Pastel Kawaii / Candy** (Soft, rounded corners, pastel color palettes, playful iconography, heavy use of emojis/stickers)
- [x] **Industrial / Utilitarian** (Monochrome, heavy use of tables, monospaced fonts, warning colors (yellow/black), caution tape motifs)
- [x] **Metallic / Chrome** (Early web revival: shiny liquid metal textures, highly reflective surfaces, metallic gradients)

**Distinct Aesthetic Movements**
- [x] **Vaporwave** (Pastel purples/pinks, retro tech, Roman busts, close cousin to Y2K)
- [x] **Synthwave / Retrowave** (Darker, neon-heavy, 80s grid landscapes, distinct from cyberpunk)
- [x] **Art Deco** (Geometric luxury, gold, highly structured symmetry, high-end web)
- [x] **Psychedelic Groovy** (60s/70s warped type, bold organic shapes, acid colors)
- [x] **Cottagecore** (Soft textures, botanical illustration, handwritten type, earthy palettes)

**Typography/Layout-Driven Styles**
- [x] **Typographic Editorial** (Design where type is the visual, oversized letterforms, text as image)
- [x] **Newspaper Print** (Grid-heavy, column-based, ink-on-paper aesthetic distinct from Swiss design)
- [x] **Monospace Terminal** (Code-aesthetic, green-on-black or amber, distinct from brutalism)

**Finish/Texture-Driven Styles**
- [x] **Frosted Glass (Light)** (Light-mode counterpart to dark glassmorphism)
- [x] **Grain Texture / Matte** (Intentional film grain, matte palettes, anti-polished aesthetic)
- [x] **Handcrafted / Zine** (DIY, collage, cut-and-paste, xerox texture)
- [x] **Pixel Art / 8-Bit** (Deliberately low-res, game-inspired, distinct from retro web)

**Luxury/High-End Styles**
- [x] **Serif Luxury** (Cream backgrounds, elegant serif type, high whitespace, fashion/fragrances)
- [x] **Dark Luxury** (Near-black backgrounds, gold or cream accents, editorial photography)

**Emerging/Current Styles**
- [x] **Dopamine Design** (Maximally saturated color blocking, bold geometric shapes, joyful/energetic)
- [x] **Solarpunk** (Utopian, lush greens, solar/renewable imagery, community-forward)
- [x] **Soft Pastel Minimal** (Extremely light bare-minimum palettes, thin type, wellness/lifestyle)
- [x] **Data Visualization** (Dashboard-forward, charts as design elements, information density)

**Spatial/Dimensional**
- [x] **Retro Futurism** (1950s-60s vision of the future, rockets, chrome, atomic age)
- [x] **Abstract Expressionist** (Painterly, loose, gesture-based digital illustration as UI backdrop)
---

## 3. Exhaustive List: UI Components & Layouts
Our goal is to cover every piece of the puzzle that makes up a web interface.

**Status:** *Drafting — please review, add, or suggest removals.*

### Layouts & Foundations
- [x] **Hero Section** (First viewport: split, centered, full-bleed, video bg)
- [x] **Bento Grid** (Asymmetrical, puzzle-piece card layout)
- [x] **Masonry Grid** (Pinterest-style interlocking columns)
- [x] **Split Screen** (50/50 vertical division)
- [x] **Sidebar Framework** (Persistent side navigation layout)
- [x] **Holy Grail Layout** (Header, Left Col, Main, Right Col, Footer)
- [x] **App Shell** (Standard web app wrapper: Top nav, side rail, main content)
- [x] **Z-Pattern Layout** (Reading pattern guiding the eye left-to-right, down, left-to-right)

### Navigation & Wayfinding
- [x] **Navigation Bar (Navbar)** (Standard top nav, sticky vs static)
- [x] **Mega Menu** (Expansive dropdown with categories/images)
- [x] **Hamburger / Off-Canvas Menu** (Hidden nav revealed via click)
- [x] **Breadcrumbs** (Hierarchical trail of current location)
- [x] **Tabs** (Horizontal or vertical content switching within a view)
- [x] **Pagination** (Page 1, 2, 3... controls)
- [x] **Infinite Scroll** (Content loads continuously as you scroll)
- [x] **Footer** (Fat footer, simple footer, sitemap footer)
- [x] **Floating Action Button (FAB)** (Persistent primary action, usually bottom right)
- [x] **Stepper / Progress Bar** (Multi-step form indicator)
- [x] **Scrollspy / Table of Contents** (Nav that highlights based on scroll position)

### Content Display
- [x] **Card** (Standard container for item data/image)
- [x] **Carousel / Slider** (Horizontal scrolling list of items)
- [x] **Accordion** (Vertically stacked expandable panels)
- [x] **Modal / Dialog** (Popup taking focus from main window)
- [x] **Popover / Tooltip** (Small contextual hover/click information)
- [x] **Drawer / Slide-over** (Panel sliding in from the edge)
- [x] **Avatar** (User profile image representation)
- [x] **Badge / Pill / Tag** (Small status indicator or categorization label)
- [x] **Empty State** (Screen shown when no data exists)

### Input & Interaction
- [x] **Button** (Primary, secondary, ghost, icon-only)
- [x] **Call to Action (CTA) Block** (Dedicated section meant to drive conversation)
- [x] **Search Bar** (Expandable, command palette, standard)
- [x] **Text Input / Textarea** (Standard form fields)
- [x] **Select / Dropdown** (List of options)
- [x] **Radio Group / Checkbox Group** (Mutually exclusive vs multi-select options)
- [x] **Toggle / Switch** (On/off state controller)
- [x] **Slider (Range)** (Selecting a value on a spectrum)
- [x] **File Uploader / Dropzone** (Area to drag/drop files)
- [x] **Date Picker / Calendar** (Date selection interface)

### Data & Information
- [x] **Pricing Table** (Side-by-side tier comparison cards)
- [x] **Feature Matrix / Comparison Table** (Checkmark/X table of features)
- [x] **Data Table** (Standard rows/columns of data, often sortable)
- [x] **Statistic / Metric Block** (Large number + small label)
- [x] **Timeline** (Chronological vertical/horizontal list of events)
- [x] **Testimonial / Review Block** (Quote, user info, rating)
- [x] **Logos / Social Proof Strip** ("Trusted by" company logos)
- [x] **Kanban Board** (Column-based task organization)

### Feedback & Notifications
- [x] **Toast / Snack Bar** (Temporary pop-up notification)
- [x] **Banner / Announcement Bar** (Persistent bar at the very top of site)
- [x] **Alert / Callout Box** (In-flow success/warning/error message)
- [x] **Skeleton Loader** (Placeholder layout shown while data loads)
- [x] **Spinner / Loading Indicator** (Circular or linear wait state)
