import './App.css';
import React,{useState} from 'react'
import {SubmitForm} from './services';
import dotenv from 'dotenv';
dotenv.config();

function App() {
  const [name,changeName]=useState();
  const [email,changeEmail]=useState();
  const [password,changePassword]=useState();
  const [confirmpassword,changeconfirmPassword]=useState();
  
  const formSubmitHandler=()=>{
    
    if(password !== confirmpassword){
      alert("Passwords donot Match !");
    }else{
      SubmitForm(name,email,password,confirmpassword)
      .then(data=>console.log(data))
      .catch(err=>console.log(err));
    }
    
  }

  return (
    <div className="App">
      <form>  
        <h1>Registration Form</h1>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input type="text" onChange={(e)=>changeName(e.target.value)} required/>
        </div>

        <div className="form-control">
        <label htmlFor="email">Email</label>
        <input type="text" onChange={(e)=>changeEmail(e.target.value)} required />
        </div>

        <div className="form-control">
        <label htmlFor="password">Password</label>
        <input type="password" onChange={(e)=>changePassword(e.target.value)} required/>
        </div>

        <div className="form-control">
        <label htmlFor="confirmpassword">Confirm Password</label>
        <input type="password" onChange={(e)=>changeconfirmPassword(e.target.value)} required />
        </div>
        <button onClick={formSubmitHandler} type="buttton">Submit</button>
      </form>
    </div>
  );
}

export default App;
