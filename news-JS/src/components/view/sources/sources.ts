/* eslint-disable @typescript-eslint/no-inferrable-types */
import './sources.css';
import { sourceType } from '../appView';
class Sources {
    draw(data: sourceType[]) {
        const fragment: DocumentFragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

        data.forEach((item: sourceType) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLTemplateElement;
            const srcItemName = sourceClone.querySelector('.source__item-name') as NonNullable<HTMLElement>;
            const srcItem = sourceClone.querySelector('.source__item') as NonNullable<HTMLElement>;
            srcItemName.textContent = item.name;
            srcItem.setAttribute('data-source-id', item.id);
            fragment.append(sourceClone);
        });
        const sources = document.querySelector('.sources') as HTMLDivElement;
        sources.append(fragment);
    }
}

export function showByAlph(sources: sourceType[]) {
    const alphBlock = document.querySelector('.alph-btns') as HTMLDivElement;
    alphBlock.innerHTML = '';
    const alph: string = 'ABCDEFGHILMNPRSTUVWXY';
    for (let i = 0; i < alph.length; i++) {
        const letter: HTMLButtonElement = document.createElement('button');
        alphBlock.append(letter);
        letter.innerHTML = alph[i];
        letter.className = 'letter';
    }
    const allLetters = document.querySelectorAll('.letter') as NodeListOf<Element>;
    allLetters.forEach((e) => {
        e.addEventListener('click', () => {
            const buttonsBlock = document.querySelector('.buttons') as HTMLDivElement;
            buttonsBlock.innerHTML = '';
            const sortedArr = sortArray(sources, e.innerHTML);
            const drawClass = new Sources();
            drawClass.draw(sortedArr);
        });
    });
}
function sortArray(array: sourceType[], letter: string): sourceType[] {
    const res: sourceType[] = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].name[0] == letter) {
            res.push(array[i]);
        }
    }
    return res;
}
export default Sources;
