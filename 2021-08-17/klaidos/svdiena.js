const svdiena = (diena) => { //1 kint.

    let sdiena = diena+4;

    debugger 
    sdiena = sdiena % 7;
    debugger             //stabdo kodo vykdyma (terminale paleidziam komanda: node inspect app.js)

    switch (sdiena) {
        case 0:
            return "Sekmadienis";
        case 1: 
            return "Pirmadienis";            
        case 2:
            return "Antradienis";            
        case 3:
            return "Trečiadienis";            
        case 4:
            return "Ketvirtadienis";
        case 5:
            return "Penktadienis";
        case 6:
            return "Šeštadienis";        
    }
    
}

module.exports=svdiena;  //isekspituoja 1 kintamaji (funkc)