let ggg = function(a, b) {return a()+b();}
func1 = function(a) {return 3};
func2 = function(b) {return 4};
console.log(ggg(func1, func2));