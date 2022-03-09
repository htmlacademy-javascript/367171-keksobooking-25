import data from './data.js';
import { openCardOffer } from './card.js';

const currentData = data.slice(0, 10);

openCardOffer(currentData);
// eslint-disable-next-line no-console
console.log(currentData);
