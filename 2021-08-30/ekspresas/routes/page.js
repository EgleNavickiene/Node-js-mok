const express=require('express');
const kart = require('./../rezult')
const path=require('path');

const router=express.Router();



router.get('/',(req,res,next)=>{
    //res.send("<form action='/rezultatas' method='POST'><input type='number' name='x'><br><input type='number' name='y'><button type='submit'>Issiusti</button></form>");
    res.render('index');
});

router.post('/rezultatas',(req,res,next)=>{
    //console.log('/rezultatas')

    // let x=req.body.x;
    // let y=req.body.y;
    // res.send("Skaičių "+x+" ir "+y+"<br>min bendras kartotinis yra "+kart(x,y));

    res.render("rezultatai",{
        x: req.body.x,
        y: req.body.y,
        rez: kart(req.body.x, req.body.y)
    });
}); 

router.get('/rezultatas',(req,res,next)=>{
    res.redirect('/');
});

router.use('/',(req,res,next)=>{
    //Išsiunčiame failą 404.html
   //status - nustato statusą
   res.status(404).render('404');
   //res.status(404).send("Puslapis nerastas");
   //res.status(404).send("<script>alert('Puslapis nerastas');history.go(-1);</script>");
 });

//---------------
module.exports=router;