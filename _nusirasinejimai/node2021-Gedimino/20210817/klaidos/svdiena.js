const svdiena = (diena) => {      //Funckijai paduosime viena kintamaji 'diena'
    let sdiena=diena+4;           //Savaites diena skaiciumi
    debugger                      //Sustabdysime kodo vykdymą ir žiūrėsime kas vyksta
    sdiena=sdiena % 7;            //Padaliname iš 7 ir paimame liekaną 
    debugger                      //Sustabdysime kodo vykdymą ir žiūrėsime kas vyksta
    switch (sdiena){              //Parenkame reikšmę pagal kintamąjį sdiena
        case 1: 
            return "Pirmadienis"; //Jei sdiena==1
        case 2:
            return "Antradienis"; //Jei sdiena==2
        case 3:
            return "Trečiadienis";
        case 4:
            return "Ketvirtadienis";
        case 5:
            return "Penktadienis";
        case 6:
            return "Šeštadienis";
        case 0:
            return "Sekmadienis"; 
    }

    
}

module.exports=svdiena;  //Nurodome jog modulis eksportuoja viena kintamaji - funkcija