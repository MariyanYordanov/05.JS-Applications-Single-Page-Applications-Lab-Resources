
// views/months.js
import { navigateTo } from '../router.js';
import { displaySection } from '../util/dom.js';
import { MONTHS } from '../util/constants.js';

export function createMonthsView(container) {
    const monthViews = {};

    // Cache all month sections
    document.querySelectorAll('.monthCalendar').forEach(section => {
        const year = section.id.split('-')[1];
        monthViews[year] = section;

        // Setup event listener
        section.addEventListener('click', (e) => handleMonthClick(e, year));
    });

    function handleMonthClick(e, year) {
        // Navigate back to years
        if (e.target.tagName === 'CAPTION') {
            navigateTo('years');
            return;
        }

        // Navigate to days view
        const monthElement = e.target.closest('.day');
        if (monthElement) {
            const monthName = monthElement.querySelector('.date')?.textContent.trim();
            const monthNumber = MONTHS[monthName];

            if (monthNumber) {
                navigateTo('days', year, monthNumber);
            }
        }
    }

    // Return view handler
    return function showMonths(year) {
        const section = monthViews[year];
        if (section) {
            displaySection(container, section);
        } else {
            console.error(`Year ${year} not found`);
        }
    };
}