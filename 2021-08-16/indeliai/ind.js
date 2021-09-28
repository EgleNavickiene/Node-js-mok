const ind = (x, p, t) => {
    
    let pMetu;

    for (let i=t; i>=1; i--){        
        
        pMetu= x*(p*0.01);
        x = x+pMetu;
  
    }
    return x;
}

module.exports=ind;

// x=indelis
// p=palukanos
// t=metai