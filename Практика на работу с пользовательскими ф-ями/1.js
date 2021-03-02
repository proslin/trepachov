function ucfirst(str) {
 return str=str.slice(0,1).toUpperCase() + str.slice(1); 
}

let mainString="hello how are you doing great";
let arrStr=mainString.split(' ');
let newarr=[];
for (let i=0; i<arrStr.length; i++) {
    newarr.push(ucfirst(arrStr[i]));
}
console.log(newarr.join(' '));