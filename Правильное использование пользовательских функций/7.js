function getDivisors(num) {
   let arr=[];
    for (let i=1; i<=num; i++) {
        if ((num%i) == 0) arr.push(i);
    }
    return arr;
}

let num = 20;
console.log(getDivisors(num));