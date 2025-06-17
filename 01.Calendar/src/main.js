import { router, goTo, view } from './router.js';

import { yearsView } from './views/years.js';
import { monthsView } from './views/months.js';
import { daysView } from './views/days.js';

const main = document.getElementById('content');
const years = document.getElementById('years');

view('years', yearsView(years, main));
view('months', monthsView(main));
view('days', daysView(main));

router();
goTo('years');
