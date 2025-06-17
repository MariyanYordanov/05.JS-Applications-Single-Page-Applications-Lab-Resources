import { goTo } from '../router.js';
import { displaySection } from '../util/dom.js';

export function setupYearsView(section, main) {
    section.addEventListener('click', (e) => {
        if (e.target.classList.contains('date') || e.target.classList.contains('day')) {
            const year = e.target.textContent.trim();
            goTo('months', year);
        }
    });

    return function showYears() {
        displaySection(main, section);
    };
}
