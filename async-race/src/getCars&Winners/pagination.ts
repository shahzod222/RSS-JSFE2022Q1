import { nextPage, pageNumber, prevPage } from '../others/renderHtml';
import { showCar } from './showCar';

export function pagination() {
    nextPage.addEventListener('click', () => {
        pageNumber.innerHTML = `${Number(pageNumber.innerHTML) + 1}`;
        showCar();
    });

    prevPage.addEventListener('click', () => {
        pageNumber.innerHTML = `${Number(pageNumber.innerHTML) - 1}`;
        showCar();
    });
}
