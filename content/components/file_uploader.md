# File Uploader / Dropzone

**Definition**: An interactive interface element allowing a user to select a file from their local device and transmit it to a server. While traditionally it was a simple button that opened a native operating system file browser dialog, it has evolved into massive, dashed-border "Dropzones" that allow users to drag and drop files directly from their desktop onto the web page.

**History**: Originally constrained by the native `<input type="file">` element, file uploads on the early web were infamously ugly and functionally rigid (you could only select one file at a time, and it looked like a tiny gray button). As the Web 2.0 era progressed (and specifically as HTML5 allowed Javascript to read files before uploading), the "Drag and Drop" API was introduced. Suddenly, web applications like Google Drive and Dropbox could behave exactly like desktop folders.

**Variations**:
- **Classic File Button**: A custom-styled button (e.g., "Choose File") that simply triggers the OS file picker. Used when space is absolutely constrained.
- **The Dropzone**: The massive, dotted-border rectangular area that has become the ubiquitous standard. It usually contains an icon of a cloud uploading, a headline ("Drag and drop your files here"), and secondary text ("or browse to choose a file").
- **Full-Screen Takeover Dropzone**: Popularized by massive CMS platforms. If the user drags a file anywhere over the browser window, the entire screen dims or border-highlights, indicating they can drop the file literally anywhere to begin the upload.
- **Progressive / List Uploader**: After dropping files, they appear as a vertical list below the dropzone, each featuring an individual loading bar, file size indicator, and a critical "Cancel / 'X'" icon to abort the specific upload.

**Use Cases**:
- **Media & Avatar Uploads**: The requirement for submitting a profile picture or writing a blog post. Often includes immediate image-preview functionality natively in the browser.
- **SaaS Document Management**: Platforms like Notion, Slack, or Google Drive rely entirely on massive, frictionless dropzones because dragging a PDF into a chat is infinitely faster than clicking through 5 folders in a system picker.
- **Form Attachments**: "Attach your Resume (PDF format only)."

**Related**:
- Stepper / Progress Bar
- Card
- Button

**Cross-Refs**:
- Dashed Neobrutalist Dropzone
- Neumorphic Sunken File Importer
- Clean Functional Multi-File Upload List
