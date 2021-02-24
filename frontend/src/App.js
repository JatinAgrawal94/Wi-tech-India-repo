import './App.css';
import React,{useState} from 'react'
import Axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

function App() {
  const [name,changeName]=useState("");
  const [email,changeEmail]=useState('');
  const [password,changePassword]=useState("");
  const [confirmpassword,changeconfirmPassword]=useState("");
  const [message,changemessage]=useState();
  const formSubmitHandler=(e)=>{    
    e.preventDefault();

    if(password !== confirmpassword){
      alert("Passwords donot Match !");
    }else{
      Axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/formsubmit`,{name,email,password,confirmpassword})
      .then((response)=>{
        console.log(response);
        changemessage(response.data);
      })
      .catch((reject)=>{
        console.log(reject);
        changemessage(reject.data);
      })
    }

  }
  return (
    <div className="App">
      <form onSubmit={formSubmitHandler}>  
        <h1>Registration Form</h1>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input type="text"  onChange={(e)=>changeName(e.target.value)} value={name} required/>
        </div>

        <div className="form-control">
        <label htmlFor="email">Email</label>
        <input type="text" onChange={(e)=>changeEmail(e.target.value)}value={email} required />
        </div>

        <div className="form-control">
        <label htmlFor="password">Password</label>
        <input type="password" onChange={(e)=>changePassword(e.target.value)} value={password} required/>
        </div>

        <div className="form-control">
        <label htmlFor="confirmpassword">Confirm Password</label>
        <input type="password" onChange={(e)=>changeconfirmPassword(e.target.value)} value={confirmpassword} required />
        </div>
        <button type="submit">Submit</button>
      </form>
        <p>{message}</p>
    </div>
  );
}

export default App;
