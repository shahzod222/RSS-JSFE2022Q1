import { showCards } from '../cards/cards';
import { allCars } from '../types/cars';
import { Car } from '../types/types';

export let sortedArr: Car[] = [];
export let allTypes = new Set();

export function sortByType(type: string, value: string, showHtml: boolean): Car[] {
    allTypes.add(type);
    if (showHtml) {
        if (allTypes.size == 1) {
            for (let i = 0; i < allCars.length; i++) {
                let currentObj = allCars[i] as Car;
                if (currentObj[type as keyof typeof currentObj] == value && type !== 'popularity') {
                    sortedArr.push(allCars[i]);
                }
                if (type == 'popularity' && currentObj[type as keyof typeof currentObj] == 'Yes') {
                    sortedArr.push(allCars[i]);
                }
            }
        } else {
            for (let i = 0; i < sortedArr.length; i++) {
                let currentObj = sortedArr[i] as Car;
                if (currentObj[type as keyof typeof currentObj] !== value && type !== 'popularity') {
                    sortedArr.splice(i, 1);
                    i--;
                } else if (type == 'popularity' && currentObj[type as keyof typeof currentObj] !== 'Yes') {
                    sortedArr.splice(i, 1);
                    i--;
                }
            }
        }
        return sortedArr;
    } else {
        if (allTypes.size == 1) {
            for (let i = 0; i < sortedArr.length; i++) {
                let currentObj = sortedArr[i] as Car;
                if (currentObj[type as keyof typeof currentObj] == value && type !== 'popularity') {
                    sortedArr.splice(i, 1);
                    i--;
                } else if (type == 'popularity') {
                    sortedArr = [];
                    showCards(allCars);
                }
            }
        }

        return sortedArr;
    }
}
