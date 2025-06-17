import { goTo } from '../router.js';
import displaySection from '../util.js';
import { getMonthNumber } from '../constants.js';

export function monthsView() {
    const views = {};

    document.querySelectorAll('.monthCalendar').forEach(section => {
        const year = section.id.split('-')[1];
        views[year] = section;

        section.addEventListener('click', (e) => {
            if (e.target.tagName === 'CAPTION') {
                goTo('years');
            }
            else if (e.target.tagName === 'TD' || e.target.tagName === 'DIV') {
                const monthName = e.target.textContent;
                const monthIndex = getMonthNumber(monthName);

                if (monthIndex) {
                    goTo('days', year, monthIndex);
                }
            }
        });
    });

    return function showMonths(year) {
        displaySection(views[year]);
    };
}