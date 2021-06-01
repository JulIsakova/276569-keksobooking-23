let min = -3; // минимальное знаечние диапазана
let max = 10; // максимальное значение диапазона
let fixed = 5; // кол-во знаков после запятой

/*
 * Функция генерирует случайное целое число из выбранного диапазона
 */

function getRandomNumber(minInt, maxInt){
  let random;

  if(minInt >= 0 && maxInt >= 0)
  {
    if(minInt > maxInt)
    {
      random = Math.floor(Math.random() * (minInt - maxInt + 1)) + maxInt;
    }
    else
    {
      random = Math.floor(Math.random() * (maxInt - minInt + 1)) + minInt;
    }
  }
  else
  {
    minInt = Math.abs(minInt);
    maxInt = Math.abs(maxInt);

    if(minInt > maxInt)
    {
      random = Math.floor(Math.random() * (minInt - maxInt + 1)) + maxInt;
    }
    else
    {
      random = Math.floor(Math.random() * (maxInt - minInt + 1)) + minInt;
    }
  }

  return random;
}

/*
 * Функция генерирует случайное число с плавающей точкой из выбранного диапазона
 */

function getRealRandomNumber(minReal, maxReal, fixed){
  let random;

  if(minReal >= 0 && maxReal >= 0)
  {
    if(minReal > maxReal)
    {
      random = Math.random() * (minReal - maxReal + 1) + maxReal;
    }
    else
    {
      random = Math.random() * (maxReal - minReal + 1) + minReal;
    }
  }
  else
  {
    minReal = Math.abs(minReal);
    maxReal = Math.abs(maxReal);

    if(minReal > maxReal)
    {
      random = Math.random() * (minReal - maxReal + 1) + maxReal;
    }
    else
    {
      random = Math.random() * (maxReal - minReal + 1) + minReal;
    }
  }

  return random.toFixed(fixed);
}

console.log('Целое число: ' + getRandomNumber(min, max));

console.log('Число с плавающей точкой: ' + getRealRandomNumber(min, max, fixed));
