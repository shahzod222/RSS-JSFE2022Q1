import { pageNumber } from '../others/renderHtml';
import { garage, ICars } from '../types/types';
import { getButton, start, stopRace } from './startStop';

export function race() {
    let startBtn = document.querySelector('.start-race') as HTMLButtonElement;
    let resetBtn = document.querySelector('.reset-race') as HTMLButtonElement;
    resetBtn.disabled = true;

    startBtn.addEventListener('click', async () => {
        startBtn.disabled = true;
        resetBtn.disabled = false;

        let res: Response = await garage.getLimitedCars(Number(pageNumber.innerHTML));
        let cars = (await res.json()) as ICars[];
        cars.forEach((el) => {
            let ABtn = getButton(
                document.querySelectorAll('.car-start') as NodeListOf<HTMLButtonElement>,
                String(el.id)
            );
            let stopBtns = document.querySelectorAll('.car-stop') as NodeListOf<HTMLButtonElement>;

            start(ABtn, String(el.id), stopBtns, startBtn);
        });
    });
    resetBtn.addEventListener('click', async () => {
        resetBtn.disabled = true;
        startBtn.disabled = false;
        let res: Response = await garage.getLimitedCars(Number(pageNumber.innerHTML));
        let cars = (await res.json()) as ICars[];
        cars.forEach((el) => {
            let startBtns = document.querySelectorAll('.car-start') as NodeListOf<HTMLButtonElement>;
            let stopBtn = getButton(
                document.querySelectorAll('.car-stop') as NodeListOf<HTMLButtonElement>,
                String(el.id)
            );
            stopRace(stopBtn, startBtns, String(el.id));
        });
    });
}
