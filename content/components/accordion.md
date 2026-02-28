# Accordion / Collapsible

**Definition**: A vertically stacked sequence of interactive headers. Clicking a header expands or collapses the panel below it, revealing or hiding detailed content. It is primarily used to condense massive amounts of information into a scannable list without forcing the user to scroll indefinitely.

**History**: One of the absolute oldest interface patterns on the web, named after the musical instrument that compresses and expands. Like Tabs, Accordions were designed to maximize screen real estate before the concept of "infinite scrolling" existed. They became heavily formalized in modern SaaS by tools like jQuery UI and Bootstrap.

**Variations**:
- **Exclusive Selection (Classic Accordion)**: The mathematical definition of an accordion. When a user clicks to open a panel, any previously opened panel automatically closes. This guarantees the overall visual height of the component never gets wildly out of control.
- **Independent / Multi-Select Collapsibles**: Users can open as many panels simultaneously as they wish. Common in e-commerce sidebars where a user wants to view the "Size," "Color," and "Brand" filter options all at exactly the same time.
- **Flush / Clean List**: Strips away all heavy borders and background colors. Looks like a simple text list with tiny '+/-' or chevron icons next to each item. Emphasizes clean typography and functional minimalism.
- **Nested Accordion**: An accordion panel that, when opened, contains another distinct accordion list inside of it. Extremely dangerous for usability, but often required in highly complex Enterprise SaaS routing structures.

**Use Cases**:
- **FAQ Sections (Frequently Asked Questions)**: The absolute gold standard use-case. Users only care about the specific question they have (the header) and don't want to read dense paragraphs containing answers to questions they don't care about.
- **E-Commerce Product Details**: Stacking "Description," "Shipping Info," "Materials," and "Reviews" vertically below a product image, especially on mobile devices where Tabs often fail horizontally.
- **Left Sidebar Navigation**: Essential in deep desktop web applications (like AWS or Azure) for grouping massive lists of sub-menus under expandable categories.

**Related**:
- Tabs
- Drawer / Slide-over
- Sidebar Framework

**Cross-Refs**:
- Clean Functional Flush Accordion List
- Exclusive Selection Neumorphic Accordion
