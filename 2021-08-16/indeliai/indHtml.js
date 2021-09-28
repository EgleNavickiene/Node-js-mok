const ind = require("./ind");

const index = ()=>{
   let s='<html>';
   s+='<body>';
   s+='<form method="POST" action="skaiciuoti">';
   s+='<input type="text" name="x"> <br> ';
   s+='<input type="text" name="p"> <br> ';
   s+='<input type="text" name="t"> <br> ';

   s+='<button type="submit">Skaiciuoti</button>';
   s+='</form>';
   s+='</body>';
   s+='</html>';
   return s;
}

const result = (x, p, t)=>{
    let s='<html>';
    s+='<body>';
    s+="Rezultatas: "+ind(x, p, t).toFixed(2);
    s+='</body>';
    s+='</html>';
    return s;
 }

 module.exports={index, result};
