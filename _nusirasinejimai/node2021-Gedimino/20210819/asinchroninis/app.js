console.log("Pirmas");
let x=1;

setTimeout(()=>{
    console.log("Iškarto: "+x);
},2000);
console.log("Antras");
x++;
console.log(x);