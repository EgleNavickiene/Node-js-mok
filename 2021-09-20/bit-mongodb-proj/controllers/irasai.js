const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const irasaimodel = mongoose.model('irasai');

//cia yra irasaiController
router.get('/', (req, res)=>{
    
    irasaimodel.find((error, informacija) =>{
        if(!error) {
            //console.log(informacija);
            //res.json(informacija)
            //res.send(informacija);
            informacija.forEach((item)=> {
                
                var data = new Date(item.data);                
                item.data = data.toLocaleDateString('lt-LT');
                item._id = item._id.toString();
            });
            
            res.render('list', {data: informacija});
            //res.send('Klaidos nėra. Įrašų puslapis LT');
            
        } else {
            res.send('Klaida');
        }
    })
    .collation({locale:"lt"})
    .sort({pavadinimas: 1})
    .lean();
});

router.get('/rusiavimas/desc', (req, res)=>{
    
    irasaimodel.find((error, informacija) =>{
        if(!error) {
            //console.log(informacija);
            //res.json(informacija)
            //res.send(informacija);
            informacija.forEach((item)=> {
                
                var data = new Date(item.data);                
                item.data = data.toLocaleDateString('lt-LT');
                item._id = item._id.toString();
            });
            
            res.render('list', {data: informacija});
            //res.send('Klaidos nėra. Įrašų puslapis LT');
            
        } else {
            res.send('Klaida');
        }
    })
    .collation({locale:"lt"})
    .sort({pavadinimas: -1})
    .lean();
});

// ------------ pagal datą rikiavimas
router.get('/rusiavimas/data', (req, res)=>{
    
    irasaimodel.find((error, informacija) =>{
        if(!error) {
            //console.log(informacija);
            //res.json(informacija)
            //res.send(informacija);
            informacija.forEach((item)=> {
                
                var data = new Date(item.data);                
                item.data = data.toLocaleDateString('lt-LT');
                item._id = item._id.toString();
            });
            
            res.render('list', {data: informacija});
            //res.send('Klaidos nėra. Įrašų puslapis LT');
            
        } else {
            res.send('Klaida');
        }
    })
    .collation({locale:"lt"})
    .sort({data: 1})
    .lean();
});
// -------------



router.get('/pridejimas', (req, res)=>{
    var date = new Date;

    res.render('add');
    //console.log(req.body);
});

router.get('/edit/:id', (req, res)=>{
    const id = req.params.id;

    irasaimodel.findById(id).lean()
        .then(info =>{

            var data = new Date(info.data);                
            info.data = data.toLocaleDateString('lt-LT');

            res.render('edit', {edit: info});        
        })
        .catch (err =>{
            res.json({
                response: "fail",
                message: err.message
            });
    });
    //res.render('edit',);
});

// --------------- 09-24 d. savarankiska uzduotis - pridėti mygtukus "redaguoti"
router.get('/preview/:id', (req, res)=>{
    const id = req.params.id;    

    irasaimodel.findById(id).lean()
        .then(info =>{

            var data = new Date(info.data);                
            info.data = data.toLocaleDateString('lt-LT');

            res.render('preview', {preview: info});        
        })
        .catch (err =>{
            res.json({
                response: "fail",
                message: err.message
            });
    });    
});
// ---------------

router.post('/submit', (req, res)=>{

    //irasu pridejimas:
    var irasas = new irasaimodel();
    irasas.pavadinimas = req.body.pavadinimas;
    irasas.turinys = req.body.turinys;
    irasas.data = req.body.data;
    irasas.save();
    
    res.redirect('/irasai');
});

router.post('/edit_submit', (req, res)=>{
        
    irasaimodel.findByIdAndUpdate(req.body.id,{
        pavadinimas:req.body.pavadinimas,
        turinys: req.body.turinys,
        data: req.body.data
    }).then(data => {
        //console.log(data);
        res.redirect('/irasai');
    });       
});

//----------- trynimo mygtuko pridejimas


router.get('/delete/:id', (req, res)=>{
    const id = req.params.id;

    irasaimodel.findByIdAndRemove(id).lean()
        .then(data =>{

            res.redirect('/irasai');        
        })
        .catch (err =>{
            res.json({
                response: "fail",
                message: err.message
            });
    });
    
});
//-----------


router.post('/paieska', (req, res)=>{
    const s = req.body.s;
    //res.send(s);

    irasaimodel.find(  {$text: {$search: s}},  (error, informacija) =>{
        if(!error) {   
            //console.log(informacija)         ;

            informacija.forEach((item)=> {
                
                var info = new Date(item.data);                
                item.data = info.toLocaleDateString('lt-LT');
                item._id = item._id.toString();
            });
            //res.json(informacija);
            res.render('searchresult', {s:s, info: informacija});
            
        } else {
            res.send('Klaida');
        }
    })
    .collation({locale:"lt"})
    .lean();
});


module.exports = router;