# Carousel / Slider

**Definition**: A dynamic presentation component used to display a sequence of items (images, cards, or hero banners) one at a time (or a few at a time) within the same horizontal space. Users navigate through the sequence using left/right arrows, swiping (on mobile), or clicking dot indicators, preventing the need to stack all the content vertically.

**History**: One of the most controversial UI patterns in web history. Highly prevalent in the early 2010s as homepage "Hero Sliders" where marketing departments wanted to highlight 5 different promotions simultaneously in the prime real estate. Extensive UX research later proved "banner blindness"—users rarely interact with carousels, and almost no one sees slide #3 or #4. Consequently, they fell out of favor for primary messaging, remaining useful only when scrolling through equal-value content (like photos).

**Variations**:
- **Hero Slider**: A full-width, auto-playing carousel at the top of a page. (Generally considered an anti-pattern today, but still common in some e-commerce).
- **Product Gallery Carousel**: Essential for e-commerce. A single massive main image with a row of thumbnail images below it acting as the navigation to swap the main view.
- **Card Carousel (Swiper)**: A horizontal scrolling list of UI cards (e.g., Netflix's movie rows or "Related Products"). On mobile, it acts as a native horizontal swipe area; on desktop, it usually has left/right chevrons.
- **Testimonial Slider**: Used on landing pages to cycle through 3 or 4 customer quotes to build social proof without eating up massive vertical space.

**Use Cases**:
- **Media Streaming (Netflix/Hulu)**: The absolute necessity constraint. You cannot display 10,000 movie posters vertically; they must be organized into horizontal carousels by category.
- **E-Commerce Image Viewing**: Allowing a user to swipe through 6 different angles of a shoe on a mobile device constraints.
- **Onboarding / App Walkthroughs**: Using a 3-slide carousel to explain the core features of an app the first time a user opens it.

**Related**:
- Image Gallery / Lightbox
- Card
- Stepper / Progress Bar (Specifically Dotted Indicators)

**Cross-Refs**:
- Netflix Horizontal Card Swiper
- E-Commerce Thumbnail Sub-Carousel
