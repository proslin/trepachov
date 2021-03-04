function isEven(num) {
  if (num%2 == 0) return true;
  else return false;
}
let str='123456';
let arr=str.split('');
for (let i=0; i<arr.length; i++) {
    if (isEven(arr[i])) {
        arr[i]--;
    }
    else {
        arr[i]++
    }
}
str=arr.join('');
console.log(str);