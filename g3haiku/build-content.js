/**
 * build-content.js
 * Converts markdown files from ../content/ into a single JSON file
 * Run: node build-content.js
 */

const fs = require('fs');
const path = require('path');

const CONTENT_DIR = path.join(__dirname, '..', 'content');
const OUTPUT_FILE = path.join(__dirname, 'data', 'content.json');

function parseMarkdown(filePath) {
    const text = fs.readFileSync(filePath, 'utf-8');
    
    const data = {
        title: '',
        definition: '',
        history: '',
        variations: [],
        useCases: [],
        related: [],
        crossRefs: []
    };

    // Extract title from # Header
    const titleMatch = text.match(/^#\s+(.+?)$/m);
    if (titleMatch) {
        data.title = titleMatch[1].trim();
    }

    // Extract Definition
    const defMatch = text.match(/\*\*Definition\*\*:\s*(.+?)(?=\n\n|\*\*)/s);
    if (defMatch) {
        data.definition = defMatch[1].trim();
    }

    // Extract History
    const histMatch = text.match(/\*\*History\*\*:\s*(.+?)(?=\n\n|\*\*)/s);
    if (histMatch) {
        data.history = histMatch[1].trim();
    }

    // Extract Variations (as list) - bounded by Use Cases
    const varMatch = text.match(/\*\*Variations\*\*:\s*\n((?:- .+\n?)+?)(?=\*\*Use Cases?\*\*:)/s);
    if (varMatch) {
        const items = varMatch[1].match(/^-\s*\*\*(.+?)\*\*:\s*(.+?)$/gm);
        if (items) {
            items.forEach(item => {
                const match = item.match(/^-\s*\*\*(.+?)\*\*:\s*(.+?)$/);
                if (match) {
                    data.variations.push({
                        name: match[1].trim(),
                        description: match[2].trim()
                    });
                }
            });
        }
    }

    // Extract Use Cases (as list) - bounded by Related
    const useCaseMatch = text.match(/\*\*Use Cases?\*\*:\s*\n((?:- .+\n?)+?)(?=\*\*Related\*\*:)/s);
    if (useCaseMatch) {
        const items = useCaseMatch[1].match(/^-\s*\*\*(.+?)\*\*:\s*(.+?)$/gm);
        if (items) {
            items.forEach(item => {
                const match = item.match(/^-\s*\*\*(.+?)\*\*:\s*(.+?)$/);
                if (match) {
                    data.useCases.push({
                        name: match[1].trim(),
                        description: match[2].trim()
                    });
                }
            });
        }
    }

    // Extract Related (as simple list)
    const relatedMatch = text.match(/\*\*Related\*\*:\s*\n((?:- .+\n?)+)/s);
    if (relatedMatch) {
        const items = relatedMatch[1].match(/^-\s*(.+?)$/gm);
        if (items) {
            data.related = items.map(item => item.replace(/^-\s*/, '').trim());
        }
    }

    // Extract Cross-Refs (as simple list)
    const crossMatch = text.match(/\*\*Cross-Refs?\*\*:\s*\n((?:- .+\n?)+)/s);
    if (crossMatch) {
        const items = crossMatch[1].match(/^-\s*(.+?)$/gm);
        if (items) {
            data.crossRefs = items.map(item => item.replace(/^-\s*/, '').trim());
        }
    }

    return data;
}

function fileToSlug(filename) {
    return path.basename(filename, '.md').toLowerCase();
}

function buildContentJSON() {
    console.log('🔨 Building content.json from markdown files...\n');

    const output = {
        components: {},
        styles: {}
    };

    // Process components
    const componentsDir = path.join(CONTENT_DIR, 'components');
    if (fs.existsSync(componentsDir)) {
        const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.md'));
        console.log(`📝 Found ${files.length} component files`);
        
        files.forEach(file => {
            const slug = fileToSlug(file);
            const filePath = path.join(componentsDir, file);
            try {
                output.components[slug] = parseMarkdown(filePath);
                console.log(`  ✓ ${slug}`);
            } catch (err) {
                console.error(`  ✗ ${slug}: ${err.message}`);
            }
        });
    }

    console.log();

    // Process styles
    const stylesDir = path.join(CONTENT_DIR, 'styles');
    if (fs.existsSync(stylesDir)) {
        const files = fs.readdirSync(stylesDir).filter(f => f.endsWith('.md'));
        console.log(`🎨 Found ${files.length} style files`);
        
        files.forEach(file => {
            const slug = fileToSlug(file);
            const filePath = path.join(stylesDir, file);
            try {
                output.styles[slug] = parseMarkdown(filePath);
                console.log(`  ✓ ${slug}`);
            } catch (err) {
                console.error(`  ✗ ${slug}: ${err.message}`);
            }
        });
    }

    console.log();

    // Ensure data directory exists
    const dataDir = path.dirname(OUTPUT_FILE);
    if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
    }

    // Write output
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(output, null, 2));
    console.log(`✅ Content built successfully!`);
    console.log(`📦 Output: ${OUTPUT_FILE}`);
    console.log(`   Components: ${Object.keys(output.components).length}`);
    console.log(`   Styles: ${Object.keys(output.styles).length}`);
}

buildContentJSON();
