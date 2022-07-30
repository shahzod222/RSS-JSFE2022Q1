import { garage } from '../types/types';
import { showCar } from './showCar';

export function addNewCar() {
    let addCar = document.querySelector('.add-car') as HTMLButtonElement;
    let carName = document.querySelector('.name') as HTMLInputElement;
    let carColor = document.querySelector('.color') as HTMLInputElement;

    addCar.addEventListener('click', (e) => {
        if (carName.value) {
            garage.addCar(carName.value, carColor.value);
            showCar();
            e.preventDefault();
            carName.value = '';
            carColor.value = '#ffffff';
        }
    });
}
