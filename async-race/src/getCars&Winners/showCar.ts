import { garage, ICars } from '../types/types';
import { deleteCar } from './deleteCar';
import { finishIcon, svg } from '../others/svgIcons';
import { startCar, stopCar } from './startStop';
import { cars, garageLength, nextPage, pageNumber, prevPage } from '../others/renderHtml';
import { updateCar } from './updateCar';
import '../css/cars.css';

export async function showCar() {
    const resAllCars = await garage.getAllCars();
    const allCars = (await resAllCars.json()) as ICars[];

    const resPagedCars = await garage.getLimitedCars(Number(pageNumber.innerHTML));
    const data = (await resPagedCars.json()) as ICars[];

    cars.innerHTML = '';
    garageLength.innerHTML = `Garage: ${String(allCars.length)}`;

    for (let i = 0; i < data.length; i++) {
        showCarInHtml(data[i].name, data[i].color, data[i].id);
    }

    checkPagBtns(allCars.length);
    startCar();
    stopCar();
    updateCar();
}

async function showCarInHtml(model: string, color: string, id: number) {
    let carBlock = document.createElement('div');
    let carInfo = document.createElement('div');
    let startStop = document.createElement('div');
    let raceRoad = document.createElement('div');
    let carRoad = document.createElement('div');
    let car = document.createElement('div');

    let deleteBtn = document.createElement('button');
    let startCar = document.createElement('button');
    let stopCar = document.createElement('button');
    let updateBtn = document.createElement('button');

    let carName = document.createElement('p');
    let carImg = document.createElement('span');
    let road = document.createElement('hr');
    let finishFlag = document.createElement('span');
    let lWheel = document.createElement('span');
    let rWheel = document.createElement('span');

    carName.innerHTML = model;
    deleteBtn.innerHTML = 'Remove Car';
    startCar.innerHTML = 'A';
    stopCar.innerHTML = 'B';
    carImg.innerHTML = svg(color);
    finishFlag.innerHTML = finishIcon;
    updateBtn.innerHTML = 'Update Car';

    deleteBtn.name = String(id);
    startCar.name = String(id);
    stopCar.name = String(id);
    car.id = String(id);
    carImg.id = `car-${String(id)}`;
    updateBtn.name = String(id);
    carName.id = `name-${String(id)}`;

    carBlock.className = 'car-block';
    carInfo.className = 'car-info';
    deleteBtn.className = 'remove-car';
    carName.className = 'car-name';
    carImg.className = `car-icon ${model}`;
    road.className = 'road';
    startCar.className = 'car-start';
    stopCar.className = 'car-stop';
    carRoad.className = 'car-road';
    startStop.className = 'start-stop';
    raceRoad.className = 'race-road';
    finishFlag.className = 'finish-icon';
    lWheel.className = 'l-wheel';
    rWheel.className = 'r-wheel';
    updateBtn.className = 'update-btn';
    car.className = 'car-model';

    stopCar.disabled = true;

    carBlock.append(carInfo);
    carBlock.append(carRoad);
    carBlock.append(road);

    carInfo.append(updateBtn);
    carInfo.append(deleteBtn);
    carInfo.append(carName);

    carRoad.append(startStop);
    carRoad.append(raceRoad);

    startStop.append(startCar);
    startStop.append(stopCar);

    raceRoad.append(car);
    raceRoad.append(finishFlag);

    car.append(carImg);

    carImg.append(lWheel);
    carImg.append(rWheel);

    cars.append(carBlock);

    deleteCar();
}

function checkPagBtns(allCarsLength: number) {
    if (Number(pageNumber.innerHTML) * 4 >= allCarsLength) {
        nextPage.disabled = true;
    } else {
        nextPage.disabled = false;
    }
    if (Number(pageNumber.innerHTML) === 1) {
        prevPage.disabled = true;
    } else {
        prevPage.disabled = false;
    }
}
