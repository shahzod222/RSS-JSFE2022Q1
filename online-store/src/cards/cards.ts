import { allCars } from '../types/cars';
import './cards.css';

export function showCards() {
    let cardsBlock = document.querySelector('.cards-block') as HTMLDivElement;
    for (let i = 0; i < allCars.length; i++) {
        let card = document.createElement('div') as HTMLDivElement;
        let cardImg = document.createElement('img') as HTMLImageElement;
        let cardDesc = document.createElement('div') as HTMLDivElement;
        let cardTitle = document.createElement('h2') as HTMLHeadingElement;

        let firstColumn = document.createElement('ul') as HTMLUListElement;
        let secondColumn = document.createElement('ul') as HTMLUListElement;

        let cardBrand = document.createElement('li') as HTMLLIElement;
        let cardDate = document.createElement('li') as HTMLLIElement;
        let cardColor = document.createElement('li') as HTMLLIElement;
        let cardQuantity = document.createElement('li') as HTMLLIElement;
        let cardPrice = document.createElement('li') as HTMLLIElement;
        let cardType = document.createElement('li') as HTMLLIElement;

        let addToCart = document.createElement('button') as HTMLButtonElement;

        cardImg.className = `card-img ${allCars[i].cssClass}`;
        card.className = 'card';
        cardTitle.className = 'card-title';
        cardDesc.className = 'card-desc';
        firstColumn.className = 'card-list';
        secondColumn.className = 'card-list';
        cardBrand.className = 'card-list-item card-brand';
        cardPrice.className = 'card-list-item card-price';
        cardDate.className = 'card-list-item card-date';
        cardColor.className = 'card-list-item card-color';
        cardQuantity.className = 'card-list-item card-quantity';
        cardType.className = 'card-list-item card-type';
        addToCart.className = 'add-to-cart';

        cardsBlock.append(card);
        card.append(cardImg);
        card.append(cardTitle);
        card.append(cardDesc);
        cardDesc.append(firstColumn);
        cardDesc.append(secondColumn);
        cardDesc.append(addToCart);
        firstColumn.append(cardBrand);
        firstColumn.append(cardPrice);
        firstColumn.append(cardDate);
        secondColumn.append(cardType);
        secondColumn.append(cardColor);
        secondColumn.append(cardQuantity);

        cardTitle.innerHTML = `${allCars[i].brand} ${allCars[i].model}`;
        cardBrand.innerHTML = `Brand: ${allCars[i].brand}<img class="logo"></img>`;
        cardPrice.innerHTML = `Price: ${allCars[i].price}`;
        cardDate.innerHTML = `Release Year: ${allCars[i].releaseYear}`;
        cardQuantity.innerHTML = `Quantity In Stock: ${allCars[i].quantityInStock}`;
        cardColor.innerHTML = `Color: ${allCars[i].color}`;
        cardType.innerHTML = `Type: ${allCars[i].type}`;
        addToCart.innerHTML = 'Add To Cart';

        let cartCount = document.querySelector('.cart-count') as HTMLParagraphElement;

        if (localStorage.cart) {
            if (localStorage.cart.includes(allCars[i].cssClass)) {
                addToCart.className = 'add-to-cart active-btn';
                addingToCart(addToCart, cartCount);
            }
        }

        addToCart.addEventListener('click', () => {
            addToCart.classList.toggle('active-btn');
            if (addToCart.className == 'add-to-cart active-btn') {
                addingToCart(addToCart, cartCount);
                if (!localStorage.cart) {
                    localStorage.setItem('cart', allCars[i].cssClass);
                } else {
                    localStorage.cart += ` ${allCars[i].cssClass}`;
                }
            } else {
                removingFromCart(addToCart, cartCount);
                if (localStorage.cart) {
                    localStorage.cart = localStorage.cart.replace(allCars[i].cssClass, '');
                }
            }
        });
    }
}
function addingToCart(el: HTMLButtonElement, countEl: HTMLParagraphElement) {
    countEl.innerHTML = `${Number(countEl.innerHTML) + 1}`;
    el.innerHTML = 'Added To Cart';
}
function removingFromCart(el: HTMLButtonElement, countEl: HTMLParagraphElement) {
    countEl.innerHTML = `${Number(countEl.innerHTML) - 1}`;
    el.innerHTML = 'Add To Cart';
}
