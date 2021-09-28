const express=require('express');
const router=express.Router();
//const Order=require('../model/order')
const Service=require('../model/service')

router.get('/services', (req, res, next)=>{    
    Service.find({}).then((services) =>{
        res.send(services);
    }).catch((e)=>{
        res.status(500).send(e);
    })
});

router.post('/services', (req, res, next)=>{
    const services=new Service(req.body);
    services.save().then(()=>{
        res.status(201).send(services);
    }).catch((e)=>{
        res.status(400).send(e);
    });
})

router.get('/services/:id', (req,res, next)=>{
    //Paimame id iš URL
    //Jei url butų localhost:3000/feedback/2d3d12231d4   , tuomet id = 2d3d12231d4
    const id=req.params.id;
    Service.findById(id).then((services)=>{
        if (!services){
            return res.status(404).send();
        }
        res.send(services);
    }).catch((e)=>{
        res.status(500).send(e);
    });
});

router.patch('/services/:id', async (req, res)=>{
    try {
        //Pasiimame seną service iš duomenų bazės
        const service=await Service.findById(req.params.id);

        //Iš atsiųsto JSON failo, paimame atsiųstų atnaujinti laukų sąrašą (masyvą)
        const updates=Object.keys(req.body);

        //Laukai kuriuos galime keisti
        const allowed=['name','description','price'];

        //Ar visi atsiusti laukai iš masyvo updates yra allowed masyve
        if (! updates.every((update)=>allowed.includes(update))){
            //Jei ne nutraukiame vykdymą ir gražiname 400 klaida
            return res.status(400).send({error:"Neteisingi atnaujinimo laukai"});
        }

        //Einame per visus atnaujinamus laukus
        updates.forEach((update) => {
            //Sename įraše pakeičiame laukų reikšmes naujomis
            service[update]=req.body[update];
        });
        //Išsaugome naują įrašą į duomenų bazę
        await service.save();

        //Išsiunčiame pakeistą įrašą
        res.send(service);
    } catch (error) {
        res.status(400).send(error);
    }   
});

router.delete('/services/:id', async (req, res)=>{
    try{
        const service=await Service.findByIdAndDelete(req.params.id);
        if(!service){
            return res.status(404).send({error:"nerastas"})
        }
        return res.send(service);
    }catch(error) {
        res.status(500).send(error);
    }
});


module.exports=router;