// const min = 1; // минимальное значение диапазана
// const max = 10; // максимальное значение диапазона
// const fixed = 5; // кол-во знаков после запятой

const titles = ['Заголовок 1', 'Заголовок 2', 'Заголовок 3', 'Заголовок 4', 'Заголовок 5', 'Заголовок 6', 'Заголовок 7', 'Заголовок 8', 'Заголовок 9', 'Заголовок 10'];
const descriptions = ['Описание 1', 'Описание 2', 'Описание 3', 'Описание 4', 'Описание 5', 'Описание 6', 'Описание 7', 'Описание 8', 'Описание 9', 'Описание 10'];
const types = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const photos = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];
const checkTimes = ['12:00', '13:00', '14:00'];

const SHOWADSNUM = 10; //константа задает количество выводимых похожих объявлений

/* Создаем массив из SHOWADSNUM элементов с адресами изображений авторов.
* Перед однозначными числами ставится 0. Например, 01, 02...10.
*
* Константа STARTDOUBLENUM задает значение, с которого начинаются двузначные числа.
* Перед этими числами не требуется добавлять 0.
*/
const STARTDOUBLENUM = 10;

const getAvatarsUrl = function() {
  const avatars = [];
  for(let index = 1; index <= SHOWADSNUM; index++) {
    const avatarsUrl = index < STARTDOUBLENUM ? `img/avatars/user0${index}.png` : `img/avatars/user${index}.png`;
    avatars.push(avatarsUrl);
  }
  return avatars;
};

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

/*
 * Функция генерирует массив случайной длины
 */
const getArrayRandomLength = function(arr) {
  return arr.slice(getRandomInt(0, arr.length -1 ));
};

/**
 * Функция генерирует объект с ключами
 */
const generateObject = function() {
  const location = {
    lat: getRandomFloat(35.65000, 35.70000, 5),
    lng: getRandomFloat(139.70000, 139.80000, 5),
  };
  const avatarsArray = getAvatarsUrl();

  return {
    author: {
      avatar: avatarsArray[getRandomInt(0, avatarsArray.length -1 )],
    },
    offer: {
      title: titles[getRandomInt(0, titles.length -1 )],
      get address(){
        return `${this.location.lat}, ${this.location.lng}`;
      },
      price: getRandomInt(100, 10000),
      type: types[getRandomInt(0, types.length -1 )],
      rooms: getRandomInt(1, 5),
      guests: getRandomInt(2, 10),
      checkin: checkTimes[getRandomInt(0, checkTimes.length -1 )],
      get checkout(){
        return this.checkin;
      },
      features: getArrayRandomLength(features),
      description: descriptions[getRandomInt(0, descriptions.length -1 )],
      photos: getArrayRandomLength(photos),
      location,
    },
  };
};

/*
 * Функция генерирует массив из SHOWADSNUM объектов, создаваемых в функции generateObject
 */
const generateObjectsArray = function() {
  const objectsArray = Array.from({length: SHOWADSNUM}).map(() => generateObject());
  return objectsArray;
};

generateObjectsArray();

