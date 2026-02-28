# Stepper / Progress Bar

**Definition**: A chronological navigation and feedback component used to visually track a user's progression through a multi-step, linear process (like an e-commerce checkout, a complex software installation, or a long sign-up form). It breaks down overwhelming tasks into bite-sized, numbered chunks, reducing cognitive load and anxiety while explicitly showing how many steps remain.

**History**: Originally derived from desktop installation wizards ("Click Next to continue"). On the web, long scrolling forms historically caused massive abandonment rates because users couldn't tell how much work was required upfront. E-commerce platforms popularized the 3-step or 4-step "Checkout Stepper" (Cart > Shipping > Payment > Review) to gamify the process and assure the user that the end was in sight.

**Variations**:
- **Numbered Wizard Stepper**: A horizontal row of numbered circles connected by lines. As a step is completed, the circle turns green or fills in. Only the "Next" button allows progression to prevent users from skipping vital information.
- **Vertical Timeline Stepper**: Stacked vertically on the left side of a massive form. Often used in complex B2B SaaS onboarding or government applications. Allows for short descriptive text beside each step.
- **Continuous Progress Bar**: A single horizontal line (often pinned to the very top or bottom of the screen) that fills with color smoothly as the user advances through a process or reads through a long article (used heavily by digital publishers like Medium).
- **Dotted Indicator (Carousel)**: Used primarily for image galleries, onboarding screens on mobile apps, or hero banners. A small row of dots indicates which "slide" the user is currently viewing out of the total set.

**Use Cases**:
- **E-Commerce Checkout**: The absolute necessity for the checkout funnel. Users will abandon carts if they are hit with a massive, un-paginated form asking for shipping, billing, and credit card info all at once.
- **SaaS Onboarding / Sign-Up**: Breaking down complex account creation (e.g., Create Login -> Set Profile -> Invite Team -> Choose Plan -> Add Billing).
- **Survey / Questionnaire Flows**: Typeform popularized breaking long surveys into single questions per screen, mapped to a continuous progress bar, drastically increasing completion rates.

**Related**:
- Form Container
- Breadcrumbs
- Carousel / Slider

**Cross-Refs**:
- iOS-Style Dotted Indicator
- Clean Functional Numbered Checkout Stepper
- Continuous Horizontal Reading Progress Bar
