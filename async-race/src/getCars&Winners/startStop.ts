import { enigine, IEngineStart, IWinner, winners } from '../types/types';
import { showModal } from './modalWindow';
import { showWinners } from './showWinners';

export function startCar() {
    const startBtns = document.querySelectorAll('.car-start') as NodeListOf<HTMLButtonElement>;
    const stopBtns = document.querySelectorAll('.car-stop') as NodeListOf<HTMLButtonElement>;

    startBtns.forEach((el) => {
        el.addEventListener('click', async () => {
            start(el, el.name, stopBtns);
        });
    });
}

export function stopCar() {
    const startBtns = document.querySelectorAll('.car-start') as NodeListOf<HTMLButtonElement>;
    const stopBtns = document.querySelectorAll('.car-stop') as NodeListOf<HTMLButtonElement>;

    stopBtns.forEach((el) => {
        el.addEventListener('click', () => {
            stopRace(el, el.name, startBtns);
        });
    });
}

let winner = 0;

export function stopRace(el: HTMLButtonElement, id: string, startBtns: NodeListOf<HTMLButtonElement>) {
    const car = document.getElementById(id) as HTMLDivElement;
    const icon = car.querySelector(`#car-${id}`) as HTMLSpanElement;
    winner = 0;
    const smoke = icon.querySelector('.car-smoke') as HTMLSpanElement;

    smoke.style.display = 'none';

    getButton(startBtns, id).disabled = false;

    el.disabled = true;

    car.style.left = '0';
    enigine.stop(Number(id));
}

export async function start(
    el: HTMLButtonElement,
    id: string,
    stopBtns: NodeListOf<HTMLButtonElement>,
    startBtn?: HTMLButtonElement,
    resetBtn?: HTMLButtonElement
) {
    const [car, icon, parent, stopBtn, lWheel, rWheel, smoke] = getElements(id, stopBtns);
    stopBtn.disabled = false;
    el.disabled = true;

    const start = (await enigine.start(Number(id))) as unknown as IEngineStart;
    const time = start.distance / start.velocity;

    const [animation, elPosition, lW, rW] = animations(car, lWheel, rWheel, time, parent);

    let resetClicked = false;

    resetBtn?.addEventListener('click', () => {
        resetOrStop(lW, rW, animation, elPosition, smoke, stopBtn);
        resetClicked = true;
    });

    stopBtn.addEventListener('click', () => {
        resetOrStop(lW, rW, animation, elPosition, smoke, stopBtn);
        resetClicked = true;
    });

    const driveStatus = await enigine.drive(Number(id));
    if (!resetClicked) {
        if (driveStatus === 500) {
            status500(lW, rW, animation, car, elPosition, smoke);
            if (startBtn) startBtn.disabled = true;
        } else if (driveStatus === 200) {
            enigine.stop(Number(id));
            if (startBtn) {
                stopBtn.disabled = false;
                el.disabled = true;
            }
            if (!winner && startBtn) status200(car, time);
        }
    }
}

export function getButton(b: NodeListOf<HTMLButtonElement>, n: string) {
    const btn = [...b].find((el) => el.name === n) as HTMLButtonElement;
    return btn;
}

function animations(
    car: HTMLDivElement,
    lWheel: HTMLSpanElement,
    rWheel: HTMLSpanElement,
    time: number,
    parent: HTMLDivElement
): [Animation, ReturnType<typeof setTimeout>, Animation, Animation] {
    const animation = car.animate(
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

    const lW = lWheel.animate([{ transform: 'rotate(0deg)' }, { transform: 'rotate(360deg)' }], { duration: time });
    const rW = rWheel.animate([{ transform: 'rotate(0deg)' }, { transform: 'rotate(360deg)' }], { duration: time });

    const elPosition = setTimeout(() => {
        car.style.left = `${parent.clientWidth - 163}px`;
    }, time);
    return [animation, elPosition, lW, rW];
}

function status500(
    lW: Animation,
    rW: Animation,
    animation: Animation,
    car: HTMLDivElement,
    elPosition: ReturnType<typeof setTimeout>,
    smoke: HTMLSpanElement
) {
    lW.cancel();
    rW.cancel();
    animation.pause();
    car.style.left = getComputedStyle(car).left;
    animation.cancel();
    clearTimeout(elPosition);
    smoke.style.display = 'block';
}

async function status200(car: HTMLDivElement, time: number) {
    winner = Number(car.id);
    const add = winners.addWinner(winner, Math.round(time / 1000));
    showModal(winner, Math.round(time / 1000));

    if ((await add).status === 500) {
        const get = (await winners.getWinner(winner)) as IWinner;
        const winCount = get.wins + 1;
        const bestTime = Math.round(time / 1000) > get.time ? get.time : Math.round(time / 1000);
        winners.updateWinner(winner, winCount, bestTime);
    }

    showWinners();
}

function resetOrStop(
    lW: Animation,
    rW: Animation,
    animation: Animation,
    elPosition: ReturnType<typeof setTimeout>,
    smoke: HTMLSpanElement,
    stopBtn: HTMLButtonElement
) {
    animation.cancel();
    clearTimeout(elPosition);
    lW.cancel();
    rW.cancel();
    smoke.style.display = 'none';
    stopBtn.disabled = true;
}

function getElements(
    id: string,
    stopBtns: NodeListOf<HTMLButtonElement>
): [
    HTMLDivElement,
    HTMLSpanElement,
    HTMLDivElement,
    HTMLButtonElement,
    HTMLSpanElement,
    HTMLSpanElement,
    HTMLSpanElement
] {
    const car = document.getElementById(id) as HTMLDivElement;
    const icon = car.querySelector(`#car-${id}`) as HTMLSpanElement;
    const parent = document.querySelector('.race-road') as HTMLDivElement;
    const stopBtn = getButton(stopBtns, id);
    const lWheel = icon.querySelector('.l-wheel') as HTMLSpanElement;
    const rWheel = icon.querySelector('.r-wheel') as HTMLSpanElement;
    const smoke = icon.querySelector('.car-smoke') as HTMLSpanElement;
    return [car, icon, parent, stopBtn, lWheel, rWheel, smoke];
}
