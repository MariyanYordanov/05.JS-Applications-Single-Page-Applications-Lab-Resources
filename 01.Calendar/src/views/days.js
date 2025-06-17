import { goTo } from '../router.js';
import displaySection from '../util.js';

export function daysView() {
    const views = {};

    document.querySelectorAll('.daysCalendar').forEach(section => {
        const id = section.id;
        views[id] = section;

        section.addEventListener('click', (e) => {
            if (e.target.tagName === 'CAPTION') {
                const [_, year] = id.split('-');
                goTo('months', year);
            }
        });
    });

    return function showDays(year, month) {
        const id = `month-${year}-${month}`;
        displaySection(views[id]);
    };
}