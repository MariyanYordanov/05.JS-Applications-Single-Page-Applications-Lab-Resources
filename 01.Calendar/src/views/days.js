

// views/days.js
import { navigateTo } from '../router.js';
import { displaySection } from '../util/dom.js';
import { MONTH_NAMES } from '../util/constants.js';

export function createDaysView(container) {
    const dayViews = {};

    // Cache all day sections
    document.querySelectorAll('.daysCalendar').forEach(section => {
        const id = section.id;
        dayViews[id] = section;

        // Setup event listener
        section.addEventListener('click', handleDayClick);
    });

    function handleDayClick(e) {
        if (e.target.tagName === 'CAPTION') {
            const monthYear = e.target.textContent.trim();
            const [monthName, year] = monthYear.split(' ');

            if (year && /^\d{4}$/.test(year)) {
                navigateTo('months', year);
            }
        }
    }

    // Return view handler
    return function showDays(year, month) {
        const id = `month-${year}-${month}`;
        const section = dayViews[id];

        if (section) {
            displaySection(container, section);
        } else {
            console.error(`Month ${month}/${year} not found`);
        }
    };
}