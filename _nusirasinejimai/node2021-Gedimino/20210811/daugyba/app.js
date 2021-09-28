const http=require('http');

const server=http.createServer((req, resp)=>{
    const url=req.url;
    const method=req.method;
    
    
    console.log("Įvyko įvykis");
    console.log(url);
    console.log(method);

    resp.setHeader('Content-Type', 'text/html');
    resp.write("<html>");
    resp.write("<head><title>Puslapis</title>");
    resp.write("<style>");
    resp.write("td { width:30px; height:30px; text-align:center; } ")

    resp.write("</style>");

    resp.write("</head>");
    resp.write("<body>");
    resp.write("<h1>Daugybos lentele</h1>");

    resp.write("<table border='1'>");

    for (let i=1; i<=10; i++){
        resp.write("<tr>");
        for(let y=1; y<=10; y++){
            resp.write("<td>"+(i*y)+"</td>")
        }
        resp.write("</tr>");
    }

    resp.write("</table>");
    
    resp.write("</body></html>");
    resp.end();
});

server.listen(3000, 'localhost');

