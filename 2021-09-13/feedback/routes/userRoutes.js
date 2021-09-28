const express=require('express');
const User = require('../model/user');
const user=('./../model/uder');
const router=express.Router();

router.get('/user', (req, res, next)=>{
    user.find({}).then((users)=>{
        res.send(users);
    }).catcc((e)=>{
        res.status(500).send(e);
    })
})

router.post('/user',(req, res, next)=>{
    const user=new User(req.body);
    user.save().then(()=>{
        res.status(201).send(user);

    }).catch((e)=>{
        res.status(400).send(e);
    })
})

module.exports=router;