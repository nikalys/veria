# Pagination

**Definition**: A user interface pattern that divides massive sets of content (articles, search results, or products) into discrete, numbered pages. It provides a row of sequential links (typically located at the very bottom of a list or grid) allowing navigation to the "Next," "Previous," or specific numbered page of a dataset.

**History**: One of the earliest solutions to the web's foundational problem: downloading massive amounts of data over slow dial-up connections. It is physically impossible (and a terrible user experience) to load 10,000 search results onto a single HTML page. Google cemented the classic paradigm of 10-results-per-page. While "Infinite Scroll" (popularized by Twitter and Pinterest) threatened to kill Pagination in the 2010s, it survived due to user frustration—Infinite Scroll makes it impossible to find a specific result again, or effectively reach a website's footer.

**Variations**:
- **Classic Numbered (1 2 3 ... 10)**: The Google standard. Provides exact numbers, a "Next/Prev" button, and often truncates middle numbers with an ellipsis (`...`) if the set is massive. Gives the user total control and a sense of scale.
- **Simple Prev/Next**: Removes the exact numbers entirely, offering only "Older Articles" or "Newer Articles." Often used on minimalist blogs where exact numbering breaks the aesthetic.
- **Load More Button**: The modern compromise between Pagination and Infinite Scroll. Instead of loading a new numbered page, clicking the button fetches the next batch of results and appends them to the bottom of the current list.
- **Infinite / Auto-Scroll**: Technically the *replacement* for pagination, where scrolling near the bottom of the list automatically triggers the next fetch without user interaction.

**Use Cases**:
- **Search Engine Results Pages (SERPs)**: The definitive use case. Users need exact numbered pages to know if they should refine their search (e.g., "I'm on page 5, clearly my query is too broad").
- **E-Commerce Catalogs**: Essential for SEO and user sanity. Allows a shopper to remember "that great shirt was on page 3" without having to scroll endlessly through a massive grid.
- **SaaS Data Tables**: Enterprise apps showing hundreds of user records or server logs must paginate to keep the browser memory from crashing.
- **Blog Archives / Media Galleries**: Standard structural navigation for chronological feeds.

**Related**:
- Data Table
- Stepper / Progress Bar
- Masonry Grid

**Cross-Refs**:
- Minimalist Numbered Pagination
- Flat Design Load More Button
- Brutalist Prev/Next Typography
