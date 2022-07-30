import { garage } from '../types/types';
import { showCar } from './showCar';

let carId = 0;

export function updateCar() {
    let updateCarBtn = document.querySelector('.update-car') as HTMLButtonElement;
    let carName = document.querySelector('.update-name') as HTMLInputElement;
    let carColor = document.querySelector('.update-color') as HTMLInputElement;

    let updateBtns = document.querySelectorAll('.update-btn') as NodeListOf<HTMLButtonElement>;

    updateBtns.forEach((el) => {
        el.addEventListener('click', () => {
            carName.disabled = false;
            carColor.disabled = false;
            carColor.value = '#ffffff';
            updateCarBtn.disabled = false;
            carId = Number(el.name);
        });
    });
    updateCarBtn.addEventListener('click', () => {
        if (carName.value) {
            console.log(carId);
            garage.updateCar(carId, carName.value, carColor.value);
            showCar();
            carName.disabled = true;
            carName.value = '';
            carColor.disabled = true;
            carColor.value = '#808080';
            updateCarBtn.disabled = true;
        }
    });
}
