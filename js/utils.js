//Функция генерирует случайное число
function getRandomNumber(minNum, maxNum) {
  // Приводим значения диапазона к модулю
  minNum = Math.abs(minNum);
  maxNum = Math.abs(maxNum);

  // меняем значения min и max местами
  if (minNum > maxNum) {
    const newMin = maxNum;
    maxNum = minNum;
    minNum = newMin;
  }

  return Math.random() * (maxNum - minNum) + minNum;
}

//Функция возвращает целое число из выбранного диапазона
function getRandomInt(minInt, maxInt) {

  return Math.floor(getRandomNumber(minInt, maxInt));
}

//Функция возвращает число с плавающей точкой из выбранного диапазона
function getRandomFloat(minFloat, maxFloat, fixedNum) {
  const rand = getRandomNumber(minFloat, maxFloat);

  return rand.toFixed(fixedNum);
}

export {getRandomInt, getRandomFloat};
