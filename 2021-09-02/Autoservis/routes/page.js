const express=require('express');
const paslaugos=require('./../modules/paslaugos')
const register=require('./../modules/register');

const router=express.Router();

router.get('/',(req, res, next)=>{
    res.render('index');
});

router.get('/paslaugos',(req, res, next)=>{

    //console.log(paslaugos.getPaslaugos());
    const musuPaslaugos = paslaugos.getPaslaugos();
    res.render('paslaugos', {
        title: 'Paslaugos',
        paslaugos: musuPaslaugos
    });
    
});

router.get('/registracija',(req, res, next)=>{
    const reg=register.getRegister();
    res.render('register', {
        title: 'Registracija remontui',
        register: reg
    });
});



router.get('/admin',(req, res, next)=>{
    let admin=register.getRegister();
    res.render('adminreg', {
        register: admin
    });
});

router.post('/registracija',(req, res, next)=>{
    register.adminRegister(req.body.name, req.body.marke, req.body.metai, req.body.problema);
    res.redirect('/registracija');
});

router.get('/kontaktai',(req, res, next)=>{
    res.render('contacts');
});



module.exports=router;