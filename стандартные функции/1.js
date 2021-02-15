let str='мороз и солнце день чудесный';
str=str.slice(0, 1).toUpperCase()+str.slice(1);
console.log(str);

let str1='how are you';
str1=str1.split('');
str1[0]=str1[0].toUpperCase();
let res=str1.join('');
console.log(res);

let str2='123456';
let arr=str2.split('').reverse().join('');
console.log(arr);


let str3='http1://hotdog.com';
if (str3.slice(0,7)=='http://') {
    console.log('верно');
} else {
    console.log('не верно');
}

let str4='http://hotdog.html';
console.log(str4);
console.log(str4.slice(-5));
if (str4.substr(-5)=='.html') {
    console.log('верно');
} else {
    console.log('не верно');  
}