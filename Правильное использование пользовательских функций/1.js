function isNumberInRange(num) {
 if (num > 0 && num < 10) return true;
 else return false;
}


let num = -3;
let arr = [1, 2, 3, 5, -3, 0];
let newarr = [];
for (let i = 0; i < arr.length; i++) {
    if (isNumberInRange(arr[i])) {
       newarr.push(arr[i]);
    }
}
console.log(newarr);