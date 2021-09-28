//---uzduotis TRIKAMPIS
// a+b>c a+c>b b+c>a

const chalk = require('chalk');

const trikampis=(a, b, c) => {
   
    if(a+b>c && a+c>b && b+c>a){        
        return true;
    } else {
        return false;
    }
}

const arTrikampis=(a, b, c) => {
    if (trikampis(a, b, c)) {        
         console.log(chalk.green("Trikampį nubraižyti galima"));
         if (a==b && a==c ){
            console.log("jis bus lygiakrastis");
        }else  if((a==b  || b==c || c==a )) {
            console.log("jis bus lygiasonis");
            }
            
       } else{
            console.log(chalk.red("Trikampio nubraižyti nepavyks"));   
        }
}

module.exports={trikampis, arTrikampis};
//------------------------------------------------