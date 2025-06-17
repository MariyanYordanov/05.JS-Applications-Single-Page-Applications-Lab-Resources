let views = {};

// Sets the main element where views will be displayed
export function view(name, set) {
    views[name] = set;
}

// Initializes the main element where views will be displayed
export function router() {
    document.body.addEventListener('click', (e) => {
        const view = e.target?.dataset?.view;
        if (view && views[view]) {
            e.preventDefault();
            goTo(view, ...e.target.dataset.args?.split(',') || []);
        }
    });
}

// Initializes the main element where views will be displayed
export function goTo(name, ...params) {
    const view = views[name];
    if (typeof view === 'function') {
        view(...params);
    }
}
