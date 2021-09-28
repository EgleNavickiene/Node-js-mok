const http=require('http'); 
const fs = require('fs');

const server=http.createServer( (req, resp)=>{
   const url=req.url;
   const method=req.method;
  

   if (url==='/rezultatas' && method==='POST'){
       console.log("- Irasysime zinute");
       const body=[];
       req.on('data', (dalis)=>{
           body.push(dalis);
           console.log("- Gavau viena gabala:"+dalis);
       });
       req.on('end', ()=>{
           let bs=Buffer.concat(body).toString();
           console.log("- Gavau visa informacija:"+bs);
           let x=bs.split('=')[1] ;
           x=x.replace(/\+/g,' ');

           fs.appendFileSync("duomenys.txt", x+"\n");
           resp.setHeader('Content-Type','text/html');
           resp.write('<html>');
           resp.write('<head>');
           resp.write('<title>Uzrasine</title>');
           resp.write('<meta charset="utf-8">');
           resp.write('</head>');
           resp.write('<body>');
           
           resp.write("Irasyta: "+ x + "<br><br>");
           resp.write('</body>');
           resp.write('</html>');
           return resp.end();
       });
   }else{
        resp.setHeader('Content-Type','text/html');
        resp.write('<html>');
        resp.write('<head>');
        resp.write('<title>UŽRAŠINĖ</title>');
        resp.write('<meta charset="utf-8">');
        resp.write('</head>');
        resp.write('<body>');
        resp.write('<h3>UŽRAŠINĖ</h3>');
        resp.write('<form action="rezultatas" method="post">');
        resp.write('<input type="text" name="tekstas"><br>')
           resp.write('<button type="submit">Irasyti</button>')
        resp.write('</body>');
        resp.write('</html>');
        resp.end();
    }
});

server.listen(8005, 'localhost');