import { OFFER_PHOTO_ALT, OFFER_PHOTO_HEIGHT, OFFER_PHOTO_WIDTH } from './const.js';
import { addClassName, createDOMElement, removeChilds } from './utils.js';

const typeOfRooms = {
  'palace': 'Дворец',
  'flat': 'Квартира',
  'house': 'Дом',
  'bungalo': 'Бунгало',
  'hotel': 'Отель',
};

const getRoomsAndGuests = (rooms, guests) => `${rooms} комнаты для ${guests} гостей`;

const getTime = (checkin, checkout) => `Заезд после ${checkin}, выезд до ${checkout}`;

const getPrice = (price) => `${price} ₽/ночь`;

const generateIconFeature = (feature) => {
  const icon = createDOMElement('li', 'popup__feature');
  addClassName(icon, 'popup__feature--' + feature);
  return icon;
};

const generateIconsFeatures = (arrayFeatures) => {
  const fragment = document.createDocumentFragment();
  arrayFeatures.forEach((el) => {
    fragment.appendChild(generateIconFeature(el));
  });

  return fragment;
};

const generatePhoto = (url) => {
  const photo = createDOMElement('img', 'popup__photo');
  photo.src = url;
  photo.width = OFFER_PHOTO_WIDTH;
  photo.height = OFFER_PHOTO_HEIGHT;
  photo.alt = OFFER_PHOTO_ALT;

  return photo;
};

const generatePhotos = (arrayPhotos) => {
  const fragment = document.createDocumentFragment();
  arrayPhotos.forEach((el) => {
    fragment.appendChild(generatePhoto(el));
  });

  return fragment;
};

const generateTextContentCard = (cardOffer, array) => {
  const offer = array.offer;

  cardOffer.querySelector('.popup__title').textContent = offer.title;
  cardOffer.querySelector('.popup__text--address').textContent = offer.address;
  cardOffer.querySelector('.popup__description').textContent = offer.description;
  cardOffer.querySelector('.popup__type').textContent = typeOfRooms[offer.type];
  cardOffer.querySelector('.popup__text--price').textContent = getPrice(offer.price);
  cardOffer.querySelector('.popup__text--capacity').textContent = getRoomsAndGuests(offer.rooms, offer.guests);
  cardOffer.querySelector('.popup__text--time').textContent = getTime(offer.checkin, offer.checkout);
};

const generateImagesCard = (cardOffer, array) => {
  const offer = array.offer;
  const author = array.author;

  cardOffer.querySelector('.popup__avatar').src = author.avatar;

  const cardOfferFeatures = cardOffer.querySelector('.popup__features');
  const cardOfferPhotos = cardOffer.querySelector('.popup__photos');
  const cardOfferListFeatures = generateIconsFeatures(offer.features);
  const cardOfferListPhotos = generatePhotos(offer.photos);

  removeChilds(cardOfferFeatures);
  removeChilds(cardOfferPhotos);

  cardOfferFeatures.appendChild(cardOfferListFeatures);
  cardOfferPhotos.appendChild(cardOfferListPhotos);
};

const generateCardOffer = (array) => {
  const cardOfferTemplate = document.querySelector('#card').content;
  const cardOfferElement = cardOfferTemplate.querySelector('.popup');

  const cardOffer = cardOfferElement.cloneNode(true);

  generateTextContentCard(cardOffer, array);
  generateImagesCard(cardOffer, array);

  return cardOffer;
};

export const openCardOffer = (array) => {
  const map = document.querySelector('.map');
  const adFiltering = map.querySelector('.map__canvas');
  const cardOffer = generateCardOffer(array[4]);

  adFiltering.insertAdjacentElement('beforeBegin', cardOffer);
};
