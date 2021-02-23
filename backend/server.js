const express=require('express');
const app=express();
const bodyparser=require('body-parser')
const mongoose=require('mongoose')
const expressAsyncHandler=require('express-async-handler')
const cors=require('cors');
const form=require('./models/formModel');
require('dotenv').config();


app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:true}));

// mongodb://localhost/witech
mongoose.connect(`${process.env.MONGODB_URL}`,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
    useFindAndModify:false
});


app.post('/api/formsubmit',expressAsyncHandler(async(req,res)=>{
    const result=await form({name:req.body.name,email:req.body.email,password:req.body.password,confirmpassword:req.body.confirmpassword});
    const formresult=await result.save();
    res.send("User Registed!")
}))


const port =process.env.PORT || 5000

app.listen(port,()=>{
    console.log(`Server is listening at ${port}`);
})