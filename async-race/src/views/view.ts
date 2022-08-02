import { showWinners } from '../getCars&Winners/showWinners';

export function showHide() {
    const garageBtn = document.querySelector('.garage-view') as HTMLButtonElement;
    const winnersBtn = document.querySelector('.winners-view') as HTMLButtonElement;
    const garageBlock = document.querySelector('.garage') as HTMLDivElement;
    const winnersBlock = document.querySelector('.winners') as HTMLDivElement;

    garageBtn.addEventListener('click', () => hideBlock(garageBlock, winnersBlock));
    winnersBtn.addEventListener('click', () => {
        hideBlock(winnersBlock, garageBlock);
        showWinners();
    });

    function hideBlock(showingEl: HTMLDivElement, hidingEl: HTMLDivElement) {
        showingEl.classList.remove('hidden');
        hidingEl.classList.add('hidden');
    }
}
