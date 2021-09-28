const validator = require('validator');

if(validator.isURL('https://www.delfi.lt/')) {
    console.log("URL teisingas");
} else (console.log("URL neteisingas")); 