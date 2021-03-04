
function ucfirst(str) {
    return str=str.slice(0,1).toUpperCase() + str.slice(1); 
   }
   
   let mainString="var_text_hello";
   let arrStr=mainString.split('_');
   let newarr=[];
   newarr.push(arrStr[0]);
   for (let i=1; i<arrStr.length; i++) {
     
    newarr.push(ucfirst(arrStr[i]));
   }
   console.log(newarr.join(''));