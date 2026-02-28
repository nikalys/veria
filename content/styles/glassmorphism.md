# Glassmorphism

**Definition**: A design aesthetic defined by interfaces that mimic frosted or polished glass. It relies on multi-layered approaches where semi-transparent foreground elements use a background-blur effect, creating the illusion of physical glass floating over vibrant, abstract, or photographic background elements.

**History**: Gained mainstream traction when Apple heavily implemented the frosted glass effect in iOS 7 (2013) to establish visual hierarchy without relying on drop shadows. It completely dominated the web design discourse in late 2020 through 2022 following Apple's macOS Big Sur redesign and Windows 11's "Mica" material introduction. It represented a pendulum swing back toward "depth" after years of ultra-flat design, but without the heavy textures of skeuomorphism.

**Variations**:
- **Classic Frosted Glass**: The standard implementation utilizing CSS `backdrop-filter: blur()`, a highly transparent white or light-gray fill, and a subtle 1px inner border to simulate the glass edge catching the light.
- **Dark Glass / Obsidian**: The dark mode equivalent, using dark, semi-transparent fills over deep moody backgrounds or neon gradients. Highly prevalent in Web3, Crypto, and high-end gaming interfaces.
- **Iridescent / Prismatic Glass**: Introduces metallic or rainbow gradient borders and holographic reflections to make the "glass" feel highly stylized and sci-fi.
- **Acrylic / Mica (OS Level)**: Microsoft’s specific implementation that blends the app background with the user's desktop wallpaper to create a unified system experience.

**Use Cases**:
- **OS & Framework UI**: Used extensively by Apple and Microsoft to create "contextual hierarchy"—letting the user know an element is floating *above* the main content without entirely obscuring what's underneath.
- **Fintech & Web3 Dashboards**: Often paired with dark mode to make complex data visualization feel premium, futuristic, and high-tech.
- **Hero Sections / Landing Pages**: Placing a glassmorphic card over a vibrant, slow-moving abstract 3D shape or Aurora gradient is a staple of early 2020s SaaS landing pages.
- **Notifications & Modals**: Where maintaining context of the underlying screen is important while forcing user focus on the pop-up.

**Related**:
- Dark Mode / High Contrast
- Aurora / Gradient Mesh
- Neumorphism
- Skeuomorphism

**Cross-Refs**:
- Glassmorphic Login Card
- Frosted Sticky Navbar
- Glass Dialog Box
