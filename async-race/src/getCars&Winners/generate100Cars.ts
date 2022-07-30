import { garage } from '../types/types';
import { showCar } from './showCar';

interface IRandomCar extends Promise<Response> {
    make: string;
    model: string;
}

export function generate100Cars() {
    let genBtn = document.querySelector('.gen-cars') as HTMLButtonElement;
    genBtn.addEventListener('click', () => {
        generateCar();
    });
}

async function generateCar() {
    let res = await fetch('https://private-161df-carsapi1.apiary-mock.com/cars');
    let cars = (await res.json()) as unknown as IRandomCar[];
    for (let i = 0; i < 100; i++) {
        let randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        let randomNumber = Math.floor(Math.random() * cars.length);
        let name = `${capFirstLetter(cars[randomNumber].make)} ${capFirstLetter(cars[randomNumber].model)}`;
        garage.addCar(name, randomColor);
        showCar();
    }
}

function capFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
