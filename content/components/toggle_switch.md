# Toggle / Switch

**Definition**: A two-state input control used to switch a specific, isolated setting between "On" and "Off." It is the digital equivalent of a physical light switch. Crucially, interacting with a Toggle should deliver immediate results (actioning the setting the moment it is flipped) rather than requiring the user to hit a separate "Submit/Save" button at the bottom of the page.

**History**: In early HTML, boolean (True/False or Yes/No) choices were handled exclusively by single Checkboxes. However, Apple radically changed interface paradigms in 2007 with the original iPhone (iOS). They introduced the pill-shaped, sliding "Switch" as the universal standard for turning settings on and off in mobile environments. It was universally praised for its clear physical metaphor and was aggressively back-ported into desktop web design in the mid-2010s to replace standalone form checkboxes.

**Variations**:
- **The iOS Standard Flow**: A pill-shaped background track usually colored gray when off, and a bright green or blue when on. Inside the track sits a circular white "thumb" that animates left (off) and right (on).
- **Text-Inclusive Switch**: Putting the actual state text visually inside the track or directly on the physical thumb itself (e.g., showing an "I" when on and an "O" when off, or spelling out "ON" / "OFF").
- **Dark Mode / Icon Switch**: Extremely prevalent for top-nav Theme togglers. An icon of a Sun (Light Mode) sits in the track. Clicking it slides the thumb over, transforming the icon into a Moon (Dark Mode).
- **Square / Brutalist Switch**: Rejecting Apple's pill-shape entirely for stark rectangles, often with harsh offset drop shadows, making it look like an industrial control panel lever.

**Use Cases**:
- **Settings & Preferences Dashboards**: The absolute mandatory use-case. A page filled with 20 different preferences (e.g., "Email Notifications," "SMS Alerts," "Two-Factor Auth") should use Swithes instead of an endless list of checkboxes.
- **Dark Mode Toggling**: Placed in the Navbar to instantly change the global CSS variables of the website.
- **Feature Flags**: Developer interfaces (like Vercel or Netlify) allowing product managers to flip beta features live into production with a single click.

**Related**:
- Radio Group / Checkbox Group
- Button
- Form Container

**Cross-Refs**:
- Apple iOS Green Switch Toggle
- Neobrutalist Thick Border Switch
- Sun/Moon Icon Theme Toggle
