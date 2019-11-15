function splitNumber(numberAsString) {
  let sumByIndex = 0;
  return numberAsString.split('').reverse().reduce((buffer, el, i) => {
    sumByIndex += i;
    if(i !== 0 && i%3 !== 0 && sumByIndex % 3 === 0) {
      buffer = ' ' + el + buffer;
      sumByIndex = 0;
    } else {
      buffer =  el + buffer;
    }
    
    return buffer;
  }, '');
}

function splitNumber(numberAsString) {
  return numberAsString.split('')
    .reverse()
    .join('')
    .replace(/(\d{3})/g, '$1 ')
    .split(' ')
    .map((el) => (el.split('').reverse().join('')))
    .reverse()
    .join(' ');
}
