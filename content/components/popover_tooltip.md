# Popover / Tooltip

**Definition**: A brief, contextual, non-modal interface element that appears floating near a target element when the user interacts with it (usually by hovering globally or clicking). It is used to provide supplementary information, definitions, or minor actions without navigating the user away or fully interrupting their workflow.

**History**: One of the absolute oldest conventions of desktop computing, rooted in the classic "Alt Text" hovering behavior of early Windows/Mac icons. On the web, standard HTML `title` attributes act as default tooltips, but their styling cannot be controlled. As web apps became complex, custom CSS/JS tooltips became universally necessary to explain obscure icons or provide rich data without cluttering the interface with text.

**Variations**:
- **Standard Tooltip**: Triggers strictly on *hover*. Only contains a single, short string of unformatted text (e.g., hovering over a floppy disk icon reveals "Save"). Disappears immediately when the mouse leaves.
- **Rich Popover**: Triggers on *click*. More permanent than a tooltip. Can contain formatted text, links, data, or even small forms (like a mini-calendar for selecting a date or a color-picker). Often requires clicking outside of the popover to close it.
- **Directional Placement**: Tooltips and popovers must have collision-detection logic to render dynamically above, below, left, or right of the target element depending on where the target is located on the screen (so the tooltip doesn't bleed off the edge of the viewport).
- **Tour / Onboarding Popover**: Used to guide a new user through a dashboard. The background dims slightly, and a sequence of popovers points directly to UI elements in order, explaining what they do.

**Use Cases**:
- **Icon-Only Interfaces**: Critical for minimal SaaS products. If a toolbar consists entirely of abstract icons, tooltips are mathematically necessary for accessibility and learnability.
- **Data Definitions**: Explaining complex terminology inline. For example, a dotted underline beneath "EBITDA" on a financial site. Hovering it opens a tooltip defining the acronym without forcing the user to load a glossary page.
- **Form Validation**: Displaying error states contextually. If the user types a bad password, a popover dynamically appears right next to the input field explaining the required rules.

**Related**:
- Modal / Dialog
- Drawer / Slide-over

**Cross-Refs**:
- Neobrutalist Thick Border Tooltip
- Glassmorphic Descriptive Popover
