# Radio Group / Checkbox Group

**Definition**: Fundamental input controls for presenting a small list of options (usually 2 to 5 items) *visibly* on the screen, unlike a Dropdown which hides them. A **Radio Group** forces mutually exclusive selection (you can only choose exactly one option out of the set). A **Checkbox Group** allows multi-select (you can choose none, some, or all of the options).

**History**: Direct holdovers from physical forms and early graphical user interfaces. The "Radio Button" name comes from the physical preset buttons on classic car radios: pushing one button mechanically popped the other ones out. Because they are native HTML form elements (`<input type="radio">` and `<input type="checkbox">`), for a long time they were un-styleable, resulting in standard OS-level blue dots or black checkmarks clashing with custom web designs. Modern CSS techniques allow them to be styled identically to standard Buttons or customized with vector icons.

**Variations**:
- **Classic Vertical List**: The standard textbook implementation. A bulleted column of circles (radios) or squares (checkboxes) with the text labels sitting on the right.
- **Card / Tile Selectors**: A massive modernization for high-converting SaaS forms. Instead of tiny circles, the options are presented as massive, clickable cards (often featuring distinct icons or illustrations inside them). Clicking the card thickens the border (often blue) to indicate it has been selected.
- **Segmented Control / Pill Toggle**: Often replacing a 2-option radio group (like "Monthly vs. Annual" billing). The options are styled as a unified pill, and clicking one animates a background highlight over to it.
- **Checkbox as a Switch**: Re-styling a single, standalone checkbox to look like a physical toggle switch (see Toggle / Switch component).

**Use Cases**:
- **Pricing Tiers (Cards)**: Asking a user to select their subscription level (Free, Pro, Enterprise) using massive Radio Cards so they can read the feature list for each option before making their mutually exclusive choice.
- **E-Commerce Filtering (Checkboxes)**: A sidebar showing "Brands" requires checkboxes because a user might want to see shoes from *both* Nike and Adidas simultaneously.
- **Terms of Service Agreement**: The classic, mandatory single checkbox required at the end of a signup form ("I agree to the Terms of Service").

**Related**:
- Select / Dropdown
- Toggle / Switch
- Card

**Cross-Refs**:
- E-Commerce Filter Checkbox List
- Segmented Control Billing Toggle
- Custom SVG Radio Card Selector
