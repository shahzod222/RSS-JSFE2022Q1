import { showWinners, winnersInfo } from './showWinners';

const selectOption = document.createElement('select');

for (let i = 0; i < 5; i++) {
    const option = document.createElement('option');
    if (i === 0) {
        option.innerHTML = 'Sort by:';
        option.disabled = true;
        option.selected = true
    }
    if (i === 1) option.innerHTML = 'Wins, ASC';
    if (i === 2) option.innerHTML = 'Wins, DESC';
    if (i === 3) option.innerHTML = 'Time, ASC';
    if (i === 4) option.innerHTML = 'Time, DESC';

    selectOption.append(option);
}

winnersInfo.append(selectOption);

selectOption.addEventListener('change', () => {
    const [sortType, sortOrder] = getSortOptions(selectOption.value);
    showWinners(sortType, sortOrder);
});

export function getSortOptions(value: string) {
    const arr = value.split(', ');
    const sortType = arr[0].toLowerCase();
    const sortOrder = arr[1];
    return [sortType, sortOrder];
}
