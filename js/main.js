let min = -3; // минимальное знаечние диапазана
let max = 5; // максимальное значение диапазона
const fixed = 5; // кол-во знаков после запятой
let random;

/*
 * Приводим значения диапазона к модулю
 */
min = Math.abs(min);
max = Math.abs(max);

/*
 * Функция генерирует случайное число
 */
function generateNumber(minNum, maxNum) {
  if (minNum > maxNum) {
    const newMin = maxNum;
    maxNum = minNum;
    random = Math.random() * (maxNum - newMin + 1) + newMin;
  } else {
    random = Math.random() * (maxNum - minNum + 1) + minNum;
  }

  return random;
}

/*
 * Функция возвращает целое число из выбранного диапазона
 */
function getRandomNumber(minInt, maxInt) {
  const rand = Math.floor(generateNumber(minInt, maxInt));
  return rand;
}

/*
 * Функция возвращает число с плавающей точкой из выбранного диапазона
 */
function getFloatRandomNumber(minFloat, maxFloat, fixedNum) {
  const rand = generateNumber(minFloat, maxFloat);
  return rand.toFixed(fixedNum);
}

getRandomNumber(min, max);
getFloatRandomNumber(min, max, fixed);
