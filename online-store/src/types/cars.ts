import { Car } from './types';
import './cars.css';

let car1: Car = new Car('M5', '105,000$', 2016, 3, 'm5', 'Red', 'Sedan');
let car2: Car = new Car('M8', '130,000$', 2019, 4, 'm8', 'Red', 'Sedan');
let car3: Car = new Car('X4 M', '75,000$', 2022, 1, 'x4m', 'Yellow', 'SUV');
let car4: Car = new Car('X6', '70,000$', 2008, 1, 'x6', 'Brown', 'SUV');
let car5: Car = new Car('X7', '140,000$', 2018, 5, 'x7', 'Black', 'SUV');
let car6: Car = new Car('5 Series', '55,000$', 2018, 3, 's5', 'Blue', 'Sedan');
let car7: Car = new Car('8 Series', '90,000$', 2020, 2, 's8', 'Blue', 'Sedan');
let car8: Car = new Car('I4', '60,000$', 2021, 4, 'i4', 'Gray', 'Electric-Car');
let car9: Car = new Car('I7', '120,000$', 2022, 1, 'i7', 'White', 'Electric-Car');
let car10: Car = new Car('IX', '90,000$', 2021, 4, 'ix', 'White', 'Electric-Car');
let car11: Car = new Car('X5 M', '105,000$', 2019, 3, 'x5m', 'Blue', 'SUV');
let car12: Car = new Car('Z4', '55,000$', 2018, 2, 'z4', 'White', 'Sedan');
export let allCars: Car[] = [car1, car2, car3, car4, car5, car6, car7, car8, car9, car10, car11, car12];
