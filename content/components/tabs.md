# Tabs

**Definition**: A navigation pattern directly mimicking the physical tabs on manila folders. A row of clickable labels that allows users to quickly switch between different views, data sets, or contextual groupings of content within the exact same viewport or container, without requiring a full page refresh.

**History**: Originally introduced as a physical metaphor in early desktop software (like the 1984 Mac OS control panel) to organize complex settings dialogs in a very tiny window. On the web, they became ubiquitous with the rise of Web 2.0 and AJAX (which allowed loading content without a hard page refresh), eventually becoming a native HTML element (`<details>`/`<summary>`) and a foundational block of modern CSS frameworks (like Bootstrap and Material Design).

**Variations**:
- **Horizontal Tabs**: The classic implementation. A horizontal list of labels sitting above a content block. Clicking a label changes the block below it.
- **Vertical Tabs**: Used when there are too many tabs to fit horizontally (more than 5-7). The labels are stacked vertically on the left or right side of the content container. Highly prevalent in SaaS admin panels.
- **Pill / Segmented Control Tabs**: Popularized by iOS (Segmented Control). The tabs are styled within a single rounded pill shape, and the active state is visually "pushed" or highlighted with a distinct background color (resembling a physical sliding switch).
- **Underline Tabs**: The dominant "Clean Functionalism" style. The active tab is indicated solely by a thin underline or a bolded font weight, stripping away the heavy borders of traditional folder tabs.

**Use Cases**:
- **Pricing Tables**: Offering a toggle between "Monthly" and "Annual" billing cycles without navigating the user to a new page.
- **Product Details Pages**: Used heavily in e-commerce to organize dense data (e.g., Tab 1: "Description", Tab 2: "Specifications", Tab 3: "Reviews") beneath a main product image.
- **User Profiles / Dashboards**: To separate entirely different interaction paradigms (e.g., "Activity Feed", "My Posts", "Settings") within a single user dashboard.
- **Interactive Code Blocks**: In developer documentation, switching between code language examples (e.g., Tab 1: "React", Tab 2: "Vue", Tab 3: "Vanilla JS").

**Related**:
- Accordion
- Mega Menu
- Stepper / Progress Bar

**Cross-Refs**:
- Clean Functional Underline Tab
- Neumorphic Segmented Control
- Material Design Top-Nav Tab
