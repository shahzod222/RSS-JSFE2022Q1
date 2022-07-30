import { addNewCar } from '../getCars&Winners/addCar';
import { generate100Cars } from '../getCars&Winners/generate100Cars';
import { pagination } from '../getCars&Winners/pagination';
import { race } from '../getCars&Winners/race';
import { showCar } from '../getCars&Winners/showCar';
import { showHide } from '../views/view';

export let cars = document.createElement('div');
export let garageLength = document.createElement('p');
export let pageNumber = document.createElement('p');
export let prevPage = document.createElement('button');
export let nextPage = document.createElement('button');
export let winnersBlock = document.createElement('div');

export async function renderHtml() {
    let garageBtn = document.createElement('button');
    let winnersBtn = document.createElement('button');
    let generateBtn = document.createElement('button');

    let garageBlock = document.createElement('div');
    let raceBtns = document.createElement('div');

    garageBtn.className = 'garage-view';
    winnersBtn.className = 'winners-view';
    winnersBlock.className = 'winners hidden';
    garageBlock.className = 'garage';
    raceBtns.className = 'race-btns';
    cars.className = 'cars';
    generateBtn.className = 'gen-cars';
    pageNumber.className = 'page-num';
    prevPage.className = 'prev-btn';
    nextPage.className = 'next-btn';

    garageBtn.innerHTML = 'Garage';
    winnersBtn.innerHTML = 'Winners';
    pageNumber.innerHTML = '1';
    generateBtn.innerHTML = 'Generate 100 Cars';
    prevPage.innerHTML = 'Previos';
    nextPage.innerHTML = 'Next';

    for (let i = 0; i < 2; i++) {
        let form = document.createElement('form');
        let inputText = document.createElement('input');
        let inputColor = document.createElement('input');
        let submitBtn = document.createElement('button');
        let raceBtn = document.createElement('button');

        form.action = '#';
        inputText.type = 'text';
        inputColor.type = 'color';
        submitBtn.type = 'submit';

        inputText.required = true;

        if (i === 0) {
            inputText.className = 'name';
            inputColor.className = 'color';
            submitBtn.className = 'add-car';
            raceBtn.className = 'start-race';

            raceBtn.innerHTML = 'Start Race';
            submitBtn.innerHTML = 'Add New Car';
            inputColor.value = '#ffffff';
        } else {
            inputText.className = 'update-name';
            inputColor.className = 'update-color';
            submitBtn.className = 'update-car';
            raceBtn.className = 'reset-race';

            raceBtn.innerHTML = 'Reset Race';
            submitBtn.innerHTML = 'Update Car';
            inputColor.value = '#808080';
            inputColor.disabled = true;
            inputText.disabled = true;
            submitBtn.disabled = true;
        }
        garageBlock.append(form);
        form.append(inputText);
        form.append(inputColor);
        form.append(submitBtn);
        raceBtns.append(raceBtn);
    }

    garageBlock.append(raceBtns);
    garageBlock.append(generateBtn);
    garageBlock.append(garageLength);
    garageBlock.append(pageNumber);
    garageBlock.append(cars);
    garageBlock.append(prevPage);
    garageBlock.append(nextPage);

    document.body.append(garageBtn);
    document.body.append(winnersBtn);
    document.body.append(garageBlock);
    document.body.append(winnersBlock);

    showHide();
    addNewCar();
    race();
    generate100Cars();
    showCar();
    pagination();
}
