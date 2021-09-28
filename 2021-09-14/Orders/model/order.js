const mongoose=require('mongoose');
const validator=require('validator');

const Order=mongoose.model('Order',{  
    service_id:{
        type:String,
        required:true,
        trim:true
    },  
    name:{
        type:String,
        required:true,
        trim:true,
        maxLength:24
    },
    surname:{
        type:String,
        required:true,
        trim:true,
        maxLength:24
    },
    email:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        maxLength:32,
        validate(value){
            if (!validator.isEmail(value)){
                throw new Error('El. paštas neteisingas');
            }
        }
    },
    phone:{
        type:String,
        required:true,
        maxLength:16,
        trim:true,
        validate(value){
            if(!validator.isMobilePhone(value,"lt-LT")){
                throw new Error('Telefono numeris įvestas neteisingai');
            }
        }
    }
});

module.exports=Order;