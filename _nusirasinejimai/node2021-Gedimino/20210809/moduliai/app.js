let {vardas, pavarde}=require('./user');

var validator = require('validator');


if (validator.isEmail("gediminas?gmai.com")){
    console.log("Emailas");
}
