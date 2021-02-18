function hasElem(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 5) {
            return true;
        }
    }
    return false;
}

let arr=[1, 2, 3, 4, 6, 8];
if (hasElem(arr)) {
    console.log('есть');
} else {
    console.log('нет');
}
