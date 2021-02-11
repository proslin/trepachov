let str='Хранится длинный текст. Реализовать обрезание длинного текста по след правилу';
let n=20;
if (str.length>n) {
  result=str.substr(0, n) + '...';
} else result=str;
console.log(result);