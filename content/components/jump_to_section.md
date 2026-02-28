# Jump-to-Section (ScrollSpy)

**Definition**: An interactive navigation pattern used exclusively for long, single-page documents. It typically manifests as a sticky sidebar or fixed top bar containing a table of contents. As the user scrolls down the page, the navigation automatically highlights the link corresponding to the section currently visible in the viewport (often using a tool called "ScrollSpy"). Conversely, clicking a link smoothly scrolls the page directly to that specific section header using anchor tags.

**History**: Before AJAX and single-page applications, clicking a classic HTML anchor link (e.g., `#about-us`) would cause a harsh, instant jump to that point on the page, often disorienting the user. With the rise of the "One-Page Website" trend in the early 2010s, designers used jQuery to animate the scrolling motion (making it smooth). "ScrollSpy" logic was added to provide critical feedback: telling the user exactly where they were in the massive document without requiring them to check the scrollbar handle.

**Variations**:
- **Sticky Table of Contents (Sidebar)**: The most prevalent iteration for documentation or long-form editorials. A sticky list of headers sits on the right or left of the text. As you read down paragraphs, the active highlight moves down the menu.
- **Sticky Top Bar Anchor Menu**: Frequently used on SaaS product/pricing pages. A secondary navbar appears below the main header, highlighting sections like "Features," "Integrations," and "FAQ" as the user scrolls past massive marketing blocks.
- **Dot Navigation (Vertical)**: Common in aggressive "One-Page Portfolios." A series of tiny, unlabelled dots fixed to the right side of the screen. Hovering over a dot reveals the section name; scrolling updates the active dot.

**Use Cases**:
- **Developer Documentation & APIs**: The undisputed gold standard for reading deep specs (like Stripe or Tailwind CSS docs), allowing developers to instantly jump between "Installation," "Configuration," and "Methods."
- **Long-Form Journalism**: Used extensively by major publications (NYT, Bloomberg) to guide readers through massive, multimedia feature articles.
- **Single Page Marketing Sites / App Landers**: A way to compress an entire website (About, Team, Product, Contact) into a single continuous scroll while giving the user instant teleportation abilities.

**Related**:
- Sidebar Framework
- Split Screen Layout
- Navigation Bar (Navbar)

**Cross-Refs**:
- Sticky TOC (Table of Contents) Sidebar
- One-Page Vertical Dot Navigation
- Smooth Scroll Header Anchors
