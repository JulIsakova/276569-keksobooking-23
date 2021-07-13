const cardTemplate = document.querySelector('#card').content;
const template = cardTemplate.querySelector('article');

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
const roomDeclination = ['комната', 'комнаты', 'комнат'];
const guestDeclination = ['гость', 'гостей', 'гостей'];

const getRoomsText = (rooms, guests) => {
  const room = declineWords(rooms, roomDeclination);
  const guest = declineWords(guests, guestDeclination);

  return `${rooms} ${room} для ${guests} ${guest}`;
};

const getFeaturesHTML = (features) => {
  let featureHTML = '';

  features.forEach((feature) => {
    featureHTML += `<li class='popup__feature popup__feature--${feature}'></li>`;
  });

  return featureHTML;
};

const getPhotosHTML = (photos) => {
  let photoHTML = '';

  photos.forEach((photo) => {
    photoHTML += `<img src='${photo}' class="popup__photo" width="45" height="40" alt="Фотография жилья">`;
  });

  return photoHTML;
};

const createAdElem = (ad) => {
  const adTemp = template.cloneNode(true);

  adTemp.querySelector('.popup__avatar').src = ad.author.avatar;
  adTemp.querySelector('.popup__title').textContent = ad.offer.title !== undefined ? ad.offer.title : '';
  adTemp.querySelector('.popup__text--address').textContent = ad.offer.address !== undefined ? ad.offer.address : '';
  adTemp.querySelector('.popup__text--price').textContent = ad.offer.price !== undefined ? `${ad.offer.price} ₽/ночь` : '';
  adTemp.querySelector('.popup__type').textContent = ad.offer.type !== undefined ? translations[ad.offer.type] : '';
  adTemp.querySelector('.popup__text--capacity').textContent = ad.offer.rooms && ad.offer.guests !== undefined ? getRoomsText(ad.offer.rooms, ad.offer.guests) : '';
  adTemp.querySelector('.popup__text--time').textContent = ad.offer.checkin && ad.offer.checkout !== undefined ? `Заезд после ${ad.offer.checkin}, выезд до ${ad.offer.checkout}` : '';

  //зачищаем список фичей
  adTemp.querySelector('.popup__features').innerHTML = '';
  adTemp.querySelector('.popup__features').insertAdjacentHTML('beforeend', getFeaturesHTML(ad.offer.features));

  adTemp.querySelector('.popup__description').textContent = ad.offer.description !== undefined ? ad.offer.description : '';

  //зачищаем список фото
  adTemp.querySelector('.popup__photos').innerHTML = '';
  adTemp.querySelector('.popup__photos').insertAdjacentHTML('beforeend', getPhotosHTML(ad.offer.photos));

  return adTemp;
};

const createAds = (ads) => {
  const fragment = document.createDocumentFragment();

  ads.forEach((ad) => {
    fragment.appendChild(createAdElem(ad));
  });

  return fragment;
};

export{createAds};
