
const express=require('express');
const hbs=require('hbs');
const {MongoClient, ObjectId}=require('mongodb');
const path=require('path');
const pageRoute=require('./routes/page');

//konstantos
const viewsPath=path.join(__dirname, 'views', 'templates');
const partialsPath=path.join(__dirname, 'views', 'partials');
const publicPath=path.join(__dirname,'public');
const dbName='Uzduotys';
const connectionURL='mongodb://127.0.0.1:27017';

//objektu susikurimas
const app=express();

//konfiguracija
app.set('view engine','hbs');
app.set('views', viewsPath);

hbs.registerPartials(partialsPath);

//middlewares/routes
app.use(express.static(publicPath));
app.use(express.urlencoded({extended:false}));
app.use(pageRoute);

MongoClient.connect(connectionURL).then((client)=>{
    const db=client.db(dbName);
    global.db=db;
    
    console.log("Uzduociu DB")
})

app.listen(3012);