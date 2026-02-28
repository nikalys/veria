# Floating Action Button (FAB)

**Definition**: A specialized user interface component defined by a distinct, usually circular button that "floats" persistently over the main content, typically located in the bottom-right corner of the screen. Its sole purpose is to represent the primary, most common action a user will take on a given screen (e.g., "Compose Email", "Create New Task", "Start Chat").

**History**: The concept of persistent, floating actions has existed for a while, but the term and the specific, highly standardized implementation (the distinct circular drop-shadowed button) was famously codified by Google in 2014 when they introduced Material Design. It was created to address the difficulty of reaching essential top-bar actions on increasingly massive smartphones, placing the primary action directly under the user's right thumb. Its success on mobile caused it to bleed aggressively over into desktop web apps.

**Variations**:
- **Classic Circular FAB**: The Material Design standard. A perfect circle containing a single icon (like a '+'), deeply shadowed to appear "floating" above all other Z-index content layers.
- **Extended / Pill-Shaped FAB**: Used when the action requires more context than an icon can provide. A wider pill shape containing an icon plus text (e.g., "✨ Generate Image"). Highly popular in modern SaaS.
- **Expandable / Speed Dial FAB**: Clicking the primary FAB doesn't immediately execute an action, but instead sprouts 3 or 4 smaller related FABs upwards like a flower (e.g., clicking '+' spawns smaller buttons for 'New Folder', 'New File', 'Upload').
- **Chat/Support Widget Trigger**: A massive deviation from the original intent, but widely used in e-commerce and B2B SaaS. The bottom right icon triggers a full live-chat window (Intercom, Zendesk) rather than an app action.

**Use Cases**:
- **Mobile First Applications (PWAs)**: Bringing native app ergonomics to the web by keeping the primary action (like composing a tweet or adding an item) always accessible regardless of scroll position.
- **Customer Support Integration**: The default location and pattern for opening help desk chat windows on enterprise sites or storefronts.
- **Scroll-to-Top Button**: A utilitarian variant where a floating arrow appears in the bottom right exclusively after the user scrolls down a long page, returning them instantly to the header.

**Related**:
- Call to Action (CTA) Block
- Navigation Bar (Navbar)
- App Shell

**Cross-Refs**:
- Material Design Speed Dial Stack
- Pill-Shaped Extended Primary Action
- Support Chat Trigger Icon
