# Image Gallery / Lightbox

**Definition**: A component pattern used to display a collection of images. A "Gallery" usually refers to the layout of thumbnails on the page (like a grid or masonry layout). A "Lightbox" refers specifically to the interaction that occurs when a user clicks a thumbnail: the background dims (an overlay), and the image expands to fill the screen in high resolution, often accompanied by left/right navigation to view the rest of the gallery without returning to the thumbnail view.

**History**: The "Lightbox" pattern was popularized roughly around 2005 with the release of a Javascript library literally named `Lightbox.js`. It solved a massive frustration: clicking a thumbnail used to load the high-res image on a completely new, blank browser page, forcing the user to hit the "Back" button to return to the gallery. The lightbox overlay felt like a revolution in seamless UX.

**Variations**:
- **Standard Lightbox Overlay**: The background turns 80% black. The image is centered. An 'X' exists in the top right to close it. Left/Right arrows exist on the edges.
- **Zoom / Pan Gallery**: On mobile or high-end e-commerce, opening the lightbox allows the user to actively pinch-to-zoom or hover to reveal microscopic details of the product texture.
- **Immersive / Theater Mode**: Specifically used for video or extremely high-end photography (like Apple advertising). The UI completely strips away all browser chrome and navigation, plunging the user into an uninterrupted cinematic view.
- **Caption / Data Overlay**: The lightbox doesn't just show the image, but slides open a side-panel containing context (like Instagram's web view where the photo is on the left and the comments/likes are on the right).

**Use Cases**:
- **Photography Portfolios**: The essential pattern for displaying dense grids of photos that require full-screen, high-resolution viewing to appreciate.
- **E-Commerce Detail Shots**: Essential for clothing and tech hardware where users need to "inspect" the materials closely before purchasing.
- **Real Estate Listings**: Browsing 40 photos of a house interior is impossible without a fast, intuitive lightbox overlay.

**Related**:
- Carousel / Slider
- Modal / Dialog Box
- Masonry Grid

**Cross-Refs**:
- Cinematic Theater Mode Overlay
- Hover-to-Zoom Product Gallery
