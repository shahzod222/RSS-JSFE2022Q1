import './styles.css';
import './cards/cards';
import { showCards } from './cards/cards';
import { allCars } from './types/cars';
import { carTypes } from './filters/typeFilters';
import { carColors } from './filters/colorFilters';
import { carPopularity } from './filters/popularityFilter';

document.body.onload = function () {
    showCards(allCars);
    carTypes();
    carColors();
    carPopularity();
};
