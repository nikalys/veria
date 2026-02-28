# Empty State

**Definition**: A dedicated visual screen or message shown when a specific UI container or application currently has no data to display to the user. Instead of showing a confusing blank white screen or a broken table header reading "0 Results", the Empty State is intentionally designed to explain *why* it's empty and direct the user on *how* to populate it.

**History**: For a long time, the software industry severely neglected empty states. If you created a brand new account on a project management tool in 2012, you were often dropped into a totally blank dashboard because you hadn't created any tasks yet, causing immense user drop-off. As UX methodologies matured (specifically concerning "User Onboarding"), designers realized that "day zero" empty states were actually the most critical conversion moments in a product's lifecycle.

**Variations**:
- **First-Use Onboarding State**: The most critical variant. Seen immediately after making a new account. Instead of a blank table, the center of the screen houses a friendly illustration, a message ("You don't have any projects yet!"), and a massive primary Call to Action (CTA) button ("Create Your First Project").
- **Search No-Results State**: When a user queries a database and gets zero hits, simply showing nothing is bad UX because they might think the site is broken. The empty state explicitly says "No results found for exactly: 'xyz'" and usually offers suggestions (e.g., "Check spelling" or "Try less restrictive filters").
- **Cleared / Success State**: An empty state that is actually a reward, highly prevalent in "Inbox Zero" paradigms. When a user completes all tasks on a massive to-do list, the empty state might show a celebratory animation of a sun or a checked box saying "You're all caught up!"
- **Error / Edge Case State**: Used when data *should* exist but cannot be loaded (e.g., "No internet connection" or "Server timeout"), alongside a "Retry" button.

**Use Cases**:
- **Shopping Cart**: "Your cart is empty. Click here to continue shopping."
- **SaaS Platform Dashboards**: Essential for explaining the core value proposition of an application the instant a user signs up.
- **Complex Filtering**: If a user clicks 8 different incompatible checkboxes on an E-commerce site, an empty state is required to tell them to remove some constraints to find actual products.

**Related**:
- Call to Action (CTA) Block
- Search Bar
- Data Table

**Cross-Refs**:
- First-Use Illustrated Onboarding
- Search "No Results" Callout
- Inbox Zero Celebratory Empty State
