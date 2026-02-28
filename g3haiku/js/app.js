/**
 * veria — core application logic
 * optimized for local file storage and hash routing
 */

const state = {
    theme: 'dark',
    sidebarCollapsed: true,
    manifest: null,
    contentData: null,
    currentEntryData: null,
    bookmarks: JSON.parse(localStorage.getItem('veria_bookmarks') || '[]')
};

// DOM Elements
const sidebar = document.getElementById('sidebar');
const stylesList = document.getElementById('styles-list');
const componentsList = document.getElementById('components-list');
const contentMount = document.getElementById('content-mount');

/**
 * Initialize
 */
async function init() {
    console.log('veria initializing...');

    // Setup listeners immediately
    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
    document.getElementById('sidebar-toggle').addEventListener('click', toggleSidebar);
    window.addEventListener('hashchange', handleRouting);

    // Load content data
    try {
        const response = await fetch('data/content.json');
        state.contentData = await response.json();
        console.log(`✓ Loaded ${Object.keys(state.contentData.components || {}).length} components`);
        console.log(`✓ Loaded ${Object.keys(state.contentData.styles || {}).length} styles`);
    } catch (err) {
        console.error('Failed to load content.json:', err);
        // Fallback will show error state when trying to render entries
    }

    // Load manifest (for sidebar nav structure)
    try {
        const response = await fetch('data/manifest.json');
        state.manifest = await response.json();
    } catch (err) {
        console.warn('could not fetch manifest via network, trying local state...');
        // Fallback or handle appropriately
    }

    renderSidebar();
    setupSearch();
    handleRouting();
    setupLandingButtons();
    setupInteractions();
    updateBookmarksUI();
}

/**
 * Global Interactions (Toggles, etc.)
 */
function setupInteractions() {
    document.addEventListener('click', (e) => {
        // Toggle Buttons
        if (e.target.classList.contains('sc-toggle')) {
            e.target.classList.toggle('on');
        }

        // Bookmark toggle button (Entry)
        const bookmarkBtn = e.target.closest('.bookmark-entry-btn');
        if (bookmarkBtn) {
            const entryId = bookmarkBtn.dataset.entryId;
            toggleBookmark(entryId);
        }

        // View bookmarks (Navbar)
        if (e.target.closest('#bookmarks-btn')) {
            showBookmarks();
        }
    });
}

/**
 * Sidebar Search
 */
function setupSearch() {
    if (document.getElementById('sidebar-search')) return;

    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'search...';
    searchInput.id = 'sidebar-search';
    searchInput.className = 'sidebar-search';

    document.querySelector('.sidebar-content').prepend(searchInput);

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        filterSidebar(query);
    });
}

function filterSidebar(query) {
    document.querySelectorAll('.sidebar-link').forEach(link => {
        const label = link.textContent.toLowerCase();
        link.parentElement.style.display = label.includes(query) ? 'block' : 'none';
    });
}

/**
 * Render Sidebar Links (using hashes)
 */
function renderSidebar() {
    if (!state.manifest) return;

    const render = (items, el, type) => {
        el.innerHTML = items.map(id => `
            <li>
                <a href="#/${type}/${id}" class="sidebar-link">
                    <span class="link-icon">${getIcon(type)}</span>
                    <span class="link-label">${id.replace(/_/g, ' ')}</span>
                </a>
            </li>
        `).join('');
    };

    render(state.manifest.styles, stylesList, 'styles');
    render(state.manifest.components, componentsList, 'components');

    document.querySelectorAll('.sidebar-title').forEach(title => {
        title.addEventListener('click', () => {
            if (state.sidebarCollapsed) toggleSidebar();
            title.parentElement.classList.toggle('collapsed');
        });
    });
}

function toggleTheme() {
    state.theme = state.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', state.theme);
}

function toggleSidebar() {
    state.sidebarCollapsed = !state.sidebarCollapsed;
    sidebar.classList.toggle('expanded', !state.sidebarCollapsed);
}

function getIcon(type) {
    if (type === 'styles') {
        return `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a10 10 0 0 1 10 10l-10 10L2 12A10 10 0 0 1 12 2z"></path></svg>`;
    }
    return `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>`;
}

/**
 * Routing Engine (Hash Based)
 */
function handleRouting() {
    const hash = window.location.hash || '#/';

    if (hash === '#/') {
        // Return to landing is handled via Page Refresh or manual render
        // But we want it to work without refresh too
        const landingContent = document.querySelector('.landing-page');
        if (!landingContent) renderLanding();
        return;
    }

    const parts = hash.replace('#/', '').split('/');
    if (parts.length >= 2) {
        renderEntry(parts[0], parts[1]);
    }
}

function setupLandingButtons() {
    document.getElementById('start-browsing')?.addEventListener('click', () => {
        if (state.sidebarCollapsed) toggleSidebar();
        window.location.hash = '#/styles/minimalism';
    });

    document.querySelectorAll('.shortcut-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            if (state.sidebarCollapsed) toggleSidebar();
            const cat = btn.dataset.category;
            const s = document.getElementById('sidebar-search');
            if (s) { s.value = cat; filterSidebar(cat); s.focus(); }
        });
    });
}

function renderLanding() {
    contentMount.innerHTML = `
        <section class="landing-page">
            <div class="hero">
                <div class="hero-brand">
                    <h1 class="hero-title">veria</h1>
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <circle cx="12" cy="5" r="2.5"></circle>
                        <circle cx="18.5" cy="10" r="2.5" fill="currentColor"></circle>
                        <circle cx="16" cy="18" r="2.5"></circle>
                        <circle cx="8" cy="18" r="2.5"></circle>
                        <circle cx="5.5" cy="10" r="2.5" fill="currentColor"></circle>
                    </svg>
                </div>
                <h2 class="hero-subtitle">the language your eyes already speak.</h2>
                <p class="tagline">all your design vocabulary. in one language.</p>
                <button class="cta-primary" id="start-browsing">browse library</button>
            </div>
            <div class="shortcuts">
                <button class="shortcut-btn" data-category="layouts">layouts</button>
                <button class="shortcut-btn" data-category="navigation">navigation</button>
                <button class="shortcut-btn" data-category="styles">visual styles</button>
            </div>
        </section>
    `;
    setupLandingButtons();
}

function renderEntry(type, id) {
    // Validate type
    const validTypes = ['components', 'styles'];
    if (!validTypes.includes(type)) {
        contentMount.innerHTML = `
            <div class="error-state">
                <h2>invalid entry type</h2>
                <p>expected "components" or "styles"</p>
                <button onclick="window.location.hash='#/'" class="shortcut-btn">return home</button>
            </div>
        `;
        return;
    }

    // Check if content data is loaded
    if (!state.contentData) {
        contentMount.innerHTML = `
            <div class="error-state">
                <h2>content not loaded</h2>
                <p>the content.json file could not be loaded.</p>
                <button onclick="window.location.hash='#/'" class="shortcut-btn">return home</button>
            </div>
        `;
        return;
    }

    // Get entry from content data
    const entry = state.contentData[type]?.[id];
    if (!entry) {
        contentMount.innerHTML = `
            <div class="error-state">
                <h2>${id.replace(/_/g, ' ')} not found</h2>
                <p>this entry does not exist in the library.</p>
                <button onclick="window.location.hash='#/'" class="shortcut-btn">return home</button>
            </div>
        `;
        return;
    }

    // Store for tab rendering
    state.currentEntryData = entry;

    if (type === 'styles') {
        contentMount.innerHTML = `
            <div class="split-layout">
                <div class="split-left">
                    <header class="entry-header">
                        <div style="display: flex; justify-content: space-between; align-items: start;">
                            <div>
                                <span class="entry-type">style</span>
                                <h1 class="entry-title">${entry.title || id.replace(/_/g, ' ')}</h1>
                            </div>
                            <div id="bookmark-container">
                                ${getBookmarkUI('style_' + id)}
                            </div>
                        </div>
                    </header>
                    <div class="style-details">
                        ${renderTabContent('overview', type, id)}
                        <h2 style="margin: var(--space-xl) 0 var(--space-md) 0; font-size: 1.25rem;">variations</h2>
                        ${renderTabContent('variations', type, id)}
                        <h2 style="margin: var(--space-xl) 0 var(--space-md) 0; font-size: 1.25rem;">use cases</h2>
                        ${renderTabContent('use-cases', type, id)}
                    </div>
                </div>
                <div class="split-right">
                    ${renderStyleShowcase(id)}
                </div>
            </div>
        `;
    } else {
        contentMount.innerHTML = `
            <div class="entry-page">
                <header class="entry-header">
                    <div style="display: flex; justify-content: space-between; align-items: start;">
                        <div>
                            <span class="entry-type">component</span>
                            <h1 class="entry-title">${entry.title || id.replace(/_/g, ' ')}</h1>
                        </div>
                        <div id="bookmark-container">
                            ${getBookmarkUI('component_' + id)}
                        </div>
                    </div>
                </header>
                <nav class="entry-tabs">
                    <button class="tab-btn active" data-tab="overview">overview</button>
                    <button class="tab-btn" data-tab="variations">variations</button>
                    <button class="tab-btn" data-tab="use-cases">use cases</button>
                    <button class="tab-btn" data-tab="visuals">visuals</button>
                </nav>
                <div class="tab-content" id="tab-content">
                    ${renderTabContent('overview', type, id)}
                </div>
            </div>
        `;
        setupTabs(type, id);
    }

    window.scrollTo(0, 0);

    document.querySelectorAll('.sidebar-link').forEach(l => {
        l.classList.toggle('active', l.getAttribute('href') === window.location.hash);
    });
}

function escapeHTML(str) {
    if (!str) return '';
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function renderTabContent(tabId, type, id) {
    if (tabId === 'visuals') {
        if (type === 'styles') {
            return renderStyleShowcase(id);
        }
        return renderVisualsMatrix(type, id);
    }
    const entry = state.currentEntryData;
    if (!entry) return 'no content available.';

    // Map tab names to entry fields
    const fieldMap = {
        'overview': ['definition', 'history'],
        'variations': 'variations',
        'use-cases': 'useCases',
        'use_cases': 'useCases'
    };

    const fields = fieldMap[tabId];
    if (!fields) return 'no content available.';

    // If fields is an array, combine them (for overview)
    if (Array.isArray(fields)) {
        let html = '';
        if (entry.definition) {
            html += `<section class="content-section">
                <h2>definition</h2>
                <p>${escapeHTML(entry.definition)}</p>
            </section>`;
        }
        if (entry.history) {
            html += `<section class="content-section">
                <h2>history</h2>
                <p>${escapeHTML(entry.history)}</p>
            </section>`;
        }
        return html || 'no content available.';
    }

    // Otherwise, render the specific field
    const fieldName = fields;
    const fieldValue = entry[fieldName];

    if (!fieldValue || fieldValue.length === 0) {
        return 'no content available.';
    }

    // Check if it's an array (variations, useCases)
    if (Array.isArray(fieldValue)) {
        const html = fieldValue.map(item => {
            if (typeof item === 'object' && item.name) {
                return `
                    <div class="entry-item">
                        <h3>${escapeHTML(item.name)}</h3>
                        <p>${escapeHTML(item.description || '')}</p>
                    </div>
                `;
            } else {
                return `<li>${escapeHTML(item)}</li>`;
            }
        }).join('');

        return fieldValue.some(i => typeof i === 'object')
            ? `<div class="entry-list">${html}</div>`
            : `<ul>${html}</ul>`;
    }

    return `<p>${escapeHTML(fieldValue)}</p>`;
}

function renderVisualsMatrix(type, id) {
    if (!type || !id) {
        const hash = window.location.hash;
        const parts = hash.replace('#/', '').split('/');
        type = parts[0];
        id = parts[1];
    }

    const entry = state.currentEntryData;
    let refs = entry.crossRefs || [];

    // Fallback: if no cross-refs, suggest related entries
    if (refs.length === 0) {
        refs = entry.related || [];
    }
    if (refs.length === 0) {
        if (type === 'components') {
            refs = ['minimalism', 'glassmorphism', 'cyberpunk'];
        } else {
            refs = ['button', 'card', 'navigation_bar'];
        }
    }

    const title = type === 'components' ? 'component × styles' : 'style × components';

    return `
        <div class="matrix-grid">
            <header class="matrix-header">
                <h3>${title}</h3>
                <p class="matrix-sub">click a card to explore related entries</p>
            </header>
            <div class="preview-cards">
                ${refs.map(refId => {
        const cleanRefId = refId.replace(/[^a-z0-9_]/gi, '_').toLowerCase();
        const targetType = type === 'components' ? 'styles' : 'components';
        const targetHash = `#/${targetType}/${cleanRefId}`;
        return `
                        <div class="preview-card" onclick="window.location.hash='${targetHash}'">
                            <div class="preview-header">
                                <span>${refId.replace(/_/g, ' ')}</span>
                                <span class="view-link">view &rarr;</span>
                            </div>
                            <div class="preview-window">
                                <div class="mock-ui ${cleanRefId}">
                                    ${refId.replace(/_/g, ' ')}
                                </div>
                            </div>
                        </div>
                    `;
    }).join('')}
            </div>
        </div>
        <div class="matrix-raw">
            <h3>related entries</h3>
            ${entry.related && entry.related.length > 0
            ? `<ul>${entry.related.map(r => `<li>${r}</li>`).join('')}</ul>`
            : '<p>no related entries.</p>'}
        </div>
    `;
}

function renderStyleShowcase(styleId) {
    return `
        <div class="style-showcase" data-style="${styleId}">
            <!-- 1. Nav Bar -->
            <div class="showcase-item">
                <span class="item-label">1. Nav Bar</span>
                <div class="component-preview">
                    <nav class="sc-navbar">
                        <div class="sc-logo">logo</div>
                        <div class="sc-nav-links">
                            <span>about</span>
                            <span>work</span>
                            <span>contact</span>
                        </div>
                    </nav>
                </div>
            </div>

            <!-- 2. Primary Button -->
            <div class="showcase-item">
                <span class="item-label">2. Primary Button</span>
                <div class="component-preview">
                    <button class="sc-btn sc-btn-primary">get started</button>
                </div>
            </div>

            <!-- 3. Secondary Button -->
            <div class="showcase-item">
                <span class="item-label">3. Secondary Button</span>
                <div class="component-preview">
                    <button class="sc-btn sc-btn-secondary">learn more</button>
                </div>
            </div>

            <!-- 4. Card -->
            <div class="showcase-item">
                <span class="item-label">4. Card</span>
                <div class="component-preview">
                    <div class="sc-card">
                        <div class="sc-card-img"></div>
                        <div class="sc-card-content">
                            <div class="sc-card-title">design system</div>
                            <p style="font-size: 0.8rem; opacity: 0.7;">modular tokens and components.</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 5. Form Input -->
            <div class="showcase-item">
                <span class="item-label">5. Form Input</span>
                <div class="component-preview">
                    <div class="sc-input-group">
                        <label style="font-size: 0.7rem;">email address</label>
                        <input type="text" class="sc-input" placeholder="hello@veria.io">
                    </div>
                </div>
            </div>

            <!-- 6. Toggle -->
            <div class="showcase-item">
                <span class="item-label">6. Toggle</span>
                <div class="component-preview">
                    <div style="display: flex; gap: var(--space-md);">
                        <div class="sc-toggle"></div>
                        <div class="sc-toggle on"></div>
                    </div>
                </div>
            </div>

            <!-- 7. Badge -->
            <div class="showcase-item">
                <span class="item-label">7. Badge</span>
                <div class="component-preview">
                    <div style="display: flex; gap: var(--space-sm);">
                        <span class="sc-badge">beta</span>
                        <span class="sc-badge" style="background: var(--accent-primary); color: white;">new</span>
                    </div>
                </div>
            </div>

            <!-- 8. Alert -->
            <div class="showcase-item">
                <span class="item-label">8. Alert</span>
                <div class="component-preview">
                    <div class="sc-alert">
                        your design tokens have been updated.
                    </div>
                </div>
            </div>

            <!-- 9. Avatar -->
            <div class="showcase-item">
                <span class="item-label">9. Avatar</span>
                <div class="component-preview">
                    <div style="display: flex; gap: var(--space-md);">
                        <div class="sc-avatar">jd</div>
                        <div class="sc-avatar" style="border-radius: 4px;">as</div>
                    </div>
                </div>
            </div>

            <!-- 10. Progress Bar -->
            <div class="showcase-item">
                <span class="item-label">10. Progress Bar</span>
                <div class="component-preview">
                    <div class="sc-progress-container">
                        <div class="sc-progress-bar"></div>
                    </div>
                </div>
            </div>

            <!-- 11. Accordion -->
            <div class="showcase-item">
                <span class="item-label">11. Accordion</span>
                <div class="component-preview">
                    <div class="sc-accordion">
                        <div class="sc-accordion-header">
                            <span>core principles</span>
                            <span>&darr;</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 12. Breadcrumbs -->
            <div class="showcase-item">
                <span class="item-label">12. Breadcrumbs</span>
                <div class="component-preview">
                    <div class="sc-breadcrumbs">
                        <span>home</span>
                        <span>library</span>
                        <span class="active">styles</span>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function setupTabs(type, id) {
    const tabs = document.querySelectorAll('.tab-btn');
    const container = document.getElementById('tab-content');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            container.innerHTML = renderTabContent(tab.dataset.tab, type, id);
        });
    });
}

/**
 * Bookmarks Logic
 */
function toggleBookmark(id) {
    const index = state.bookmarks.indexOf(id);
    if (index === -1) {
        state.bookmarks.push(id);
    } else {
        state.bookmarks.splice(index, 1);
    }
    localStorage.setItem('veria_bookmarks', JSON.stringify(state.bookmarks));

    // Update the button UI immediately
    const container = document.getElementById('bookmark-container');
    if (container) container.innerHTML = getBookmarkUI(id);

    updateBookmarksUI();
}

function getBookmarkUI(id) {
    const isBookmarked = state.bookmarks.includes(id);
    return `
        <button class="bookmark-entry-btn ${isBookmarked ? 'is-saved' : ''}" data-entry-id="${id}">
            ${isBookmarked ? `
                <span class="label-saved">saved</span>
                <span class="label-remove">remove</span>
            ` : `
                <span>save</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                    <path d="M20 6L9 17l-5-5"></path>
                </svg>
            `}
        </button>
    `;
}

function updateBookmarksUI() {
    const btn = document.getElementById('bookmarks-btn');
    if (!btn) return;
    const hasBookmarks = state.bookmarks.length > 0;

    // Navbar dot indicator
    const dot = btn.querySelector('.marker-dot');
    if (dot) dot.setAttribute('fill', hasBookmarks ? 'var(--accent-primary)' : 'none');

    btn.style.color = hasBookmarks ? 'var(--accent-primary)' : 'var(--text-secondary)';
}

function showBookmarks() {
    if (state.bookmarks.length === 0) {
        alert("no bookmarks yet! explore the library to add some.");
        return;
    }

    contentMount.innerHTML = `
        <div class="entry-page">
            <header class="entry-header">
                <span class="entry-type">collection</span>
                <h1 class="entry-title">your bookmarks</h1>
            </header>
            <div class="preview-cards">
                ${state.bookmarks.map(id => {
        const isStyle = id.startsWith('style_');
        const type = isStyle ? 'styles' : 'components';
        const cleanId = id.replace(isStyle ? 'style_' : 'component_', '');
        return `
                        <div class="preview-card" onclick="window.location.hash='#/${type}/${cleanId}'">
                            <div class="preview-header">
                                <span>${cleanId.replace(/_/g, ' ')}</span>
                                <span class="view-link">view &rarr;</span>
                            </div>
                            <div class="preview-window">
                                <div class="mock-ui ${cleanId}">
                                    ${cleanId.replace(/_/g, ' ')}
                                </div>
                            </div>
                        </div>
                    `;
    }).join('')}
            </div>
        </div>
    `;
    window.location.hash = '#/bookmarks';
}

document.addEventListener('DOMContentLoaded', init);
