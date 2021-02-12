let str='я учу javascript!';
let res1=str.split(' ');
console.log(res1);

let res2=str.split('');
console.log(res2);

let date='2025-12-31';
let arr=date.split('-');
//теперь, обращаясь к разным элементам массива по их ключам, сформируем нужную нам строку:

let newdate=arr[2]+ '.' + arr[1] + '.' +arr[0];
console.log(newdate);

//   №11
let arr11=['я', 'учу', 'javascropt', '!'];
let str11=arr11.join('+');
console.log(str11);
