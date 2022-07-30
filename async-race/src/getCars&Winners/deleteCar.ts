import { garage, winners } from '../types/types';
import { showCar } from './showCar';

export async function deleteCar() {
    let deleteBtns = document.querySelectorAll('.remove-car') as NodeListOf<HTMLButtonElement>;

    deleteBtns.forEach((el) => {
        el.addEventListener('click', () => {
            garage.removeCar(Number(el.name));
            winners.removeWinner(Number(el.name));
            showCar();
        });
    });
}
