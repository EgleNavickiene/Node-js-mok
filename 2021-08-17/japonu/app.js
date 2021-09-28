const http=require('http');
const fs=require('fs');         //fs modulis
const path=require('path');
const metai = require('./metai');

const server = http.createServer((req, res) => {

    const url=req.url;
    const method=req.method;
    let file='./public'+url;  //kintamasis su failo pavadinimu

    // patikrinsim ar "item" egzistuoja ir ar jis yra failas
    if(fs.existsSync(file) && fs.lstatSync(file).isFile()){
        let stream = fs.readFileSync(file);
        const ext=path.parse(file).ext    //paima failo galuen(extention)
        if(ext=='css') res.setHeader('Content-Type', 'text/css');
        if(ext=='png') res.setHeader('Content-Type', 'image/png');
        if(ext=='jpg') res.setHeader('Content-Type', 'image/jpg');

        res.write(stream);
        return res.end();
    }
    //formoj paspaudus "skaiciuoti", atejo su post metodu ir url  metai
    if(method==='POST' && url==='/metai') {
        let data=[];
        req.on('data', (chunk) => {     // i masyva sudedam atsiustus duomenis
            data.push(chunk);
        });
        req.on('end', () => {
            const d=Buffer.concat(data).toString(); // pasiimam duomenis
            const m=parseInt(d.split('=')[1]);  //atskiriam metus (viena skaiciu)
            const spalva = metai(m);

            let stream=fs.readFileSync('./template/index.html','utf-8'); //Nuskaitome failo turinį į kintamąjį stream
            stream=stream.replace('{{result}}', m+' metų spalva yra '+ '<b>'+spalva +'</b>');
            res.setHeader('Content-Type', 'text/html'); //Nusiuntėme headerį
            res.write(stream); //Išvedėme vartotojui failą
            debugger
            return res.end(); //Uždarome persiuntima ir nutraukiame f-ją
        });
    } else {

        let stream=fs.readFileSync('./template/index.html','utf-8'); //Nuskaitome failo turinį į kintamąjį stream
        stream=stream.replace('{{result}}', 'iveskite metus ir paspauskite "skaiciuoti"');
        res.setHeader('Content-Type', 'text/html'); //Nusiuntėme headerį
        res.write(stream); //Išvedėme vartotojui failą
        return res.end(); //Uždarome persiuntima ir nutraukiame f-ją
    }
});



server.listen(3000, 'localhost');