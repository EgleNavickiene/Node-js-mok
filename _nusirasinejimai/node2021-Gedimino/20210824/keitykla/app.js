let currency=require('./currency');

currency('EUR','EUR', (rates)=>{
    rates.forEach((rate)=>{
        console.log('Data: '+rate.date+' Kursas: '+rate.rate);
    });
});


//let str='from=EUR&to=USD';   //from=EUR              to=USD
/*
console.log(str.split('&')[0].split('=')[1]);
console.log(str.split('&')[1].split('=')[1]);
*/