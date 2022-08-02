import { pageNumber } from '../others/renderHtml';
import { garage, ICars } from '../types/types';
import { getButton, start, stopRace } from './startStop';

export function race() {
    const startBtn = document.querySelector('.start-race') as HTMLButtonElement;
    const resetBtn = document.querySelector('.reset-race') as HTMLButtonElement;
    resetBtn.disabled = true;

    startBtn.addEventListener('click', async () => {
        startBtn.disabled = true;
        resetBtn.disabled = false;

        const res: Response = await garage.getLimitedCars(Number(pageNumber.innerHTML));
        const cars = (await res.json()) as ICars[];
        cars.forEach((el) => {
            const ABtn = getButton(
                document.querySelectorAll('.car-start') as NodeListOf<HTMLButtonElement>,
                String(el.id)
            );
            const stopBtns = document.querySelectorAll('.car-stop') as NodeListOf<HTMLButtonElement>;

            start(ABtn, String(el.id), stopBtns, startBtn, resetBtn);
        });
    });
    resetBtn.addEventListener('click', async () => {
        resetBtn.disabled = true;
        startBtn.disabled = false;
        const res: Response = await garage.getLimitedCars(Number(pageNumber.innerHTML));
        const cars = (await res.json()) as ICars[];
        cars.forEach((el) => {
            const startBtns = document.querySelectorAll('.car-start') as NodeListOf<HTMLButtonElement>;
            const stopBtn = getButton(
                document.querySelectorAll('.car-stop') as NodeListOf<HTMLButtonElement>,
                String(el.id)
            );
            stopRace(stopBtn, String(el.id), startBtns);
        });
    });
}
