const forecast=require('./forecast');


forecast('klaipeda', (temp)=>{
    console.log("Temperaturos prognozės: ");
    temp.forEach((d)=>{
        console.log("Diena: "+d.date+"\t Temperatura: "+d.temperature);
    });
});


/*
https://api.frankfurter.app/2021-08-13..2021-08-23?from=EUR&to=USD
let end=new Date().toISOString().slice(0,10);
let start=new Date();
start.setDate( start.getDate()-10);
start=start.toISOString().slice(0,10)


console.log(start);
console.log(end);
*/
/*
for (const [date, value] of Object.entries(curr.rates)){
    console.log(date+" "+value.USD)
}
*/