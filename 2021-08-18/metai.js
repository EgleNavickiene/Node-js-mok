
const metai = (metai) => {
    let cm = metai-1896;
    let olimpNr=((metai-1896)/4+1)

    if (cm%4 === 0 && metai>1896 ) {
        return " olimpiniai. Žaidynių numeris "+olimpNr;
    }  else {
        return " ne olimpiniai.";
    }  
};



module.exports=metai;
module 