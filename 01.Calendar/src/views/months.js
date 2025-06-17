import { goTo } from '../router.js';
import displaySection from '../util.js';

export function monthsView(main) {
    const views = {};

    document.querySelectorAll('.monthCalendar').forEach(section => {
        const year = section.id.split('-')[1];
        views[year] = section;

        section.addEventListener('click', (e) => {
            if (e.target.tagName === 'CAPTION') {
                goTo('years');
            } else if (e.target.tagName === 'TD' || e.target.tagName === 'DIV') {
                const monthName = e.target.textContent.trim();
                const monthIndex = getMonthNumber(monthName);
                if (monthIndex) {
                    goTo('days', year, monthIndex);
                }
            }
        });
    });

    return function showMonths(year) {
        displaySection(main, views[year]);
    };
}

function getMonthNumber(name) {
    return {
        Jan: 1, Feb: 2, Mar: 3, Apr: 4,
        May: 5, Jun: 6, Jul: 7, Aug: 8,
        Sep: 9, Sept: 9, Oct: 10, Nov: 11, Dec: 12
    }[name];
}