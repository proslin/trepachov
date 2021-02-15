let arr9=[1, 2, 3, 4, 5];
arr9.splice(1,2);
console.log(arr9);

let arr10=[1, 2, 3, 4, 5];
let res10=arr10.splice(1,3);
console.log(res10);

let arr11=[1, 2, 3, 4, 5];
arr11.splice(3, 0, 'a', 'b', 'c');
console.log(arr11);

let arr12=[1, 2, 3, 4, 5];
arr12.splice(1, 0, 'a', 'b');
arr12.splice(6, 0, 'c');
arr12.splice(8, 0, 'e');
console.log(arr12);

let arr13=[3, 4, 1, 2, 7];
console.log(arr13.sort());

let obj14={
    js: 'test',
    jq: 'hello',
    css: 'world'
};
let arr14=Object.keys(obj14);
console.log(arr14);