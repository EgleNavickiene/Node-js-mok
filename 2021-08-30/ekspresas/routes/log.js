const express=require('express');
const fs = require('fs');

const router=express.Router();

router.use((req, res, next)=>{

    const d = new Date().toISOString().slice(0,10);
    fs.appendFileSync('log.txt', 'Adr: '+req.socket.remoteAddress+' url: '+req.url+'; data: '+d+'\n');
        next();
});


//---------------
module.exports=router;