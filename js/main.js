const min = 1; // минимальное знаечние диапазана
const max = 10; // максимальное значение диапазона
const fixed = 5; // кол-во знаков после запятой

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

  return Math.random() * (maxNum - minNum + 1) + minNum;
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

getRandomInt(min, max);
getRandomFloat(min, max, fixed);
