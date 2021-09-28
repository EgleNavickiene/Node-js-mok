const fs=require('fs');

const getPaslaugos=()=>{
    
    const data=fs.readFileSync('./data/paslaugos.json').toString();
    const paslaugos=JSON.parse(data);
    //console.log(paslaugos);
    return paslaugos;
    
 };


module.exports={getPaslaugos};