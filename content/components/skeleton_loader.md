# Skeleton Loader

**Definition**: A structural, visual placeholder shown to the user immediately upon page load while the actual backend data is still being fetched. Instead of a standard spinning circle, the UI displays the literal "skeleton" or wireframe of the component that is about to appear, often rendered as gray boxes and circles that subtly pulse or shimmer.

**History**: Invented by Apple for iOS and heavily popularized by Facebook in the early 2010s as they transitioned to complex, data-heavy single-page React applications. Traditional "loading spinners" caused psychological anxiety—users stared at a spinning wheel with no context of what was actually happening or how much longer it would take. A Skeleton Loader mitigates this by providing "perceived performance"; the layout is rendered instantly, giving the physical illusion that the site is incredibly fast, even if the text takes another two seconds to arrive.

**Variations**:
- **Shimmering Gray Blocks**: The standard implementation. A profile picture is represented by a gray circle, and three lines of text are represented by three gray horizontal rectangles. A CSS animation washes a subtle white gradient from left to right across the blocks, making them "shimmer."
- **Pulsing Opacity**: Instead of a shimmer, the gray blocks slowly pulse by fading their opacity from 100% to 50% and back again.
- **Structural Mimicry**: The most advanced iterations perfectly match the eventual content. If a dashboard normally loads a massive complex grid of 12 distinct analytical charts, the Skeleton Loader will show 12 empty, gray box-frames outlining exactly where the charts will eventually snap into place.

**Use Cases**:
- **Infinite / Data-Heavy Feeds**: Think LinkedIn or Facebook. When scrolling, if the internet connection is slow, you don't see a spinner at the bottom of the feed, you see 3 gray "Skeleton Posts" waiting to be filled with data.
- **Complex SaaS Dashboards**: When a page must query 5 different databases simultaneously, the dashboard structure loads instantly, but the individual widgets show Skeletons until their specific API call resolves.
- **Heavy Image Queries**: B2C E-commerce grids display massive gray rectangles while resolving the high-res product photos.

**Related**:
- Spinner / Loading Indicator
- Card
- App Shell

**Cross-Refs**:
- Shimmering Text Line Placeholders
- Dashboard Structural Pulse Skeletons
