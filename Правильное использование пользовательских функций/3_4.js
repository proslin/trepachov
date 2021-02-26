function getDigitsSum(num) {
    let digitArr = String(num).split('');
    let sum=0;
    for (let i = 0; i <  digitArr.length; i++) {
      sum+=Number(digitArr[i]);
    }
    return sum;
} 

for (let i = 1; i<=2021; i++) {
       if (getDigitsSum(i) == 13) console.log(getDigitsSum(i) + ' '+i);
}