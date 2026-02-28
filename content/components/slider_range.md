# Slider (Range)

**Definition**: An input control used to select a specific numeric value (or a range of values) from a predetermined spectrum. It consists of a horizontal line (the "track") and a draggable indicator (the "thumb"). It is primarily used when precision isn't critically important, but exploring the macroscopic change of visual data is.

**History**: One of the most classic analog metaphors in interface design, dating straight back to audio mixing boards (faders) and classic Mac OS sound control panels. On the web, it was formalized in HTML5 with the `<input type="range">` element. Because precise dragging is phenomenally difficult with a mouse (and extremely easy with a touchscreen), the Slider exploded in popularity concurrently with the rise of the mobile web.

**Variations**:
- **Single-Value Continuous**: The most common iteration. A single thumb dragged to select a single value (e.g., Volume level: 0 to 100). The track usually fills with a primary color on the left of the thumb to indicate the chosen volume.
- **Discrete / Snapping Slider**: The track contains visible "tick marks" at specific intervals. The thumb cannot sit anywhere; it magnetizes (snaps) perfectly into the nearest tick mark. Used when the options are distinct steps (e.g., choosing a T-shirt size scale from S -> XXL).
- **Dual-Thumb / Range Selector**: Extremely common in e-commerce. The track features two separate draggable thumbs, allowing the user to set both a Minimum and Maximum boundary (e.g., filtering Prices between $50 and $150).
- **Output-Attached Slider**: As the user drags the thumb, a small tooltip bubble or a separate text box physically animates alongside the thumb displaying the exact number they are currently hovering over.

**Use Cases**:
- **E-Commerce Price Filtering**: The universal standard for setting a budget min/max because typing exact numbers into two separate `<input>` fields feels like work, whereas dragging a dual-slider feels like exploring options.
- **A/V Controls**: Video players (YouTube) and audio platforms (Spotify) must use continuous sliders to let the user scrub through timestamps or adjust volume.
- **SaaS Quota / Pricing Calculators**: Landing pages often feature a massive standalone interactive slider (e.g., "How many users do you have?"). Dragging the slider dynamically calculates and changes the price rendering on the screen instantly.

**Related**:
- Radio Group / Checkbox Group
- Toggle / Switch
- Progress Bar

**Cross-Refs**:
- Dual-Thumb E-Commerce Price Range
- Clean Functional Tooltip Attached Slider
- Segmented Discrete Snapping Range
