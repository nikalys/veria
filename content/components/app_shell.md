# App Shell

**Definition**: A structural architecture pattern fundamental to modern web applications (Single Page Applications or Progressive Web Apps). The "App Shell" refers to the minimal HTML, CSS, and JavaScript required to power the user interface (the header, navigation, and core layout bounds). It loads instantly and remains static on the screen, while the dynamic content inside it (the central view) is swapped out seamlessly as the user clicks around.

**History**: Rose to prominence around 2015 alongside frameworks like React, Angular, and the push by Google for Progressive Web Apps (PWAs). Before this, clicking a link meant the browser had to request an entirely new page from the server, causing a white flash as everything re-rendered. The App Shell pattern allowed websites to function identical to native mobile apps—caching the complex UI scaffolding locally so only raw data needed to be fetched over the network.

**Variations**:
- **Top + Left Rail**: The absolute standard for dashboards (e.g., Slack, Jira). A permanent top navigation bar (for search and account settings) and a permanent left sidebar (for routing).
- **Bottom Navigation Shell**: The standard for mobile web apps. A fixed header at the top and a fixed tab bar at the bottom containing 4-5 primary icons. The middle area scrolls.
- **Floating / Segmented Shell**: A more modern, "clean" implementation where the navigation elements (sidebar and top bar) don't touch the edges of the screen, appearing as floating islands around the central content canvas.
- **Immersive / Hidden Shell**: The shell exists to handle routing, but the actual UI elements (navbars, controls) fade out or auto-hide when the user begins scrolling, maximizing vertical screen real estate.

**Use Cases**:
- **Progressive Web Apps (PWAs)**: The foundational requirement for a PWA to offer "offline capability." Even without wifi, the App Shell loads instantly to tell the user they are offline.
- **Complex B2B SaaS**: Ensuring the user never loses their bearing in massive CRM or analytics tools. The structural scaffolding never moves.
- **Audio/Video Streaming**: Spotify or YouTube rely entirely on the App Shell so that a persistent video player or audio bar can continue playing uninterrupted while the user navigates different pages.
- **Mobile-First Experiences**: Providing native-feeling bottom navigation bars on websites accessed via mobile devices.

**Related**:
- Sidebar Framework
- Split Screen Layout
- Navigation Bar (Navbar)

**Cross-Refs**:
- Clean Functional Top+Left Shell
- Neumorphic Bottom Navigation Shell
- Glassmorphic Floating Shell
