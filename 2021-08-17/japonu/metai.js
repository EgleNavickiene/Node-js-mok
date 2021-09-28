const metai = (metai) => {
    let cm = metai-1983;

    switch (cm % 10) {
        case 1:
        case 2: return "žalia";
        case 3:
        case 4: return "raudona";
        case 5:
        case 6: return "geltona";
        case 7:
        case 8: return "balta";
        case 9:
        case 0: return "juoda";
    }    
};

module.exports=metai;