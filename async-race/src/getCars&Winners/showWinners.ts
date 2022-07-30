import { IWinner, winners } from '../types/types';
import '../css/winners.css';
import { winnersBlock } from '../others/renderHtml';

export async function showWinners() {
    const res: Response = await winners.getAllWiners();
    const allWinners = (await res.json()) as IWinner[];
    winnersBlock.innerHTML = '';
    for (let i = 0; i < allWinners.length; i++) {
        showWinnerInHtml(allWinners[i].id, allWinners[i].wins, allWinners[i].time);
    }
}

function showWinnerInHtml(id: number, wins: number, time: number) {
    let carName = (document.querySelector(`.car-name[id="name-${id}"]`) as HTMLParagraphElement).innerHTML;

    let winner = document.createElement('div');

    let car = document.createElement('p');
    let carId = document.createElement('p');
    let winsCount = document.createElement('p');
    let bestTime = document.createElement('p');

    winner.className = 'winner-info';

    car.innerHTML = `Car: ${carName}`;
    carId.innerHTML = `Car ID: ${String(id)}`;
    winsCount.innerHTML = `Wins: ${String(wins)}`;
    bestTime.innerHTML = `Best Time: ${String(time)}`;

    winner.append(car);
    winner.append(carId);
    winner.append(winsCount);
    winner.append(bestTime);

    winnersBlock.append(winner);
}
