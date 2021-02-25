let arr=['a', 'b', 'c', 'a', 'a', 'b'];
let count = {};

for (i = 0; i < arr.length; i++) {
    if (count[arr[i]] === undefined) {
        count[arr[i]] = 1;
    } else {
        count[arr[i]]++;
    }
}

console.log(count);