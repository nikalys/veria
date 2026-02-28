# Toast / Snack Bar

**Definition**: A brief, non-modal, auto-expiring notification that pops up on the screen (usually sliding in from the bottom or top corner) to provide lightweight feedback about an operation. It does not interrupt the user's workflow and typically disappears on its own after 3 to 5 seconds.

**History**: The "Toast" nomenclature originated in the early 2000s (specifically from the old MSN Messenger application), named because the notification popped up from the bottom of the screen like bread out of a toaster. Google's Material Design later formalized it for mobile as a "Snackbar." Before Toasts, developers used highly aggressive native browser `alert()` popups to tell a user "Item Saved," which completely hijacked the browser until the user clicked OK. The Toast solved this by offering passive confirmation.

**Variations**:
- **Standard Floating Toast**: A small dark rectangle, usually in the bottom-right or top-right corner on desktop, containing a brief message (e.g., "Settings Updated.") and possibly an 'X' to close it manually.
- **Actionable Snackbar**: The notification contains the message *plus* a single text button. Extremely common in Gmail: "Message deleted. [Undo]".
- **Semantic Color Toast**: The background color of the Toast strictly dictates the type of feedback (Green = Success, Red = Error, Blue/Gray = Informational).
- **Toast Stack**: When multiple actions happen simultaneously, new Toasts physically push older Toasts upwards or downwards in a vertical stack so the user can read a timeline of events before they fade away.

**Use Cases**:
- **Success Confirmations**: The absolute primary use-case. When a user clicks "Save Profile," they need to know it worked without being redirected to a new page.
- **Background Process Completion**: "Your video has finished rendering."
- **Minor Errors**: "Network connection unstable, retrying..."

**Related**:
- Alert / Callout Box
- Banner / Announcement Bar
- Modal / Dialog

**Cross-Refs**:
- Material Design Actionable Snackbar
- Color-Coded Semantic Toast Stack
