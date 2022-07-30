import { enigine, IEngineStart, IWinner, winners } from '../types/types';
import { race } from './race';
import { showWinners } from './showWinners';

export function startCar() {
    let startBtns = document.querySelectorAll('.car-start') as NodeListOf<HTMLButtonElement>;
    let stopBtns = document.querySelectorAll('.car-stop') as NodeListOf<HTMLButtonElement>;

    startBtns.forEach((el) => {
        el.addEventListener('click', async () => {
            start(el, el.name, stopBtns);
        });
    });
}

export function stopCar() {
    let startBtns = document.querySelectorAll('.car-start') as NodeListOf<HTMLButtonElement>;
    let stopBtns = document.querySelectorAll('.car-stop') as NodeListOf<HTMLButtonElement>;

    stopBtns.forEach((el) => {
        el.addEventListener('click', () => {
            stopRace(el, startBtns, el.name);
        });
    });
}

let winner = 0;

export function stopRace(el: HTMLButtonElement, startBtns: NodeListOf<HTMLButtonElement>, id: string) {
    let icon = document.getElementById(id) as HTMLSpanElement;
    winner = 0;

    getButton(startBtns, id).disabled = false;
    el.disabled = true;

    icon.style.left = '0';
    enigine.stop(Number(id));
}

export async function start(
    el: HTMLButtonElement,
    id: string,
    stopBtns: NodeListOf<HTMLButtonElement>,
    raceBtn?: HTMLButtonElement
) {
    let car = document.getElementById(id) as HTMLDivElement;
    let icon = car.querySelector(`#car-${id}`) as HTMLSpanElement;
    let parent = document.querySelector('.race-road') as HTMLDivElement;
    let stopBtn = getButton(stopBtns, id);
    let lWheel = icon.querySelector('.l-wheel') as HTMLSpanElement;
    let rWheel = icon.querySelector('.r-wheel') as HTMLSpanElement;

    stopBtn.disabled = false;

    el.disabled = true;

    let start = (await enigine.start(Number(id))) as unknown as IEngineStart;
    let time = start.distance / start.velocity;

    let animation = car.animate(
        [
            {
                left: '0px',
            },
            {
                left: `${parent.clientWidth - 163}px`,
            },
        ],
        {
            duration: time,
        }
    );

    let lW = lWheel.animate([{ transform: 'rotate(0deg)' }, { transform: 'rotate(360deg)' }], { duration: time });
    let rW = rWheel.animate([{ transform: 'rotate(0deg)' }, { transform: 'rotate(360deg)' }], { duration: time });

    let elPosition = setTimeout(() => {
        car.style.left = `${parent.clientWidth - 163}px`;
    }, time);

    let stopClicked = false;
    let resetClicked = false;
    stopBtn.addEventListener('click', () => {
        lW.cancel();
        rW.cancel();
        animation.cancel();
        stopClicked = true;
    });
    let driveStatus = await enigine.drive(Number(id));
    if (driveStatus === 500) {
        lW.cancel();
        rW.cancel();
        animation.pause();
        car.style.left = getComputedStyle(car).left;
        animation.cancel();
        clearTimeout(elPosition);
        if (raceBtn) raceBtn.disabled = true;
    } else if (driveStatus === 200 && !stopClicked) {
        stopBtn.disabled = true;
        el.disabled = false;
        enigine.stop(Number(id));
        if (raceBtn) {
            stopBtn.disabled = false;
            el.disabled = true;
        }
        if (!winner && raceBtn) {
            winner = Number(car.id);
            let add = winners.addWinner(winner, Math.round(time / 1000));
            if ((await add).status === 500) {
                let get = (await winners.getWinner(winner)) as IWinner;
                let winCount = get.wins + 1;
                let bestTime = Math.round(time / 1000) > get.time ? get.time : Math.round(time / 1000);
                winners.updateWinner(winner, winCount, bestTime);
            }
            showWinners();
        }
    }
}

export function getButton(b: NodeListOf<HTMLButtonElement>, n: string) {
    let btn = [...b].find((el) => el.name === n) as HTMLButtonElement;
    return btn;
}
