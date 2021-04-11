class MyString {
 reverse(str) {
    return str.split('').reverse().join('');
 }
 ucFirst(str) {
     return str.slice(0,1).toUpperCase() + str.slice(1);
 }
 ucWords(str) {
     let arr = str.split(' ');
     for (let i = 0; i<arr.length; i++) {
         arr[i]=this.ucFirst(arr[i]);
                                            
     }
     return arr.join(' ');
 }
};

let str = new MyString();
console.log(str.reverse('abcde'));
console.log(str.ucFirst('abcde'));
console.log(str.ucWords('abcde abcde abcde abcde'));