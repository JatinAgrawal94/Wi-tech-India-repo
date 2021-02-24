const mongoose=require('mongoose');


const formSchema=new mongoose.Schema({
    name:{type:String,requied:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    confirmpassword:{type:String,required:true}
},
{
    timestamps:true
});

const form=mongoose.model('form',formSchema);
module.exports=form;
