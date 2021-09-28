function daugyba(){
    for (let x=1; x<10; x++){
        console.log("2*"+x+"\t="+"(x*2)");
    }
}

daugyba();

console.log("\n1 uzduotis\n")
// 1 uzduotis - cm-inch lentele

console.log("Inch"+"\t"+"cm"+"\t|"+" cm"+"\t"+"Inch");

function cmToInch(){
    
    for (let x=1; x<=10; x++){
        console.log(x+"\t"+(x*2.54)+"\t|"+" "+x+"\t"+(x/2.54).toFixed(2));
    }
}

cmToInch(1);