
const kart = (x, y)=>{
    for(let i=y; i<=x*y; i++){
        if(i%x==0 && i%y==0) {
            return i
        }
    }
}

module.exports=kart;