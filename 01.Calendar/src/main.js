import { goTo, view } from './router.js';
import { yearsView } from './views/years.js';
import { monthsView } from './views/months.js';
import { daysView } from './views/days.js';

document.addEventListener('DOMContentLoaded', () => {
    
    document.querySelectorAll('section').forEach(s => {
        s.style.display = 'none';
    });

    const years = document.getElementById('years');
    
    view('years', yearsView(years));
    view('months', monthsView());
    view('days', daysView());

    goTo('years');
});