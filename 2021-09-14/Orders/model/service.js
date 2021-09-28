const mongoose=require('mongoose');
const validator=require('validator');

const Service=mongoose.model('Service',{    
    name:{
        type:String,
        required:true,
        trim:true,
        maxLength:160
    },
    description:{
        type:String,
        required:true,
        trim:true
        
    },
    price:{
        type:Number,
        required:true,        
        validate(value){
            if (value<=0){
                throw new Error('Kaina turi būti daugiau už 0');
            }
        }
    }
});

module.exports=Service;