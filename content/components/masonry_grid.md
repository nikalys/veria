# Masonry Grid

**Definition**: A layout technique that places elements in optimal position based on available vertical space, sort of like a mason fitting stones in a wall. Unlike a standard CSS Grid where rows have a fixed height, Masonry allows columns of different heights to pack tightly together vertically, eliminating uneven gaps caused by varying content lengths.

**History**: Masonry layouts have existed in print (newspaper clippings, photo collages) for decades, but the digital pioneer was Pinterest (launched 2010). Pinterest needed a way to display thousands of user-uploaded images of entirely different aspect ratios without cropping them or leaving massive blank spaces. The "Pinterest-style layout" became so ubiquitous it spawned a massive Javascript library (`masonry.js`) and eventually forced the CSS working group to draft native browser support for Masonry grids.

**Variations**:
- **True Vertical Masonry**: The standard approach where items are ordered column by column, packing tightly downwards. Best for image galleries where visual scanning is more important than specific chronological order.
- **Horizontal Masonry (Justified Layout)**: Items are packed tightly row by row, scaling the images so the edges of the row are perfectly flush (popularized by Flickr and Google Images).
- **Asymmetrical Masonry**: Intentionally varying the width of the columns (e.g., one wide column, two narrow columns) to create a more editorial, magazine-like feel while retaining the tight vertical packing.

**Use Cases**:
- **Image/Photography Portfolios**: The undisputed champion layout for un-cropped photography, allowing portraits and landscapes to coexist beautifully.
- **Content Discovery Feeds**: E-commerce, blogs, and social networks use it to display disparate content types (a short quote card next to a tall video card) without breaking the visual flow.
- **Dashboard Widgets**: Allowing users to place widgets of varying heights onto a dashboard without leaving ugly empty gaps at the bottom of standard rows.

**Related**:
- Bento Grid
- Card
- Image Gallery

**Cross-Refs**:
- Brutalist Masonry Portfolio
- Neumorphic Image Gallery
- Editorial Asymmetrical Masonry
