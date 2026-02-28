# Navigation Bar (Navbar)

**Definition**: A horizontal block, typically anchored to the very top of a webpage, containing the primary links required to navigate the site's architecture. It almost universally houses the company logo (acting as a link to the homepage) on the far left, primary routing in the center or right, and user-actions (Login, Sign Up, Cart) on the far right.

**History**: One of the earliest and most resilient UI patterns on the internet. Early navbars were often chaotic rows of text links or bulky graphical buttons. As screen widths standardized, the top-horizontal navbar became the definitive convention. The rise of mobile browsing introduced the necessity of responsive navbars (collapsing into hamburger menus), while modern SaaS design introduced "sticky" behaviors and integrated search capabilities.

**Variations**:
- **Static Navbar**: Sits at the top of the document. When the user scrolls down, the navbar scrolls out of view. Used on simple content sites or blogs.
- **Sticky / Fixed Navbar**: Remains locked to the top of the viewport regardless of how far down the user scrolls. Crucial for long landing pages or complex applications so routing is always accessible.
- **Floating Island Navbar**: Instead of stretching 100% across the top edge, the navbar is a contained, rounded pill floating slightly below the top edge (popularized by Glassmorphic and modern sleek SaaS aesthetics).
- **Auto-Hiding (Smart) Navbar**: Disappears when the user scrolls down (to maximize screen real estate for reading) but instantly reappears the moment they scroll up slightly.
- **Transparent to Solid Navbar**: Sits transparently over a Hero image on page load, but transitions to a solid background color once the user begins scrolling to maintain text legibility.

**Use Cases**:
- **E-Commerce**: Often highly complex, featuring a logo, massive search bar, user account dropdown, localized currency selector, and cart icon, usually requiring a "Mega Menu" dropdown.
- **SaaS Marketing Sites**: Usually features a logo, 3-4 feature/pricing links, and a very prominent, distinct "Start Free Trial" CTA button on the right.
- **Web Applications**: Often serves as a global context bar (search, notifications, profile) rather than primary routing, which is frequently handed off to a left Sidebar.

**Related**:
- Sidebar Framework
- App Shell
- Hamburger / Off-Canvas Menu

**Cross-Refs**:
- Glassmorphic Floating Island Navbar
- Clean Functional Sticky Navbar
- Transparent to Solid Transition Navbar
