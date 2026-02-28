# Button

**Definition**: The fundamental atomic unit of interactivity on the web. A clearly defined area—traditionally styled to look like a physical, pushable object—that users click to perform an action (like submitting a form, closing a modal, or triggering a payment). Unlike a hyperlink (which is meant for navigation), a button is inherently meant to *do something*.

**History**: One of the very first native HTML elements `<button>`. For the first two decades of the web, default browser buttons were hideous, blocky gray rectangles. The evolution of CSS allowed designers to customize borders, backgrounds, and drop-shadows, leading to the skeuomorphic button era (where buttons looked like shiny, 3D gel pills). Modern buttons have flattened out massively but universally rely on padding, color contrast, and a distinct "hover state" to signal interactivity.

**Variations**:
- **Primary / Solid Button**: The most important button on the screen. Fully filled with the brand's primary color, contrasting text (usually white), meant to draw the eye immediately.
- **Secondary / Ghost Button (Outline)**: A button with a transparent background and a solid colored border (the "outline"). Used for less important actions that shouldn't compete visually with the Primary Button.
- **Tertiary / Text Button**: Essentially just a line of text, formatted like a link but functionally acting as a button (e.g., a "Cancel" button sitting next to a solid "Submit" button).
- **Icon Button**: A small button (usually circular or perfectly square) containing no text, only a glyph (e.g., a magnifying glass for search, or an 'X' to close).
- **Floating Action Button (FAB)**: A specific Material Design pattern. A primary circular button floating above the content layout.

**Use Cases**:
- **Data Submission**: The required ending of any HTML `<form>`. A user types data, but nothing is saved until they explicitly press the "Submit" or "Create Account" button.
- **UX Routing (CTAs)**: "Sign Up Free", "Get Started", "Learn More." While technically links, they are styled as massive buttons because buttons convert logarithmically higher than simple text links.
- **Modal Controls**: "Accept," "Reject," "Save Changes," "Cancel."

**Related**:
- Call to Action (CTA) Block
- Text Input / Textarea
- Toggle / Switch

**Cross-Refs**:
- Neobrutalist Solid Offset-Shadow Button
- Glassmorphic Outline Ghost Button
- Pill-Shaped Primary Conversion Button
