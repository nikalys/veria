# Spinner / Loading Indicator

**Definition**: An animated graphical element visually communicating to the user that the system is currently processing an action or retrieving data in the background, and they must wait. It is the fundamental, omnipresent symbol of latency on the internet.

**History**: One of the most infamous concepts in computing, rooted in the classic Mac OS "Spinning Wait Cursor" (the Beach Ball of Death) and the Windows Hourglass. On the early web, loading states were handled entirely by the browser tab itself. When complex Javascript Apps (AJAX) began querying servers without refreshing the page, developers desperately needed a way to tell the user the button they just clicked was actually doing *something*. The animated `.gif` spinner was born, eventually evolving into crisp, vector-based CSS animations.

**Variations**:
- **The Circular Spinner (Throbber)**: The unquestioned, absolute standard. A circular border that spins infinitely, often with one distinct quarter of the circle colored brighter than the rest. Found universally inside buttons after they are clicked.
- **Linear Indeterminate Bar**: A progress bar (often spanning the absolute top edge of the browser viewport) where a brightly colored highlight shoots from left to right continuously, because the system cannot mathematically predict how long the task will take.
- **Determinate Progress Bar**: Technically a sibling of the Stepper. The loader mathematically tracks an upload or download, filling exactly from 0% to 100%. (e.g., "Uploading File... 45%").
- **Branded Bounce / Morph**: Often used on initial application load. Instead of a generic circle, the company's SVG logo bounces, scales, or morphs infinitely (e.g., Slack's colored hashtag assembling itself).
- **The Suspense Skeleton**: See the Skeleton Loader variant, which largely replaces massive full-page spinners today.

**Use Cases**:
- **Button Micro-Interactions**: The absolute necessity for forms. When a user clicks "Submit Order", the text on the button fades out and is replaced by a tiny circular Spinner. This prevents the user from clicking the button a second time and accidentally buying the item twice.
- **Initial App Load (Splash Screen)**: While a massive SPA (Single Page Application) downloads its core Javascript bundle, a large branded loader sits in the exact center of the screen.
- **Contextual Data Fetching**: Waiting for a Dropdown list of countries to populate from a server.

**Related**:
- Skeleton Loader
- Stepper / Progress Bar
- Button

**Cross-Refs**:
- Circular Button Processing Throbber
- Top-Edge Linear Indeterminate Bar
- Branded SVG Splash Loader
