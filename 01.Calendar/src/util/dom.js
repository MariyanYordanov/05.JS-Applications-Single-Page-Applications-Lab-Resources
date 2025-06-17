export function displaySection(container, section) {
    container.querySelectorAll('section').forEach(s => {
        s.style.display = 'none';
    });

    if (section) {
        section.style.display = 'block';
    }
}

