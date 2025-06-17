let views = {};

export function view(name, handler) {
    views[name] = handler;
}

export function router() {
    document.body.addEventListener('click', (e) => {
        const view = e.target?.dataset?.view;
        if (view && views[view]) {
            e.preventDefault();
            goTo(view, ...e.target.dataset.args?.split(',') || []);
        }
    });
}

export function goTo(name, ...params) {
    const view = views[name];
    if (typeof view === 'function') {
        view(...params);
    }
}