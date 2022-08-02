import { garage } from '../types/types';
import { showCar } from './showCar';

let carId = 0;

export function updateCar() {
    const updateCarBtn = document.querySelector('.update-car') as HTMLButtonElement;
    const carName = document.querySelector('.update-name') as HTMLInputElement;
    const carColor = document.querySelector('.update-color') as HTMLInputElement;

    const updateBtns = document.querySelectorAll('.update-btn') as NodeListOf<HTMLButtonElement>;

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
            garage.updateCar(carId, carName.value, carColor.value);
            showCar();
            carName.disabled = true;
            carName.value = '';
            carColor.disabled = true;
            carColor.value = '#efefef';
            updateCarBtn.disabled = true;
        }
    });
}
