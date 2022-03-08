const getRandomInt = (min, max, quantity) => (Math.random() * (max - min) + min).toFixed(quantity);

//функция валидации
const getRandomValidate = (min, max, quantity) => {
  if ( min > max ){
    const change = min;
    min=max;
    max=change;
  }
  if (min === max ){
    // eslint-disable-next-line no-console
    console.log('Числа от и до не должны быть равными!');
  }
  if (min < 0 || max < 0 ){
    // eslint-disable-next-line no-console
    console.log('Числа должны быть положительными!');
  }
  return getRandomInt(min, max, quantity);
};

getRandomValidate(0, 20, 1);
// eslint-disable-next-line no-console
console.log(getRandomValidate(1, 10, 3));
