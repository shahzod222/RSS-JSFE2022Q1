import { showCards } from '../cards/cards';
import { sortByType } from '../functions/sortByValue';

let search = document.querySelector('.search') as HTMLInputElement;
let sort = document.querySelector('.sort') as HTMLSelectElement;

search.addEventListener('input', () => {
    showCards(sortByType('search', search.value, true));
});

sort.addEventListener('change', () => {
    showCards(sortByType('sort', sort.value, true));
});
