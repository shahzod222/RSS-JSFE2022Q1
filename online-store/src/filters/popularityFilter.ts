import { showCards } from '../cards/cards';
import { sortByType } from '../functions/sortByValue';

let popularBtn = document.getElementById('popular-btn') as HTMLInputElement;

popularBtn.addEventListener('click', () => {
    if (popularBtn.checked) showCards(sortByType('popularity', popularBtn.value, true));
    else showCards(sortByType('popularity', popularBtn.value, false));
});
