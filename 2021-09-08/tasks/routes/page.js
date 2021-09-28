const express=require('express');
const {ObjectId}=require('mongodb');

const router=express.Router();

//Atvaizduojame pagrindinį puslapį (lentelę)
router.get('/', async (req, res, next)=>{
  //Paimame įrašus iš duomenų bazės  
  let siandiena=new Date().toISOString().slice(0,10);
  const tasks=await db.collection('tasks').find({}).toArray();
  const statuses=await db.collection('status').find({}).toArray();
  const priorities=await db.collection('priority').find({}).toArray();
    res.render('index',{
      tasks:tasks,
      siandiena:siandiena,
      statuses:statuses,      
      priorities:priorities
    });
    
});

//Atvaizduojame formą naujo įrašo pridėjimui
router.get('/new', async (req, res, next)=>{
    let siandiena=new Date().toISOString().slice(0,10);
    const statuses=await db.collection('status').find({}).toArray();
    const priorities=await db.collection('priority').find({}).toArray();
    res.render('new',{
      siandiena:siandiena,
      statuses:statuses,
      priorities:priorities
    });
});

//Vykdome naujo įrašo pridėjimą
router.post('/new', (req, res, next)=>{
    //Idedame įrašus į duomenų bazę
    db.collection('tasks').insertOne(req.body).then((result)=>{
        res.redirect('/');
    });
    
});

//Atvaizduojame redagavimo formą, id gauname per GET ir paimame vartotojo duomenis
router.get('/edit', async (req, res, next)=>{
  //Paimame duomenis apie izduoti
  const task=await db.collection('tasks').findOne({
    _id:new ObjectId(req.query.id)
  });
  //Paimame uzduociu statusus
  const statuses=await db.collection('status').find({}).toArray();
  const priorities=await db.collection('priority').find({}).toArray();
  //Viską atvaizduojame
  res.render('edit', {
    task:task,
    statuses:statuses,
    priorities:priorities
  });
});

//Vyksta įrašo atnaujinimas, id paduodamas per GET kintamąjį, įrašai per POST
router.post('/edit', async (req, res, next)=>{
  db.collection('tasks').updateOne({
    _id:new ObjectId(req.query.id)
  },{
    //$set - atlieka įrašų pakeitimą 
    //req.body yra pilnas objektas su visais atributais, todėl į set mes jį visą tiesai ir siunčiam
    $set:req.body
  });
  res.redirect('/');
});

//Vyksta įrašo trynimas, id paduodamas per get kintamąjį
router.get('/delete', (req,res, next)=>{
   db.collection('tasks').deleteOne({
      _id:new ObjectId(req.query.id)
   });
   res.redirect('/');
});

module.exports=router;