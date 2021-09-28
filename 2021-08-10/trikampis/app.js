//---uzduotis TRIKAMPIS

const {trikampis, arTrikampis} = require("./trikampis");

let a = parseInt(process.argv[2]);
let b = parseInt(process.argv[3]);
let c = parseInt(process.argv[4]);

arTrikampis(a, b, c);
console.log(trikampis(a, b, c));
