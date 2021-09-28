const http=require('http'); //Prisidedame HTTP moduli
const fs=require('fs');     //Prisidedame FS moduli

//Sukuriam serveri ir paduodame f-ją kuri aptarnaus vartotojų užklausas
const server=http.createServer((req, res)=>{
    const url=req.url;         //  /informacija.txt
    const method=req.method;
    
    
    let file='./public'+url;   //Turime kintamaji su failo pavadinimu: ./public/informacija.txt
    //Patikrinsim ar failas egzistuoja ir ar jis yra failas
    if (fs.existsSync(file) && fs.lstatSync(file).isFile()){
        let stream=fs.readFileSync(file,'utf-8'); //Nuskaitome failo turinį į kintamąjį stream
        res.setHeader('Content-Type', 'text/css'); //Nusiuntėme headerį
        res.write(stream); //Išvedėme vartotojui failą
        return res.end(); //Uždarome persiuntima ir nutraukiame f-ją
    }

    
    let stream=fs.readFileSync('./template/index.html','utf-8'); //Nuskaitome failo turinį į kintamąjį stream
    res.setHeader('Content-Type', 'text/html'); //Nusiuntėme headerį
    res.write(stream); //Išvedėme vartotojui failą
    return res.end(); //Uždarome persiuntima ir nutraukiame f-ją
})

server.listen(3000, 'localhost');