let ggg = function(n, f) {return f(n);}
funcNew = function(a){return Math.pow(a,2)};

console.log(ggg( (ggg(7, funcNew)), funcNew));

