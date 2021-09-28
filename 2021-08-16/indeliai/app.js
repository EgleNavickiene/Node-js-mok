const http=require('http');
const indHtml=require('./indHtml');

const server=http.createServer((req, res) => {
   const url=req.url;
   const method=req.method;
   if (url==='/skaiciuoti' && method=='POST'){
        const body=[];
        req.on('data', (chunk)=>{
            body.push(chunk);
        });
        req.on('end', ()=>{
            const d=Buffer.concat(body).toString();
            console.log(d);
            const v=d.split('&');
            const x=parseFloat(v[0].split('=')[1]);
            const p=parseFloat(v[1].split('=')[1]);
            const t=parseFloat(v[2].split('=')[1]);
            res.setHeader('Content-Type','text/html');
            res.write(indHtml.result(x,p,t));
            return res.end();
        });
   }else{
        res.setHeader('Content-Type', 'text/html');
        res.write(indHtml.index());
        res.end();
   }
});

server.listen(3000, 'localhost');