import {generateAds} from './ads.js';

const mapCanvas = document.querySelector('#map-canvas');
const cardTemplate = document.querySelector('#card').content;
const template = cardTemplate.querySelector('article');
const fragment = document.createDocumentFragment();

//сопоставляем тип жилья с подписями
const translations = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

// функция склонения взята из интернета
const declineWords = (number, txt, cases = [2, 0, 1, 1, 1, 2]) => txt[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];

//формируем текстовое сообщение с количеством комнат для n-гостей
const roomsText = ['комната', 'комнаты', 'комнат'];
const guestsText = ['гость', 'гостей', 'гостей'];

const getRoomsText = function(rooms, guests) {
  const room = declineWords(rooms, roomsText);
  const guest = declineWords(guests, guestsText);

  return `${rooms} ${room} для ${guests} ${guest}`;
};

const getFeatures = function(featuresData) {
  let featureHTML = '';

  for (let j = 0; j < featuresData.length; j++) {
    featureHTML += `<li class='popup__feature popup__feature--${featuresData[j]}'></li>`;
  }

  return featureHTML;
};

const getPhotos = function(photosData) {
  let photoHTML = '';

  for (let n = 0; n < photosData.length; n++) {
    photoHTML += `<img src='${photosData[n]}' class="popup__photo" width="45" height="40" alt="Фотография жилья">`;
  }

  return photoHTML;
};

const createHtmlAds = function(ads) {
  for (let i = 0; i < ads.length; i++) {
    const ad = template.cloneNode(true);

    ad.querySelector('.popup__avatar').src = ads[i].author.avatar;
    ad.querySelector('.popup__title').textContent = ads[i].offer.title !== undefined ? ads[i].offer.title : '';
    ad.querySelector('.popup__text--address').textContent = ads[i].offer.address !== undefined ? ads[i].offer.address : '';
    ad.querySelector('.popup__text--price').textContent = ads[i].offer.price !== undefined ? `${ads[i].offer.price} ₽/ночь` : '';
    ad.querySelector('.popup__type').textContent = ads[i].offer.type !== undefined ? translations[ads[i].offer.type] : '';
    ad.querySelector('.popup__text--capacity').textContent = ads[i].offer.rooms && ads[i].offer.guests !== undefined ? getRoomsText(ads[i].offer.rooms, ads[i].offer.guests) : '';
    ad.querySelector('.popup__text--time').textContent = ads[i].offer.checkin && ads[i].offer.checkout !== undefined ? `Заезд после ${ads[i].offer.checkin}, выезд до ${ads[i].offer.checkout}` : '';

    //зачищаем список фичей
    ad.querySelector('.popup__features').innerHTML = '';
    ad.querySelector('.popup__features').insertAdjacentHTML('beforeend', getFeatures(ads[i].offer.features));

    ad.querySelector('.popup__description').textContent = ads[i].offer.description !== undefined ? ads[i].offer.description : '';

    //зачищаем список фото
    ad.querySelector('.popup__photos').innerHTML = '';
    ad.querySelector('.popup__photos').insertAdjacentHTML('beforeend', getPhotos(ads[i].offer.photos));

    fragment.appendChild(ad);
  }

  return fragment;
};

const appendAdToMap = function() {
  const adsMap = mapCanvas.appendChild(createHtmlAds(generateAds()));

  return adsMap;
};


export{appendAdToMap};
