function simple(num) {
 for ( let i = 2; i < num; i++){
     if (num % i == 0)  return true;
     }
 return false;
}
let num=31;
console.log(simple(num));

function hasSame(arr) {
    for (let i = 0; i< arr.length; i++) {
        if (arr[i] == arr[i+1]) return true;
    }
    return false;
}
let arr=[1, 2, 3, 3, 6];
console.log(hasSame(arr));
