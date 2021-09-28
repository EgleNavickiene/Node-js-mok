const http=require('http'); 
const fs=require('fs');

const server=http.createServer( (req, resp)=>{
   const url=req.url;
   const method=req.method;
  

   if (url==='/rezultatas' && method==='POST'){
       console.log("Atliksime skaiciavima");
       const body=[];
       req.on('data', (dalis)=>{
           body.push(dalis);
           console.log("Gavau gabala:"+dalis);
       });
       req.on('end', ()=>{
           let bs=Buffer.concat(body).toString();
           console.log("Gavau visa informacija:"+bs);
           let x=bs.split('=')[1] ;
           x=x.replace( /\+/g ," ");
           fs.appendFileSync("duomenys.txt",x+"\n");

           resp.setHeader('Content-Type','text/html');
           resp.write('<html>');
           resp.write('<head>');
           resp.write('<title>Skaičiuoklė</title>');
           resp.write('<meta charset="utf-8">');
           resp.write('</head>');
           resp.write('<body>');
           
           resp.write("Įrašyta: "+x);
           resp.write('</body>');
           resp.write('</html>');
           return resp.end();
       });
   }else{
        resp.setHeader('Content-Type','text/html');
        resp.write('<html>');
        resp.write('<head>');
        resp.write('<title>Skaičiuoklė</title>');
        resp.write('<meta charset="utf-8">');
        resp.write('</head>');
        resp.write('<body>');

        resp.write('<form action="rezultatas" method="post" >');
        //Metodai: GET, POST - išsiunčiami inputų duomenys 
        //GET - duomenis patalpina į adresą (http://delfi.lt/?id=57885&name=Gediminas)
        //POST - duomenis patalpina į request body t. y. duomenys nematomi vartotojui
        resp.write('<input type="text" name="tekstas"><br>');
        
        resp.write('<button type="submit">Įrašyti</button>')
        resp.write('</form>');

        resp.write('</body>');
        resp.write('</html>');
        resp.end();
    }
});

server.listen(3000, 'localhost');