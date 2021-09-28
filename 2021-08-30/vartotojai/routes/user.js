const express=require('express');
const path=require('path');

//susikuriam router (objektą, į kurį sudėsim susijusius middlewares)
const router=express.Router();

//Vartotojas atėjo į nuorodą /users (GET metodas)
router.get('/',(req,res,next)=>{
    //console.log(__dirname);
    // __dirname - absoliutus kelias iki esamo katalogo
    // path.join funkcija sujungia kelią iš atskitų string'ų
    //res.sendFile(path.join(__dirname,'..','views','user.html'));

    //Pagal salb. user sugeneruojamas html
    res.render('user');
 });
 
 //Vartotojas atėjo iš formos (POST metodas), jam atvaizduojame informaciją
 router.post('/add',(req,res,next)=>{
    
     //paimamas sablonas ir sugeneruojamas html is nurodyto sablono
     //html issiunciamas
     res.render("rezult",{
         vardas: req.body.vardas,
         pavarde: req.body.pavarde
     });
     //res.send("<h1>Pridėti vartotoją</h1>"+"Vartotojo vardas: "+req.body.vardas+"<br>Pavarde:"+req.body.pavarde);
 });
 
 //jei vart.nusikopijavo nuorodą ir atejo ne per formą(POST met.), o per link-ą (GET metodas)
 //tuomet mes jį redirektinam į (post metodo) formą
 router.get('/add',(req,res,next)=>{
     res.redirect('/user');
 });



module.exports=router;