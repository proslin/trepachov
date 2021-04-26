let each = function (startArr, f) { 
       
    return f(startArr);
}
let arr = [1, 2, 3, 4, 5];

let func = function(arr) {
   let newArr = [];
    for (let i = 0; i< arr.lenght; i++) {
       newArr[i] = Math.pow(arr[i], 2);
   }
   return newArr;
}
console.log(each(arr, func));