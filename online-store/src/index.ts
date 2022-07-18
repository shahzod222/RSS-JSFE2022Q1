import './styles.css';
import './cards/cards';
import { showCards } from './cards/cards';
import { allCars } from './types/cars';
import '../src/filters/rangeFilters';
import '../src/filters/typeFilters';
import '../src/filters/popularityFilter';
import '../src/filters/sortSearchFilters';
import { sortByName } from './functions/sortByValue';

showCards(sortByName(allCars, 'model'));
