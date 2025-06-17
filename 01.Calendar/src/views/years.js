import { navigateTo } from '../router.js';
import { displaySection } from '../util/dom.js';

export function createYearsView(section, container) {

    section.addEventListener('click', handleYearClick);

    function handleYearClick(e) {
        const yearElement = e.target.closest('.day');
        if (yearElement) {
            const year = yearElement.querySelector('.date')?.textContent.trim();
            if (year && /^\d{4}$/.test(year)) {
                navigateTo('months', year);
            }
        }
    }

    return function showYears() {
        displaySection(container, section);
    };
}
