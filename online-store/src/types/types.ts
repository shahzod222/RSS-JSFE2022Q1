export interface ICar {
    model: string;
    price: number;
    popularity: string;
    quantityInStock: number;
    cssClass: string;
    color: string;
    type: string;
}

export class Car implements ICar {
    model: string;
    brand: string;
    price: number;
    popularity: string;
    quantityInStock: number;
    cssClass: string;
    color: string;
    type: string;
    constructor(
        model: string,
        price: number,
        popularity: string,
        quantityInStock: number,
        cssClass: string,
        color: string,
        type: string
    ) {
        this.model = model;
        this.brand = 'BMW';
        this.price = price;
        this.popularity = popularity;
        this.quantityInStock = quantityInStock;
        this.cssClass = cssClass;
        this.color = color;
        this.type = type;
    }
}

export class Cart {
    putToCart(el: HTMLButtonElement, countEl: HTMLParagraphElement) {
        countEl.innerHTML = `${Number(countEl.innerHTML) + 1}`;
        el.innerHTML = 'Added To Cart';
    }
    removeFromCart(el: HTMLButtonElement, countEl: HTMLParagraphElement) {
        countEl.innerHTML = `${Number(countEl.innerHTML) - 1}`;
        el.innerHTML = 'Add To Cart';
    }
}
