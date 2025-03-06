import { garage, ICars } from '../types/types';

export async function showModal(id: number, time: number) {
    const modalBody = document.querySelector('.modal-body') as HTMLDivElement;
    const modalContent = modalBody.querySelector('.modal-content') as HTMLDivElement;
    const resWinnerName = await garage.getCar(id);
    const winnerName = ((await resWinnerName.json()) as ICars).name;

    modalBody.classList.remove('hidden');

    modalContent.innerHTML = `Winner: ${winnerName}<br>Time: ${time}s`;

    modalBody.addEventListener('click', (event) => {
        if ((event.target as HTMLDivElement).className === 'modal-body') {
            modalBody.classList.add('hidden');
        }
    });
}
