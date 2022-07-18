import { showCards } from '../cards/cards';
import { sortByType } from '../functions/sortByValue';

let colors = document.getElementsByName('car-color') as NodeListOf<HTMLInputElement>;


    colors.forEach((el: HTMLInputElement) => {
        el.addEventListener('click', () => {
            if (el.checked) 
                showCards(sortByType('color', el.value, true));
            else 
                showCards(sortByType('color', el.value, false));
        });
    });

