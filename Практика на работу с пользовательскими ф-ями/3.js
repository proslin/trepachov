function inArray(text, arr) {
 for (let i=0; i<arr.length; i++) {
     if (arr[i] === text) return true;
     
 }
 return false;
}

let arr=['dog', 'cat', 'parrot', 'pig'];
console.log(inArray('cat', arr));