import { garage, ICars, IWinner, winners } from '../types/types';
import '../css/winners.css';
import { winnersBlock } from '../others/renderHtml';
import { svg } from '../others/svgIcons';
import { nextBtn, prevBtn, winnersPageNumber } from './winnersPagination';

const winnersContent = document.createElement('div');
const table = document.createElement('table');
const tBody = document.createElement('tbody');
const winnersLength = document.createElement('p');
const tHeader = document.createElement('thead');
export const winnersInfo = document.createElement('div');

winnersInfo.className = 'winners-info';

export async function showWinners(sortType?: string, sortOrder?: string) {
    let res;
    if (sortType && sortOrder) {
        res = await winners.getLimitedWinners(Number(winnersPageNumber.innerHTML), sortType, sortOrder);
    } else {
        res = await winners.getLimitedWinners(Number(winnersPageNumber.innerHTML));
    }
    const pagedWinners = (await res.json()) as IWinner[];

    const res2 = await winners.getAllWiners();
    const allWinners = (await res2.json()) as IWinner[];

    checkPagination(allWinners.length);

    tHeader.innerHTML = '';
    tBody.innerHTML = '';
    winnersLength.innerHTML = `Winners: ${allWinners.length}`;

    winnersContent.className = 'winners-content';
    winnersLength.className = 'length';

    winnersInfo.append(winnersLength);
    winnersContent.append(winnersInfo);
    const tableHeaders = document.createElement('tr');

    for (let i = 0; i < 5; i++) {
        const tableHeader = document.createElement('th');
        if (i === 0) tableHeader.innerHTML = '№';
        if (i === 1) tableHeader.innerHTML = 'Image';
        if (i === 2) tableHeader.innerHTML = 'Name';
        if (i === 3) tableHeader.innerHTML = 'Wins';
        if (i === 4) tableHeader.innerHTML = 'Time';

        tableHeaders.append(tableHeader);
    }
    tHeader.append(tableHeaders);
    table.append(tHeader);
    for (let i = 0; i < pagedWinners.length; i++) {
        await showWinnerInHtml(i + 1, pagedWinners[i].id, pagedWinners[i].wins, pagedWinners[i].time);
    }
    table.append(tBody);
    winnersContent.append(table);
    winnersBlock.append(winnersContent);
}

async function showWinnerInHtml(position: number, id: number, wins: number, time: number) {
    const resCarName = await garage.getCar(id);
    const car = (await resCarName.json()) as ICars;

    const carName = car.name;
    const carColor = car.color;

    const row = document.createElement('tr');

    for (let j = 0; j < 5; j++) {
        const rowContent = document.createElement('td');
        if (j === 0) rowContent.innerHTML = String(position);
        if (j === 1) rowContent.innerHTML = svg(carColor);
        if (j === 2) rowContent.innerHTML = carName;
        if (j === 3) rowContent.innerHTML = String(wins);
        if (j === 4) rowContent.innerHTML = String(time);

        row.append(rowContent);
    }

    tBody.append(row);
}

function checkPagination(allWinnnersLength: number) {
    if (Number(winnersPageNumber.innerHTML) * 10 >= allWinnnersLength) {
        nextBtn.disabled = true;
    } else {
        nextBtn.disabled = false;
    }
    if (Number(winnersPageNumber.innerHTML) === 1) {
        prevBtn.disabled = true;
    } else {
        prevBtn.disabled = false;
    }
}
