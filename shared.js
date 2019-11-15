function splitNumber(numberAsString) {
  return numberAsString.split('').reverse().reduce((buffer, el, i) => {
    return (i % 3 === 2) ? buffer = ' ' + el + buffer : buffer =  el + buffer, buffer;
  }, '').trim();
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
