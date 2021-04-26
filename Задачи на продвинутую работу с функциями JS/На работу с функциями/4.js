let ggg = function(num, f1, f2) { return f1(num) + f2(num);}
function kvadrat(num) {
  return Math.pow(num, 2);
}
function kub(num) {
    return Math.pow(num, 3);
  }
console.log(ggg(2,kvadrat, kub));  