# Infinite Scroll

**Definition**: A navigation and content-loading pattern where scrolling down a page automatically triggers the fetching and loading of the next batch of content, seamlessly appending it to the bottom of the list. It entirely eliminates the need for clicking "Next Page" links (Pagination), creating a frictionless, continuous discovery experience.

**History**: Invented in 2006 by Aza Raskin, it revolutionized the internet, specifically social media. Early platforms (like Flickr or early Facebook) required users to click to the next page of results. Infinite scroll exploited the psychological principle of the "bottomless bowl," keeping users engaged for drastically longer periods because no conscious decision (a click) was ever required to consume more content. It powers Twitter, Instagram, TikTok (vertical swipe), and millions of media feeds.

**Variations**:
- **True Infinite Scroll**: Automatically loads the next batch the moment the user hits a certain scroll threshold near the bottom of the page. No interaction required.
- **Load More (Hybrid)**: Stops automatically loading after 2 or 3 batches, placing a "Load More" button at the bottom. This prevents the user from feeling entirely trapped in a doom-scroll and allows them to actually reach the site footer if they want to.
- **Virtual / Windowed Scroll**: A highly technical implementation required for performance. Instead of adding 10,000 DOM elements to the page (which would crash the browser), it mathematically recycles the DOM elements as you scroll, swapping the images/text but keeping the memory footprint identical.

**Use Cases**:
- **Social Media Feeds**: The absolute non-negotiable standard. Users expect chronological or algorithmic feeds to never end.
- **Visual Discovery (Pinterest/Dribbble)**: Browsing massive visual grids where the user is looking for inspiration, not a specific, indexed item.
- **E-Commerce Categorical Browsing**: Controversial, but often used on clothing sites where a user is just browsing "All Men's Shirts" and values speed over specific page numbering.

**Related**:
- Pagination
- Masonry Grid
- Card

**Cross-Refs**:
- Hybrid "Load More" Scroll
- Virtualized DOM List
