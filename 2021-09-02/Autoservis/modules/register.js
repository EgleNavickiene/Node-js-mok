const fs=require('fs');

const getRegister=()=>{
    
    const data=fs.readFileSync('./data/register.json').toString();
    const register=JSON.parse(data);
    //console.log(register);
    return register;
    
 };

 const adminRegister=(name, marke, metai, problema)=>{
     const register=getRegister();
     register.push({
         name: name,
         marke: marke,
         metai: metai,
         problema: problema
     });
     fs.writeFileSync('./data/register.json', JSON.stringify(register));
 }


module.exports={getRegister, adminRegister};