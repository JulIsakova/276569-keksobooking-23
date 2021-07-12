const mapCanvas = document.querySelector('#map-canvas');
const cardTemplate = document.querySelector('#card').content;
const template = cardTemplate.querySelector('article');
const fragment = document.createDocumentFragment();

//сопоставляем тип жилья с подписями
const getTypeName = function(type){
  let popupType = '';

  switch (type) {
    case 'flat':
      popupType = 'Квартира';
      break;
    case 'bungalow':
      popupType = 'Бунгало';
      break;
    case 'house':
      popupType = 'Дом';
      break;
    case 'palace':
      popupType = 'Дворец';
      break;
    case 'hotel':
      popupType = 'Отель';
      break;
    case 'undefined':
      popupType = '';
      break;
  }

  return popupType;
};

// функция склонения взята из интернета
const declension = (number, txt, cases = [2, 0, 1, 1, 1, 2]) => txt[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];

//формируем текстовое сообщение с количеством комнат для n-гостей
const getRooms = function(rooms, guests) {
  const room = declension(rooms, ['комната', 'комнаты', 'комнат']);
  const guest = declension(guests, ['гость', 'гостей', 'гостей']);

  return `${rooms} ${room} для ${guests} ${guest}`;
};


const createHtmlAds = function(ads) {
//заменить 1 на ads.length
  for (let i = 0; i < 1; i++) {
    const ad = template.cloneNode(true);

    ad.querySelector('.popup__avatar').src = ads[i].author.avatar;
    ad.querySelector('.popup__title').textContent = ads[i].offer.title !== undefined ? ads[i].offer.title : '';
    ad.querySelector('.popup__text--address').textContent = ads[i].offer.address !== undefined ? ads[i].offer.address : '';
    ad.querySelector('.popup__text--price').textContent = ads[i].offer.price !== undefined ? `${ads[i].offer.price} ₽/ночь` : '';
    ad.querySelector('.popup__type').textContent = ads[i].offer.type !== undefined ? getTypeName(ads[i].offer.type) : '';
    ad.querySelector('.popup__text--capacity').textContent = ads[i].offer.rooms && ads[i].offer.guests !== undefined ? getRooms(ads[i].offer.rooms, ads[i].offer.guests) : '';
    ad.querySelector('.popup__text--time').textContent = ads[i].offer.checkin && ads[i].offer.checkout !== undefined ? `Заезд после ${ads[i].offer.checkin}, выезд до ${ads[i].offer.checkout}` : '';

    //зачищаем список фичей
    ad.querySelector('.popup__features').innerHTML = '';
    const featuresData = ads[i].offer.features;
    //console.log(featuresData);

    for (let j = 0; j < featuresData.length; j++) {
      const featureHTML = `<li class='popup__feature popup__feature--${featuresData[j]}'></li>`;
      ad.querySelector('.popup__features').insertAdjacentHTML('beforeend', featureHTML);
    }

    ad.querySelector('.popup__description').textContent = ads[i].offer.description !== undefined ? ads[i].offer.description : '';

    //зачищаем список фото
    ad.querySelector('.popup__photos').innerHTML = '';
    const photosData = ads[i].offer.photos;
    //console.log(photosData);

    for (let n = 0; n < photosData.length; n++) {
      const photoHTML = `<img src='${photosData[n]}' class="popup__photo" width="45" height="40" alt="Фотография жилья">`;
      ad.querySelector('.popup__photos').insertAdjacentHTML('beforeend', photoHTML);
    }

    fragment.appendChild(ad);
  }

  return mapCanvas.appendChild(fragment);
};

export{createHtmlAds};
