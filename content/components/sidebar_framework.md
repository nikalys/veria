# Sidebar Framework

**Definition**: A dominant structural layout pattern where navigation, filters, or secondary actions are housed vertically on the left (or sometimes right) side of the viewport, taking up roughly 15-25% of the screen width, leaving the remaining space for the primary content area. The sidebar is usually persistent (sticky) while the main content scrolls independently.

**History**: One of the oldest layout patterns on the web, initially forced into existence using HTML framesets in the 1990s. When fixed-width containers became standard (1024px width), the sidebar shrank into a narrow column beside the main blog or news feed. In the modern era of wide, responsive SaaS design, the Sidebar has returned as the absolute standard navigation pattern for complex applications, freeing up the top of the screen for data instead of massive horizontal dropdown menus.

**Variations**:
- **Collapsed (Icon-Only) Sidebar**: The sidebar shrinks to a narrow vertical strip displaying only icons, expanding on hover or click. Crucial for maximizing workspace in complex apps (like video editors or code IDEs).
- **Dual Sidebar / Contextual**: A permanent primary navigation sidebar on the far left, followed by a secondary contextual sidebar that changes based on what is selected (classic MacOS Finder or modern email clients like Superhuman).
- **Right Sidebar (Filtering/Properties)**: While navigation lives on the left, a right-hand sidebar is frequently used for localized contextual actions: filtering e-commerce results, changing properties in a design tool (Figma), or leaving comments on a Google Doc.
- **Off-Canvas Sidebar**: On mobile devices, the sidebar is hidden entirely behind a "hamburger" menu icon and slides in from the edge of the screen when requested.

**Use Cases**:
- **Dashboard & SaaS Navigation**: The unquestioned default. It allows for infinitely nested navigation hierarchies (accordions within the sidebar) that a top Navbar cannot support.
- **E-Commerce Filtering**: The classic Amazon or Wayfair layout. The left sidebar contains a dense, scrolling list of checkboxes to filter the product grid on the right.
- **Documentation & Reading**: Keeping a permanent table of contents on the left while reading long-form text on the right (like Stripe Docs).
- **Administration Panels**: WordPress, Shopify, and custom CMS builds use the sidebar to expose massive amounts of administrative routing.

**Related**:
- Split Screen Layout
- Holy Grail Layout
- App Shell
- Hamburger / Off-Canvas Menu

**Cross-Refs**:
- Clean Functional Collapsed Sidebar
- Sticky Filtering Right Sidebar
- Off-Canvas Mobile Navigation Drawer
