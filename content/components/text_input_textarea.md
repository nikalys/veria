# Text Input / Textarea

**Definition**: The core mechanism for receiving open-ended data from a user. An `Input` is a single-line interface (used for names, emails, passwords, or search queries), whereas a `Textarea` is a multi-line, resizable field (used for essays, long-form messages, or comments). Both rely heavily on explicit labeling, placeholder text, and clearly defined focus states to guide the user visually.

**History**: Another foundational, native HTML element (`<input type="text">` and `<textarea>`). In the early web, they were brutalist, sunken, 3D text boxes natively rendered by the browser. As CSS allowed styling, designers began softening them. The biggest philosophical shift occurred around 2014 when Google's Material Design popularized the "Underline Only" input (removing the bounding box entirely to create a cleaner aesthetic)—a trend that heavily influenced mobile design before the pendulum swung back to standard, bordered "Clean Functionalism" inputs due to severe accessibility issues.

**Variations**:
- **Standard Bordered Input**: The classic, bulletproof SaaS aesthetic. A rounded rectangular box with a light gray 1px border. When clicked (focused), the border usually glows or darkens significantly (often blue) to indicate it is ready for typing.
- **Underline Input (Material Design)**: Strips out the top, left, and right borders. The text sits on top of a single horizontal line that thickens and changes color when clicked.
- **Floating Label Input**: A UX pattern aiming to save vertical space. The label (e.g., "Email Address") acts as the placeholder text inside the box. When the user clicks the box, the label smoothly animates upwards and shrinks, making room for the user to type while still remaining visible.
- **Filled / Background Input**: The input has no border at all, only a slightly darker background color (e.g., a light gray pill shape on a white page) that differentiates it from the canvas.

**Use Cases**:
- **Authentication & Sign Up Forms**: The absolute backbone of user creation (First Name, Last Name, Username, Password).
- **Communication & Messaging**: Writing a massive post in a forum or an email in a web client requires an auto-expanding Textarea.
- **Data Collection (Surveys)**: "Please explain your reasoning below" fields designed to capture nuance that checkboxes or dropdowns cannot.

**Related**:
- Search Bar
- Button
- Form Container

**Cross-Refs**:
- Clean Functional 1px Border Input
- Material Design Floating Label Underline Textarea
- Auto-Expanding Neumorphic Textarea
