
const http=require('http'); 

const server=http.createServer( (req, resp)=>{
   const url=req.url;
   const method=req.method;
  

   if (url==='/rezultatas' && method==='POST'){
       console.log("- Atliksime skaiciavima");
       const body=[];
       req.on('data', (dalis)=>{
           body.push(dalis);
           console.log("- Gavau gabala:"+dalis);
       });
       req.on('end', ()=>{
           let bs=Buffer.concat(body).toString();
           console.log("- Gavau visa informacija:"+bs);
           let x=bs.split('=')[1] ;
           resp.setHeader('Content-Type','text/html');
           resp.write('<html>');
           resp.write('<head>');
           resp.write('<title>Skaičiuoklė</title>');
           resp.write('<meta charset="utf-8">');
           resp.write('</head>');
           resp.write('<body>');
           
           resp.write("Skaičius pakeltas kvadratu: "+(x*x)+ "<br><br>");
           resp.write('<button action="http://localhost:8001/" type="submit">Atgal</button>')
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
        resp.write('<input type="text" name="skaicius"><br>');
        
        resp.write('<button type="submit">Kvadratu</button>')
        resp.write('</form>');

        resp.write('</body>');
        resp.write('</html>');
        resp.end();
    }
});

server.listen(8001, 'localhost');