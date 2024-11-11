import React, { useEffect, useRef, useState } from "react";
import "./Sign.css";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate=useNavigate()
  let cancelname=useRef("")
  let cancelemail=useRef("")
  let cancelpswd=useRef("")

  const handleSubmit = (e) => {
    e.preventDefault();    
    cancelname.current.value=""
    cancelemail.current.value=""
    cancelpswd.current.value=""
collectdata()
  };
let collectdata=async()=>{
let result= await fetch("http://localhost:5000/register",{
  method: 'post',
  body: JSON.stringify({username,email,password}),
  headers:{
    'Content-Type':'application/json'
  },
})
let data= await result.json()

localStorage.setItem("user",JSON.stringify(data))
  navigate('/')
}

useEffect(()=>{
  let data=localStorage.getItem('user')
  if(data){
    navigate('/')
  }
})

  return (
    <div className="mainsign">
    <div className="signup-page">
      <div className="signup-container">
        <h2>Create an Account</h2>
        <p>Sign up to start generating AI-based images</p>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              ref={cancelname}
            />
          </div>
          <div className="input-group">
            <input
              type="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              ref={cancelemail}
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              ref={cancelpswd}
            />
          </div>
          <button type="submit" className="signup-button">
            Sign Up
          </button>
        </form>
        <p className="login-link">
          Already have an account? <Link to='/Login'>Login</Link>
        </p>
      </div>
    </div>
    </div>
  );
}

export default SignUp;
