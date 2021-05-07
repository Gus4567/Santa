const howmany = (number, temp) => {
  const pack = 6
  let birra= 2

  if (temp >= 20 && temp <= 24) {
    birra = 1;
  } else if (temp < 20) {
    birra = 0.75;
  }
    return Math.ceil((birra * number) / pack)
  
};

module.exports = howmany;
