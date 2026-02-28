# Drawer / Slide-over

**Definition**: A panel that smoothly slides in from the edge of the screen (most commonly the left or right side) over the existing content. It is a specific type of modal interaction, but unlike a centered Dialog Box, a Drawer sits flush against the edge of the viewport and typically takes up the full vertical height of the window.

**History**: The "Off-Canvas Navigation" pattern (like the Hamburger Menu on mobile) is the direct ancestor of the Drawer. As desktop web apps (like Webmail, project managers, and CRMs) grew increasingly complex in the late 2010s, designers realized that rendering complex forms or data inside a tiny, centered Modal was inefficient and claustrophobic. The Drawer pattern was adopted from massive OS panels (like the MacOS notification center) because it provided massive vertical real estate while still feeling like a "temporary" overlay.

**Variations**:
- **Navigation Drawer**: The classic mobile hamburger menu implementation sliding in from the left edge containing routing links.
- **Detail / Contextual Slide-over**: Sliding in from the *right* edge. Often used in SaaS lists or tables. Clicking a user's row doesn't open a new page, it slides out a massive right-hand drawer containing their full profile, edit history, and settings.
- **Bottom Sheet Drawer**: Dominantly used on mobile devices. Because phones are getting taller, reaching a top-left hamburger menu is painful. Sliding a drawer up from the literal bottom of the screen (where the thumb naturally rests) is now the ergonomic standard for mobile actions.
- **Push vs. Overlay**: An overlay drawer darkens the background and sits *on top* of the content. A "Push" drawer does not darken the background, but instead physically animates the main content container to the side to make room for itself, allowing the user to interact with the main view and the drawer simultaneously.

**Use Cases**:
- **Deep Editing Context**: Expanding a single record (like editing an item in an e-commerce catalog or Jira ticket) where the user needs a massive amount of form real estate without losing the context of the list they clicked from.
- **Shopping Cart (Quick Cart)**: Standard E-Commerce behavior. Clicking "Add to Cart" slides open a right-hand drawer showing the checkout summary instead of abruptly redirecting the user to the `/cart` page, encouraging them to keep shopping.
- **Filtering Options**: Replacing an entirely separate "Filter Results" page on mobile with a bottom sheet drawer filled with checkboxes and sliders.

**Related**:
- Sidebar Framework
- Modal / Dialog
- Hamburger / Off-Canvas Menu

**Cross-Refs**:
- E-Commerce Quick Cart Right Drawer
- Complex Form Push Slide-over
