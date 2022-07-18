import { Car, Cart } from '../types/types';
import './cards.css';

 let cardsBlock = document.querySelector('.cards-block') as HTMLDivElement;

export function showCards(array: Car[]) {
    cardsBlock.innerHTML = ''
    if(array.length == 0){
        cardsBlock.innerHTML = 'Items not found'
    }
    for (let i = 0; i < array.length; i++) {
        let card = document.createElement('div') as HTMLDivElement;
        let cardImg = document.createElement('img') as HTMLImageElement;
        let cardDesc = document.createElement('div') as HTMLDivElement;
        let cardTitle = document.createElement('h2') as HTMLHeadingElement;

        let firstColumn = document.createElement('ul') as HTMLUListElement;
        let secondColumn = document.createElement('ul') as HTMLUListElement;

        let cardBrand = document.createElement('li') as HTMLLIElement;
        let cardPopularity = document.createElement('li') as HTMLLIElement;
        let cardColor = document.createElement('li') as HTMLLIElement;
        let cardQuantity = document.createElement('li') as HTMLLIElement;
        let cardPrice = document.createElement('li') as HTMLLIElement;
        let cardType = document.createElement('li') as HTMLLIElement;

        let addToCart = document.createElement('button') as HTMLButtonElement;

        cardImg.className = `card-img ${array[i].cssClass}`;
        card.className = 'card';
        cardTitle.className = 'card-title';
        cardDesc.className = 'card-desc';
        firstColumn.className = 'card-list';
        secondColumn.className = 'card-list';
        cardBrand.className = 'card-list-item card-brand';
        cardPrice.className = 'card-list-item card-price';
        cardPopularity.className = 'card-list-item card-popular';
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
        firstColumn.append(cardPopularity);
        secondColumn.append(cardType);
        secondColumn.append(cardColor);
        secondColumn.append(cardQuantity);

        cardTitle.innerHTML = `${array[i].brand} ${array[i].model}`;
        cardBrand.innerHTML = `Brand: ${array[i].brand}<img class="logo"></img>`;
        cardPrice.innerHTML = `Price: ${array[i].price}$`;
        cardPopularity.innerHTML = `Popularity: ${array[i].popularity}`;
        cardQuantity.innerHTML = `Quantity In Stock: ${array[i].quantityInStock}`;
        cardColor.innerHTML = `Color: ${array[i].color}`;
        cardType.innerHTML = `Type: ${array[i].type}`;
        addToCart.innerHTML = 'Add To Cart';

        let cartCount = document.querySelector('.cart-count') as HTMLParagraphElement;
        let cart = new Cart();

        if (localStorage.cart) {
            if (localStorage.cart.includes(array[i].cssClass)) {
                addToCart.className = 'add-to-cart active-btn';
                cart.putToCart(addToCart, cartCount);
            }
        }

        addToCart.addEventListener('click', () => {
            addToCart.classList.toggle('active-btn');
            if (addToCart.className == 'add-to-cart active-btn') {
                cart.putToCart(addToCart, cartCount);
                if (!localStorage.cart) {
                    localStorage.setItem('cart', `${array[i].cssClass}`);
                } else {
                    localStorage.cart += ` ${array[i].cssClass}`;
                }
            } else {
                cart.removeFromCart(addToCart, cartCount);
                if (localStorage.cart) {
                    localStorage.cart = localStorage.cart.replace(array[i].cssClass, '');
                }
            }
        });
    }
}
