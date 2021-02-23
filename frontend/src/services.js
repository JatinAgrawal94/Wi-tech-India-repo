import Axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

export const SubmitForm=async(name,email,password,confirmpassword)=>{
    try{
        const {data}=await Axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/formsubmit`,{name,email,password,confirmpassword});
        console.log(data);
    }catch(error){
        console.log(error);
    }   
}


export async function Submition(name,email,password,confirmpassword){
    console.log(`${process.env.REACT_APP_BACKEND_URL}/api/formsubmit`);
    const response=await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/formsubmit`,{
        method:'POST',
        mode:'cors',
        cache:'no-cache',
        headers:{'Content-Type':'application/json'},
        redirect:'follow',
        referrerPolicy:'no-referrer',
        Expires:'Tue',
        body:JSON.stringify({name:name,email:email,password:password,confirmpassword:confirmpassword})
    });
    return response.json();
}