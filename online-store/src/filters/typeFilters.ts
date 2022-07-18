import { showCards } from '../cards/cards';
import { sortByType } from '../functions/sortByValue';
import './typeFilters.css';
import './colorFilters';

let types = document.getElementsByName('car-type') as NodeListOf<HTMLInputElement>;

types.forEach((el: HTMLInputElement) => {
    el.addEventListener('click', () => {
        if (el.checked) showCards(sortByType('type', el.value, true));
        else showCards(sortByType('type', el.value, false));
    });
});
