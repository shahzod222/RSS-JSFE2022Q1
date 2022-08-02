import { garage, ICars } from '../types/types';
import { deleteCar } from './deleteCar';
import { svg } from '../others/svgIcons';
import { startCar, stopCar } from './startStop';
import { cars, garageLength, nextPage, pageNumber, prevPage } from '../others/renderHtml';
import { updateCar } from './updateCar';
import '../css/garage.css';

export async function showCar() {
    const resAllCars = await garage.getAllCars();
    const allCars = (await resAllCars.json()) as ICars[];

    checkPagBtns(allCars.length);

    const resPagedCars = await garage.getLimitedCars(Number(pageNumber.innerHTML));
    const data = (await resPagedCars.json()) as ICars[];

    cars.innerHTML = '';
    garageLength.innerHTML = `Garage: ${String(allCars.length)}`;

    for (let i = 0; i < data.length; i++) {
        showCarInHtml(data[i].name, data[i].color, data[i].id);
    }

    startCar();
    stopCar();
    updateCar();
}

async function showCarInHtml(model: string, color: string, id: number) {
    const [carBlock, carInfo, startStop, raceRoad, carRoad, car] = createDivs(id);
    const [deleteBtn, startCar, stopCar, updateBtn] = createButtons(id);
    const [carName, carImg, road, finishFlag, carSmoke] = createOtherElems(model, color, id);

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
    carImg.append(carSmoke);

    cars.append(carBlock);

    deleteCar();
}

function checkPagBtns(allCarsLength: number) {
    if ((Number(pageNumber.innerHTML) - 1) * 4 === allCarsLength) {
        pageNumber.innerHTML = String(Number(pageNumber.innerHTML) - 1);
    }
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

function createDivs(id: number): HTMLDivElement[] {
    const carBlock = document.createElement('div');
    const carInfo = document.createElement('div');
    const startStop = document.createElement('div');
    const raceRoad = document.createElement('div');
    const carRoad = document.createElement('div');
    const car = document.createElement('div');

    carBlock.className = 'car-block';
    carInfo.className = 'car-info';
    carRoad.className = 'car-road';
    startStop.className = 'start-stop';
    raceRoad.className = 'race-road';
    car.className = 'car-model';
    car.id = String(id);

    return [carBlock, carInfo, startStop, raceRoad, carRoad, car];
}

function createButtons(id: number): HTMLButtonElement[] {
    const deleteBtn = document.createElement('button');
    const startCar = document.createElement('button');
    const stopCar = document.createElement('button');
    const updateBtn = document.createElement('button');

    startCar.className = 'car-start';
    stopCar.className = 'car-stop';
    updateBtn.className = 'update-btn';
    deleteBtn.className = 'remove-car';
    stopCar.disabled = true;

    deleteBtn.innerHTML = 'Remove Car';
    updateBtn.name = String(id);
    startCar.innerHTML = 'A';
    stopCar.innerHTML = 'B';
    updateBtn.innerHTML = 'Update Car';
    deleteBtn.name = String(id);
    startCar.name = String(id);
    stopCar.name = String(id);

    return [deleteBtn, startCar, stopCar, updateBtn];
}

function createOtherElems(
    model: string,
    color: string,
    id: number
): [HTMLParagraphElement, HTMLSpanElement, HTMLHRElement, HTMLSpanElement, HTMLSpanElement] {
    const carName = document.createElement('p');
    const carImg = document.createElement('span');
    const road = document.createElement('hr');
    const finishFlag = document.createElement('span');
    const carSmoke = document.createElement('span');

    carName.className = 'car-name';
    carImg.className = `car-icon ${model}`;
    road.className = 'road';
    finishFlag.className = 'finish-icon';
    carSmoke.className = 'car-smoke';

    carName.innerHTML = model;
    carImg.innerHTML = svg(color);
    carImg.id = `car-${String(id)}`;
    carName.id = `name-${String(id)}`;

    return [carName, carImg, road, finishFlag, carSmoke];
}
