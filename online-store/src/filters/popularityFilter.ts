import { cardsBlock, showCards } from '../cards/cards';
import { allTypes, sortByType } from '../functions/sortByValue';

let popularBtn = document.getElementById('popular-btn') as HTMLInputElement;

export function carPopularity() {
    popularBtn.addEventListener('click', () => {
        if (popularBtn.checked) {
            cardsBlock.innerHTML = '';
            showCards(sortByType('popularity', popularBtn.value, true));
        } else {
            cardsBlock.innerHTML = '';
            showCards(sortByType('popularity', popularBtn.value, false));
            allTypes.delete('popularity');
        }
    });
}
