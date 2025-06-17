let views = {};

// Регистрира view handler
export function registerView(name, handler) {
    views[name] = handler;
}

// Инициализира рутера
export function initRouter() {
    // Делегиране на click events
    document.body.addEventListener('click', (e) => {
        const link = e.target.closest('[data-view]');
        if (link) {
            e.preventDefault();
            const view = link.dataset.view;
            const args = link.dataset.args?.split(',') || [];
            navigateTo(view, ...args);
        }
    });

    // Handle browser back/forward buttons
    window.addEventListener('popstate', (e) => {
        if (e.state) {
            const { view, args } = e.state;
            showView(view, ...args);
        }
    });
}

// Навигира към view и обновява URL
export function navigateTo(viewName, ...params) {
    if (!views[viewName]) {
        console.error(`View "${viewName}" not found`);
        return;
    }

    // Update URL without page reload
    const url = buildUrl(viewName, params);
    history.pushState({ view: viewName, args: params }, '', url);

    showView(viewName, ...params);
}

// Показва view без да променя URL
function showView(viewName, ...params) {
    const handler = views[viewName];
    if (handler) {
        handler(...params);
    }
}

// Builds URL from view name and params
function buildUrl(viewName, params) {
    const base = `#/${viewName}`;
    return params.length > 0 ? `${base}/${params.join('/')}` : base;
}

// Parse current URL and navigate to appropriate view
export function handleInitialRoute() {
    const hash = window.location.hash.slice(2); // Remove #/
    const [viewName, ...params] = hash.split('/');

    if (viewName && views[viewName]) {
        showView(viewName, ...params);
    } else {
        navigateTo('years'); // Default view
    }
}