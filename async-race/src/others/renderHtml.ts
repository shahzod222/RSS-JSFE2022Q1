import { addNewCar } from '../getCars&Winners/addCar';
import { generate100Cars } from '../getCars&Winners/generate100Cars';
import { pagination } from '../getCars&Winners/pagination';
import { showCar } from '../getCars&Winners/showCar';
import { renderWinnersPagination } from '../getCars&Winners/winnersPagination';
import { showHide } from '../views/view';

export const cars = document.createElement('div');
export const garageLength = document.createElement('p');
export const pageNumber = document.createElement('p');
export const prevPage = document.createElement('button');
export const nextPage = document.createElement('button');
export const winnersBlock = document.createElement('div');
export const startBtn = document.createElement('button');
export const resetBtn = document.createElement('button');

const garageBtn = document.createElement('button');
const winnersBtn = document.createElement('button');
const generateBtn = document.createElement('button');

const garageBlock = document.createElement('div');
const viewBtns = document.createElement('div');
const raceBtns = document.createElement('div');
const paginationBlock = document.createElement('div');
const formBlock = document.createElement('div');
const modalBody = document.createElement('div');
const modalContent = document.createElement('div');

resetBtn.disabled = true;
resetBtn.className = 'reset-race';
startBtn.className = 'start-race';
garageBtn.className = 'garage-view';
winnersBtn.className = 'winners-view';
winnersBlock.className = 'winners hidden';
garageBlock.className = 'garage';
raceBtns.className = 'race-btns';
cars.className = 'cars';
generateBtn.className = 'gen-cars';
pageNumber.className = 'page-num pag-num';
prevPage.className = 'prev-btn pag-prev-btn';
nextPage.className = 'next-btn pag-next-btn';
paginationBlock.className = 'pagination';
garageLength.className = 'garage-length length';
viewBtns.className = 'view-btns';
formBlock.className = 'form-block';
modalBody.className = 'modal-body hidden';
modalContent.className = 'modal-content';

garageBtn.innerHTML = 'Garage';
winnersBtn.innerHTML = 'Winners';
generateBtn.innerHTML = 'Generate 100 Cars';
pageNumber.innerHTML = '1';
prevPage.innerHTML = '<';
nextPage.innerHTML = '>';
startBtn.innerHTML = 'Start Race';
resetBtn.innerHTML = 'Reset Race';

for (let i = 0; i < 2; i++) {
    const form = document.createElement('form');
    const inputText = document.createElement('input');
    const inputColor = document.createElement('input');
    const submitBtn = document.createElement('button');

    form.action = '#';
    inputText.type = 'search';
    inputColor.type = 'color';
    submitBtn.type = 'submit';

    inputText.required = true;

    if (i === 0) {
        inputText.className = 'name';
        inputColor.className = 'color';
        submitBtn.className = 'add-car';

        submitBtn.innerHTML = 'Add New Car';
        inputColor.value = '#ffffff';
    } else {
        inputText.className = 'update-name';
        inputColor.className = 'update-color';
        submitBtn.className = 'update-car';

        submitBtn.innerHTML = 'Update Car';
        inputColor.value = '#efefef';
        inputColor.disabled = true;
        inputText.disabled = true;
        submitBtn.disabled = true;
    }

    form.append(inputText);
    form.append(inputColor);
    form.append(submitBtn);
    formBlock.append(form);
    garageBlock.append(formBlock);
}

paginationBlock.append(prevPage);
paginationBlock.append(pageNumber);
paginationBlock.append(nextPage);

modalBody.append(modalContent);

viewBtns.append(garageBtn);
viewBtns.append(winnersBtn);

raceBtns.append(startBtn);
raceBtns.append(resetBtn);

garageBlock.append(raceBtns);
garageBlock.append(generateBtn);
garageBlock.append(garageLength);
garageBlock.append(cars);
garageBlock.append(paginationBlock);
garageBlock.append(modalBody);

document.body.append(viewBtns);
document.body.append(garageBlock);
document.body.append(winnersBlock);

showHide();
addNewCar();
generate100Cars();
showCar();
pagination();
renderWinnersPagination();
