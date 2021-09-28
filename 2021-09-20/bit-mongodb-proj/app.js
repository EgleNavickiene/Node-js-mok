    //Paimam is model folderio index js faila
const connection = require('./model');
    //const hbs = require('hbs');

    //Paimam express moduli
const express = require('express');
    //Pajungiam nauja express aplikacija
const application = express();
    //Prijungiame nodejs biblioteka path
const path = require('path');
    //Prijungiame express-handlebars
const expressHandlebars = require('express-handlebars');

    //Pajungiame controllers direktorija
const irasaiController = require('./controllers/irasai');

const publicPath = path.join(__dirname,'public');



    //handlebar
application.use(express.urlencoded({
    extended:false
}));

    //Aplikacijai priskiriame views direktorija is kurios imsime sablonus
application.set('views', path.join(__dirname, '/views/'));

    //aplikacijai prisikiriame handlebars papildini ir jam nustatoteme pagrindini sablona,
    //kuris apims visa atvaizduojamos aplikacijos turini
application.engine('hbs', expressHandlebars({
    extname: 'hbs',
    defaultLayout:'mainlayout',
    layoutsDir: __dirname + '/views/layouts',
    partialsDir:__dirname + '/views/partials'
}))

//ijungiame templeitu engine
application.set('view engine','hbs');  

application.use(express.static(publicPath));


application.get('/', (req, res)=>{
    res.render('index');
});

//Sukuriame pirma routeri skirta atvaizduoti turini tituliniame puslapyje
application.use('/irasai', irasaiController);


//Ijungiame aplikacija ja paleidziant 3000 porte
application.listen('3000', ()=> {
    console.log ('veikia');
});