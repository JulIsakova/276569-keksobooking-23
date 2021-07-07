// Импортируем функции для расчета целого случайного числа и случайного числа с плавающей точкой из get-random-number.js
import {getRandomInt, getRandomFloat} from './get-random-number.js';

const titles = ['Заголовок 1', 'Заголовок 2', 'Заголовок 3', 'Заголовок 4', 'Заголовок 5', 'Заголовок 6', 'Заголовок 7', 'Заголовок 8', 'Заголовок 9', 'Заголовок 10'];
const descriptions = ['Описание 1', 'Описание 2', 'Описание 3', 'Описание 4', 'Описание 5', 'Описание 6', 'Описание 7', 'Описание 8', 'Описание 9', 'Описание 10'];
const types = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const photos = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];
const checkTimes = ['12:00', '13:00', '14:00'];

const MAX_ADS = 10; //константа задает количество выводимых похожих объявлений

/* Создаем массив из MAX_ADS элементов с адресами изображений авторов.
* Перед однозначными числами ставится 0. Например, 01, 02...10.
*/
const getAvatarsUrl = function() {
  const avatars = [];

  for (let i= 1; i <= MAX_ADS; i++) {
    avatars.push(`img/avatars/user${`${i}`.padStart(2, 0)}.png`);
  }

  return avatars;
};

const avatarsArray = getAvatarsUrl();

//Функция генерирует массив случайной длины
const getArrayRandomLength = function(arr) {

  return arr.slice(getRandomInt(0, arr.length -1));
};

//Функция генерирует объект с ключами
const generateAd = function() {
  const location = {
    lat: getRandomFloat(35.65000, 35.70000, 5),
    lng: getRandomFloat(139.70000, 139.80000, 5),
  };

  return {
    author: {
      avatar: avatarsArray[getRandomInt(0, avatarsArray.length -1)],
    },
    offer: {
      title: titles[getRandomInt(0, titles.length -1)],
      get address(){
        return `${this.location.lat}, ${this.location.lng}`;
      },
      price: getRandomInt(100, 10000),
      type: types[getRandomInt(0, types.length -1)],
      rooms: getRandomInt(1, 5),
      guests: getRandomInt(2, 10),
      checkin: checkTimes[getRandomInt(0, checkTimes.length -1)],
      get checkout(){
        return this.checkin;
      },
      features: getArrayRandomLength(features),
      description: descriptions[getRandomInt(0, descriptions.length -1)],
      photos: getArrayRandomLength(photos),
      location,
    },
  };
};

//Функция генерирует массив из MAX_ADS-объектов, создаваемых в функции generateAd
const generateAds = function() {

  return Array.from({length: MAX_ADS}).map(() => generateAd());
};

export {generateAds};
