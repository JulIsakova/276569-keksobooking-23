// const min = 1; // минимальное значение диапазана
// const max = 10; // максимальное значение диапазона
// const fixed = 5; // кол-во знаков после запятой

const titles = ['Заголовок 1', 'Заголовок 2', 'Заголовок 3', 'Заголовок 4', 'Заголовок 5', 'Заголовок 6', 'Заголовок 7', 'Заголовок 8', 'Заголовок 9', 'Заголовок 10'];
const descriptions = ['Описание 1', 'Описание 2', 'Описание 3', 'Описание 4', 'Описание 5', 'Описание 6', 'Описание 7', 'Описание 8', 'Описание 9', 'Описание 10'];
const types = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const photos = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];
const checkTimes = ['12:00', '13:00', '14:00'];

/* Создаем массив из 10 элементов с адресами изображений авторов.
* Перед однозначными числами ставится 0. Например, 01, 02...10.
*/
const avatars = [];

for(let av = 1; av <= 10; av++) {
  const avatarsUrl = av < 10 ? `img/avatars/user0${av}.png` : `img/avatars/user${av}.png`;
  avatars.push(avatarsUrl);
}

/*
 * Функция генерирует случайное число
 */
function getRandomNumber(minNum, maxNum) {
  /*
   * Приводим значения диапазона к модулю
   */
  minNum = Math.abs(minNum);
  maxNum = Math.abs(maxNum);

  /*
   * меняем значения min и max местами
   */
  if (minNum > maxNum) {
    const newMin = maxNum;
    maxNum = minNum;
    minNum = newMin;
  }
  return Math.random() * (maxNum - minNum) + minNum;
}

/*
 * Функция возвращает целое число из выбранного диапазона
 */
function getRandomInt(minInt, maxInt) {
  const rand = Math.floor(getRandomNumber(minInt, maxInt));
  return rand;
}

/*
 * Функция возвращает число с плавающей точкой из выбранного диапазона
 */
function getRandomFloat(minFloat, maxFloat, fixedNum) {
  const rand = getRandomNumber(minFloat, maxFloat);
  return rand.toFixed(fixedNum);
}

/**
 * Функция выбирает из массива avatars случайное значение
 */
const getElemFromArray = function(arr) {
  const arrayElems = arr.slice();
  return arrayElems.splice(getRandomInt(0, arrayElems.length -1 ), 1)[0];
};

/**
 * Функция генерирует массив случайной длины из уникальных элементов
 */
const getArrayRandomLength = function(arr) {
  const copyArray = arr.slice();
  return copyArray.splice(getRandomInt(0, copyArray.length -1 ));
};

/**
 * Функция генерирует объект с ключами
 */
const generateObject = function() {
  const location = {
    lat: getRandomFloat(35.65000, 35.70000, 5),
    lng: getRandomFloat(139.70000, 139.80000, 5),
  };

  return {
    author: {
      avatar: getElemFromArray(avatars),
    },
    offer: {
      title: getElemFromArray(titles),
      get address(){
        return `${this.location.lat}, ${this.location.lng}`;
      },
      price: getRandomInt(100, 10000),
      type: getElemFromArray(types),
      rooms: getRandomInt(1, 5),
      guests: getRandomInt(2, 10),
      checkin: getElemFromArray(checkTimes),
      get checkout(){
        return this.checkin;
      },
      features: getArrayRandomLength(features),
      description: getElemFromArray(descriptions),
      photos: getArrayRandomLength(photos),
      location,
    },
  };
};

// eslint-disable-next-line no-unused-vars
const objectsArray = new Array(10).fill().map(() => generateObject());
