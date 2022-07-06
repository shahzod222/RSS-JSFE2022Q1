interface ICar {
    model: string;
    price: string;
    releaseYear: number;
    quantityInStock: number;
    cssClass: string;
    color: string;
    type: string;
}
export class Car implements ICar {
    model: string;
    brand: string;
    price: string;
    releaseYear: number;
    quantityInStock: number;
    cssClass: string;
    color: string;
    type: string;
    constructor(
        model: string,
        price: string,
        releaseYear: number,
        quantityInStock: number,
        cssClass: string,
        color: string,
        type: string
    ) {
        this.model = model;
        this.brand = 'BMW';
        this.price = price;
        this.releaseYear = releaseYear;
        this.quantityInStock = quantityInStock;
        this.cssClass = cssClass;
        this.color = color;
        this.type = type;
    }
}
