import { goTo } from '../router.js';
import displaySection from '../util.js';

export function yearsView(section, main) {
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