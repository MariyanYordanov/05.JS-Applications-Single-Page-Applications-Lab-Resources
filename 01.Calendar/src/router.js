let views = {};

export function view(name, handler) {
    views[name] = handler;
}

export function goTo(name, ...params) {
    const view = views[name];
    if (typeof view === 'function') {
        view(...params);
    }
}