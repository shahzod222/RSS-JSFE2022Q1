import { winnersBlock } from '../others/renderHtml';
import { showWinners } from './showWinners';

export const nextBtn = document.createElement('button');
export const winnersPageNumber = document.createElement('p');
export const prevBtn = document.createElement('button');

export function renderWinnersPagination() {
    const pagination = document.createElement('div');

    pagination.className = 'pagination';
    winnersPageNumber.className = 'pag-num';
    prevBtn.className = 'pag-prev-btn';
    nextBtn.className = 'pag-next-btn';

    winnersPageNumber.innerHTML = '1';
    prevBtn.innerHTML = '<';
    nextBtn.innerHTML = '>';

    pagination.append(prevBtn);
    pagination.append(winnersPageNumber);
    pagination.append(nextBtn);

    winnersBlock.append(pagination);
    winnersPagination();
}

function winnersPagination() {
    nextBtn.addEventListener('click', () => {
        winnersPageNumber.innerHTML = `${Number(winnersPageNumber.innerHTML) + 1}`;
        showWinners();
    });

    prevBtn.addEventListener('click', () => {
        winnersPageNumber.innerHTML = `${Number(winnersPageNumber.innerHTML) - 1}`;
        showWinners();
    });
}
