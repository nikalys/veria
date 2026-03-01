# Content Management Guide

## How to Update Content

### If You Edit a Markdown File in `../content/`

The app reads from a pre-built JSON file, not directly from markdown. Follow these steps:

#### Step 1: Edit the Markdown File
```bash
# Example: Edit the Button component
# File: c:\Users\nikalys\Desktop\library\content\components\button.md
# Make your changes and save
```

#### Step 2: Rebuild the JSON
```bash
cd c:\Users\nikalys\Desktop\library\g3haiku
node build-content.js
```

You should see:
```
✅ Content built successfully!
📦 Output: C:\Users\nikalys\Desktop\library\g3haiku\data\content.json
   Components: 52
   Styles: 50
```

#### Step 3: Refresh the Browser
- If the server is running, simply refresh the page (`Ctrl+R` or `Cmd+R`)
- The browser will load the updated `content.json`

---

## Adding New Entries

### To Add a New Component
1. Create a new file: `../content/components/your_component_name.md`
2. Use this template:

```markdown
# Your Component Name

**Definition**: One to two sentences describing what this component is.

**History**: 2–4 sentences on the origin and evolution of this component.

**Variations**:
- **Variation Name 1**: Description of this variation.
- **Variation Name 2**: Description of this variation.
- **Variation Name 3**: Description of this variation.

**Use Cases**:
- **Use Case 1**: Description of where it's used.
- **Use Case 2**: Description of where it's used.
- **Use Case 3**: Description of where it's used.

**Related**:
- Related Component 1
- Related Component 2
- Related Component 3

**Cross-Refs**:
- Style + Component combination 1
- Style + Component combination 2
- Style + Component combination 3
```

3. Add the entry to `data/manifest.json`:
```json
{
  "styles": [ /* ... existing styles ... */ ],
  "components": [
    /* ... existing components ... */
    "your_component_name"
  ]
}
```

4. Rebuild: `node build-content.js`
5. Refresh the browser

### To Add a New Style
Same process, but:
- Create file in `../content/styles/your_style_name.md`
- Add to `data/manifest.json` under `styles` array

---

## Entry File Naming

**Important:** File names are converted to slugs (lowercase, underscores):
- `Button` → `button.md`
- `Modal Dialog` → `modal_dialog.md`
- `Floating Action Button` → `floating_action_button.md`

The app will display them with spaces:
- `button` → "button"
- `modal_dialog` → "modal dialog"
- `floating_action_button` → "floating action button"

---

## Markdown Format Rules

### Definition Section
```markdown
**Definition**: Single sentence or two. Must be clear and concise.
```

### History Section
```markdown
**History**: Origin (when/where), evolution over time, current prominence.
```

### Variations Section
```markdown
**Variations**:
- **Name**: Description of this specific variation. Keep it 1–2 sentences.
- **Name**: Description of this specific variation.
```

### Use Cases Section
```markdown
**Use Cases**:
- **Name**: Description of where/why this is used. Include specific context.
- **Name**: Description of where/why this is used.
```

### Related Section
```markdown
**Related**:
- Related item 1
- Related item 2
- Related item 3
```

**Note:** Related items are free-form. They link to other components/styles or describe pseudo-entries.

### Cross-Refs Section
```markdown
**Cross-Refs**:
- Style × Component description 1
- Style × Component description 2
```

**Note:** Cross-Refs are suggestions for visual combinations or related terms. They appear in the "Visuals" tab.

---

## Build Process Details

The `build-content.js` script:

1. **Reads** all `.md` files from both directories
2. **Parses** each file with regex patterns that look for:
   - `# Title` at the start
   - `**Definition**: ...` (bounded by `\n\n` or next `**`)
   - `**History**: ...` (bounded by `\n\n` or next `**`)
   - `**Variations**:` followed by list until `**Use Cases**:`
   - `**Use Cases**:` followed by list until `**Related**:`
   - `**Related**:` followed by list until `**Cross-Refs**:`
   - `**Cross-Refs**:` followed by remaining list items
3. **Structures** each entry into JSON with proper field mapping
4. **Writes** a single `data/content.json` file with both categories

---

## Troubleshooting

### Build Script Fails
```bash
# Check that Node.js is installed
node --version

# Check that you're in the right directory
cd c:\Users\nikalys\Desktop\library\g3haiku
pwd

# Run with verbose output
node build-content.js
```

### Content Not Updating
1. Did you rebuild? → `node build-content.js`
2. Did you refresh the browser? → `Ctrl+R` or `Cmd+R`
3. Is the server still running? → Check terminal
4. Clear browser cache → `Ctrl+Shift+Delete` (Cmd+Shift+Delete on Mac)

### Entry Not Showing in Sidebar
1. Is the file in the correct folder?
   - Components: `../content/components/your_file.md`
   - Styles: `../content/styles/your_file.md`
2. Is it listed in `data/manifest.json`?
3. Did you run `build-content.js`?

### Parsing Errors
Check that your markdown follows the format exactly:
- Use `**Definition**:` (not `**Definition:**` without the colon)
- Use `-` for list items (not `*` or `+`)
- Ensure blank lines separate major sections
- No typos in section headers

---

## File Size & Performance

- **content.json**: ~400KB uncompressed
- **Gzipped**: ~50KB (web server compression)
- **Load Time**: <500ms on typical connection
- **Search Speed**: Instant (client-side)

The single JSON file approach is:
- ✅ Fast to load once
- ✅ Easy to deploy (single file)
- ✅ No server overhead (static)
- ✅ Cacheable by browsers

---

## Deployment

To deploy the app:
1. Copy the entire `g3haiku` folder to your hosting
2. Or push to GitHub and enable GitHub Pages:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/veria.git
   git branch -M main
   git push -u origin main
   ```
3. Enable Pages in GitHub settings → deploy from `main` branch

The site will be live at `https://yourusername.github.io/veria` (adjust to your actual folder name).

---

## Summary: Workflow

```
Edit markdown file
        ↓
Run: node build-content.js
        ↓
See: "✅ Content built successfully!"
        ↓
Refresh browser (Ctrl+R)
        ↓
Content appears in app
```

That's it! All content is now fully integrated and ready for production.
