const pirminis = (skaicius) => {

        for (i=2; i<=skaicius; i++) {
            
        if (skaicius%i === 0 && skaicius>1) {
            return "skaicius "+skaicius+" ne pirminis skaicius";
        }        
    }   
    
    return "skaicius "+skaicius+" yra pirminis skaicius";
}

module.exports=pirminis;

// skaicius+" yra pirminis skaicius"
// skaicius+" ne pirminis skaicius"