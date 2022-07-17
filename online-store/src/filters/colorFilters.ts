import { cardsBlock, showCards } from '../cards/cards';
import { allTypes, sortByType } from '../functions/sortByValue';
import { allCars } from '../types/cars';

let colors = document.getElementsByName('car-color') as NodeListOf<HTMLInputElement>;

export function carColors() {
    colors.forEach((el: HTMLInputElement) => {
        el.addEventListener('click', () => {
            if (el.checked) {
                cardsBlock.innerHTML = '';
                showCards(sortByType('color', el.value, true));
            } else {
                cardsBlock.innerHTML = '';
                showCards(sortByType('color', el.value, false));
                if (
                    !colors[0].checked &&
                    !colors[1].checked &&
                    !colors[2].checked &&
                    !colors[3].checked &&
                    !colors[4].checked &&
                    !colors[5].checked
                ) {
                    allTypes.delete('color');
                    if (allTypes.size == 0) {
                        showCards(allCars);
                    }
                }
            }
        });
    });
}
