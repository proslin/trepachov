let n=1000;
let num=0;
let res=1000;
while (n>50) {
  n/=2;
  console.log(n + 'n');
  num++;
  console.log(num);
};
console.log('Потребовалось ' + num + ' итераций');