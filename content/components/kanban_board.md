# Kanban Board

**Definition**: A highly complex, interactive, layout-defining component used entirely for project management and workflow visualization. It consists of multiple vertical "Columns" (representing distinct stages of a process, like 'To Do', 'In Progress', 'Done'). Inside those columns sit individual task "Cards". Crucially, the fundamental interaction of a Kanban board is the ability for the user to click and physically drag a card from one column into another to update its status.

**History**: Originating far outside the software world (developed in the late 1940s by Toyota engineers as a physical system of scheduling and inventory control on the factory floor using paper cards on whiteboards). In the digital realm, it was almost single-handedly popularized by Trello in 2011. Trello proved that visually dragging a digital card across a screen was infinitely more satisfying and intuitive than clicking a dropdown menu inside a spreadsheet row to change a status from "Open" to "Closed." It is now an omnipresent feature in nearly every modern productivity tool (Jira, Asana, Notion, Linear).

**Variations**:
- **The Trello Standard (Column-based)**: The classic implementation. Columns are rigid. You drag cards horizontally between them. Columns can often handle hundreds of cards, resulting in massive independent vertical scrollbars within each column.
- **Swimlanes (Matrix Kanban)**: Introduces horizontal rows intersecting with the vertical columns. This creates a 2D grid (e.g., Columns are 'Status', but Swimlanes are 'Assignee' or 'Priority Tier'). Drastically increases complexity.
- **Kanban as a View Toggle / Board View**: Modern databases (like Notion or Airtable) don't force users to use a Kanban board permanently. Instead, "Board View" is just a button you click to instantly transform a standard Data Table into a Kanban drag-and-drop interface based on a specific property.
- **Card Customization**: The "Cards" inside the board are heavily customized UX micro-environments, displaying Assignee Avatars, Due Date Badges, Priority Indicators, and Sub-task counters without requiring the user to open the card.

**Use Cases**:
- **Software Development (Agile)**: The absolute backbone of tracking sprints and bug fixes (Jira).
- **Sales Pipelines / CRMs**: Tracking a Lead as they physically move from 'Contacted' to 'Pitching' to 'Negotiation' to 'Closed/Won' (Pipedrive, Salesforce).
- **Personal Productivity**: Visually structuring weekly goals or organizing a massive grocery list.
- **Content Calendars / Editorial Publishing**: Planning articles from 'Ideation' -> 'Drafting' -> 'Editing' -> 'Published'.

**Related**:
- Card
- Avatar
- Badge / Pill / Tag

**Cross-Refs**:
- Classic Drag-and-Drop Task Column
- Complex Dual-Axis Swimlane Board
- Jira-Style Agile Sprint Board
