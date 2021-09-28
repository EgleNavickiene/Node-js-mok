//Paduodame reikalingus modulius musu projektui
const mongoose=require('mongoose');
const express = require('express');

//Prisijungiame prie duomenu bazes
mongoose.connect('mongodb://localhost:27017/blogas', (error)=>{
    if(!error){
        console.log('Prisijungimas prie db pavyko');
    } else {
        console.log('Nepavyko prisijunti prie db');
    }
});

//Pajungiame modeli is tame paciame folderyje esanciu failu
const irasai = require('./irasai.model');