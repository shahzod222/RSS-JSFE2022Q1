import { showWinners } from '../getCars&Winners/showWinners';

export function showHide() {
    let garageBtn = document.querySelector('.garage-view') as HTMLButtonElement;
    let winnersBtn = document.querySelector('.winners-view') as HTMLButtonElement;
    let garageBlock = document.querySelector('.garage') as HTMLDivElement;
    let winnersBlock = document.querySelector('.winners') as HTMLDivElement;

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
