import { showWinners } from '../getCars&Winners/showWinners';
import { getSortOptions } from '../getCars&Winners/sortWinners';

export function showHide() {
    const garageBtn = document.querySelector('.garage-view') as HTMLButtonElement;
    const winnersBtn = document.querySelector('.winners-view') as HTMLButtonElement;
    const garageBlock = document.querySelector('.garage') as HTMLDivElement;
    const winnersBlock = document.querySelector('.winners') as HTMLDivElement;

    garageBtn.addEventListener('click', () => hideBlock(garageBlock, winnersBlock));
    winnersBtn.addEventListener('click', () => {
        hideBlock(winnersBlock, garageBlock);
        const sort = document.getElementsByTagName('select')[0];
        if (sort) {
            if (sort.value !== 'Sort by:') {
                const [sortType, sortOrder] = getSortOptions(sort.value);
                showWinners(sortType, sortOrder);
            }
        } else {
            showWinners();
        }
    });

    function hideBlock(showingEl: HTMLDivElement, hidingEl: HTMLDivElement) {
        showingEl.classList.remove('hidden');
        hidingEl.classList.add('hidden');
    }
}
