const http = require('http');
const fs = require('fs');
const pirminis = require('./skaicius');
//const skaicius = require('./skaicius');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if(method==='POST' && url==='/skaiciuoti') {
        const body=[];
        req.on('data', (chunk) => {
            body.push(chunk);
        });

        req.on('end', () =>{
            let d=Buffer.concat(body).toString();
            let v=d.split('&');
            let skaicius = parseInt(v[0].split('=')[1]);
            let sk = pirminis(skaicius);

            let data = fs.readFileSync('result.html', 'utf-8');
            data = data.replace("{{rezultatas}}", sk)
            res.setHeader('Content-Type', 'text/html');
            res.write(data);
            return res.end();
    })
    }else {
        let data = fs.readFileSync('index.html', 'utf-8');
        res.setHeader('Content-Type', 'text/html');
        res.write(data);
        return res.end();
    }

});

server.listen(3022, 'localhost');