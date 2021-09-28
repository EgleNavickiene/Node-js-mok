const express=require('express');
const logRouter=require('./routes/log');
const pageRouter=require('./routes/page');
const path=require('path');
const hbs=require('hbs');

//--------Keliai---------
//Konstanta, kelias iki šablonų
const viewsPath=path.join(__dirname,'views','templates');
//Konstanta, kelias iki daliniu šablonų
const partialsPath=path.join(__dirname,'views','partials');
//Konstanta kelias iki public katalogo
const publicPath=path.join(__dirname,'public');


const app=express();

app.set('view engine','hbs');
app.set('views',viewsPath);
hbs.registerPartials(partialsPath);

app.use(express.urlencoded({extended:false}));

app.use(express.static(publicPath));

app.use(logRouter);
app.use(pageRouter);





app.listen(3010);