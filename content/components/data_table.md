# Data Table

**Definition**: A highly structured, grid-based layout (rows and columns) used to display, organize, and interact with massive amounts of raw, repetitive information. Unlike a Feature Matrix (which is used for marketing comparison), a Data Table is purely functional, serving as the foundational interface for backend administration, financial reporting, and complex application management.

**History**: The literal foundation of business software, directly mirroring physical ledger books and spreadsheet software like Microsoft Excel. In the early days of HTML, the `<table>` element was abused for general page layout. Once CSS took over layout duties, the `<table>` returned to its rightful, semantic purpose: displaying tabular data. The rise of AJAX massive improved them, allowing "Data Grids" to sort, filter, and paginate without reloading the entire page.

**Variations**:
- **Classic Read-Only Table**: Simple rows and columns with a header row. Often striped (alternating row background colors) to improve left-to-right legibility on wide screens.
- **Interactive Data Grid**: A highly complex application component rather than a simple layout. Allows the user to click column headers to sort ascending/descending, drag columns to reorder them, use a local search bar to filter rows instantly, and select multiple rows via checkboxes for bulk actions.
- **Expandable Row Table**: Clicking a specific row does not navigate away, but expands it like an accordion to reveal hidden, deeply nested data (e.g., expanding an 'Order ID' row to see the individual items shipped in that order).
- **Sticky Column / Frozen Table**: Critical for extremely wide tables holding 20+ columns. The first column (usually the 'Name' or 'ID') remains completely frozen on the left side of the screen while the user horizontally scrolls the remaining data columns.

**Use Cases**:
- **Financial & HR Software**: The entire purpose of creating the software is to manage the Data Table. Tracking expenses, employee records, or payroll.
- **E-Commerce Backend (Admin)**: A massive table listing thousands of orders, their tracking numbers, and fulfillment status.
- **Cloud Computing Consoles**: A list of all running server instances, their IP addresses, CPU load, and geographic location.

**Related**:
- Feature Matrix / Comparison Table
- Pagination
- Badge / Pill / Tag

**Cross-Refs**:
- Clean Functional Sortable Data Grid
- Brutalist High-Density Financial Ledger
- Expandable Nested Data Row
