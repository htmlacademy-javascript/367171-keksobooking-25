import data from './data.js';
import { openCardOffer } from './card.js';

const currentData = data.slice(0, 10);

// eslint-disable-next-line no-console
openCardOffer(currentData);

console.log(currentData)
