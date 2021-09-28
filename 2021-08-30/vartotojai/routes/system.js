const express=require('express');

const router=express.Router();

router.use((req, res, next)=>{
    console.log("Atejo naujas vartotojas:  "+req.url);
   
    next();
});

module.exports=router;