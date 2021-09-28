const mongoose=require('mongoose');
const validator=require('validator');



const User=mongoose.Schema({
    email:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        unique:true,
        validate(value){
            if (!validator.isEmail(value)){
                throw new Error('El paštas neteisingas');
            }
        }
    },
    password:{
        type:String,
        required:true,
        trim:true,        
        validate(value){
           if(!validator.isStrongPassword(value)) {
               throw new Error('slaptazodos per paprastas')
           }
        }
    }
});


/*
const userScheme=new mongoose.model('User', Schema);

userScheme.pre('save', async function (next){
    const user=this;
    if(user.isModified(password))
});
*/

module.exports=User;