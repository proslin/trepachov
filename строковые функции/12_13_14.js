let str='javascript';
let res=str.slice(0,1).toUpperCase()+str.slice(1);
console.log(res);

let str13='на улице солнечно';
let arr13=str13.split(' ');
for (let i=0; i<arr13.length; i++) {
    arr13[i]=arr13[i].slice(0,1).toUpperCase()+arr13[i].slice(1);
}
let res13=arr13.join(' ');
console.log(res13);

let str14='var_test_text';
let arr14=str14.split('_');
for (let i=1; i<arr14.length; i++) {
    arr14[i] = arr14[i].slice(0,1).toUpperCase()+arr14[i].slice(1);
}
console.log(arr14.join(''));