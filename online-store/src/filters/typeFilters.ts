import { cardsBlock, showCards } from '../cards/cards';
import { allTypes, sortByType } from '../functions/sortByValue';
import { allCars } from '../types/cars';
import './typeFilters.css';
import './colorFilters';

let types = document.getElementsByName('car-type') as NodeListOf<HTMLInputElement>;

export function carTypes() {
    types.forEach((el: HTMLInputElement) => {
        el.addEventListener('click', () => {
            if (el.checked) {
                cardsBlock.innerHTML = '';
                showCards(sortByType('type', el.value, true));
            } else {
                cardsBlock.innerHTML = '';
                showCards(sortByType('type', el.value, false));
                if (!types[0].checked && !types[1].checked && !types[2].checked) {
                    allTypes.delete('type');
                    if (allTypes.size == 0) {
                        showCards(allCars);
                    }
                }
            }
        });
    });
}
