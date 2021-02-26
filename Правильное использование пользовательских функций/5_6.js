function isEven(num) {
 if ((num%2) == 0) {
     return true;
 } else {
     return false;
 }
}
let newarr=[];
let arr= [1, 3, 4, 6, 7, 8];
for (let i=0; i<arr.length; i++) {
    if (isEven(arr[i])) {
        newarr.push(arr[i]);
    }
}

console.log(newarr);