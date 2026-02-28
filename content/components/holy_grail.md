# Holy Grail Layout

**Definition**: A classic web page layout featuring a header, three vertical columns (a central content area flanked by two sidebars: one for navigation, one for supplementary info), and a footer. The "Holy Grail" aspect refers specifically to the technical difficulty of achieving this fluid, equal-height column structure in the early days of CSS without resorting to HTML tables or hacky javascript calculations.

**History**: Pre-2000, achieving three columns with a header and footer was trivial using `<table width="100%" height="100%">`. But when web standards mandated the separation of content (HTML) and presentation (CSS), this layout became notoriously difficult. Designers spent years inventing terrifying CSS "float" hacks (like the "One True Layout" or the "Faux Columns background image trick") to force three disparate `<div>` elements to stretch to the same height regardless of content length. It remained the "Holy Grail" of CSS engineering until the introduction of CSS Flexbox (2014) and CSS Grid (2017) made it achievable in three lines of code.

**Variations**:
- **Classic News Portal**: Left sidebar for category navigation, massive center column for the main article feed, right sidebar for trending articles/ads, stacked between a masthead and a fat footer.
- **The Modern SaaS App**: Often referred to as a variant of the "App Shell," it maintains the three columns but makes the header, footer, and sidebars fixed to the viewport, allowing only the center content column to scroll independently (e.g., Slack or Discord).
- **Responsive Stacking**: On mobile, the Holy Grail layout collapses perfectly into a single column: Header → Main Content → Left Nav (often hidden in a hamburger) → Right Sidebar Info → Footer.

**Use Cases**:
- **Content-Heavy Publishers**: Blogs, wikis, newspapers (like The Verge or Wikipedia) use it to present massive amounts of text while keeping navigation and related links instantly accessible on both flanks.
- **Complex Productivity Tools**: Any web application requiring persistent navigation (left) and contextual properties/tools (right) while working on a central canvas (like web-based photo editors or CRM platforms).
- **E-Commerce Marketplaces**: Left rail for filtering (size, color, brand), center for the product grid, right rail for shopping cart summary or "items you may like."

**Related**:
- Sidebar Framework
- App Shell
- Split Screen Layout

**Cross-Refs**:
- CSS Grid Holy Grail Layout
- Fixed-Sidebar Scrolling Center Column
- Responsive Stacking Strategy
