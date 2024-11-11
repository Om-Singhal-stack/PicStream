
import React, { useEffect, useRef, useState } from 'react';
import './Login.css';
import { Link,useNavigate } from 'react-router-dom';


function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let cancelemail=useRef("")
  let cancelpswd=useRef("")
  let navigate=useNavigate()

  const handleLogin = (e) => {
    e.preventDefault();
    fetchdata()
 cancelemail.current.value=""
 cancelpswd.current.value=""
  
  };

  let fetchdata=async()=>{
    let result= await fetch("http://localhost:5000/login",{
      method: 'post',
      body: JSON.stringify({email,password}),
      headers:{
        'Content-Type':'application/json'
      },
    })
    result= await result.json()
   if(result.email){
    localStorage.setItem("user",JSON.stringify(result))
    navigate('/')
   } else{
    alert("please enter valid details")
   }
  }


  useEffect(()=>{
    let data=localStorage.getItem('user')
if(data){
  navigate('/')
}
  })

  return (
    <div className="login-container" >
      <div className="login-box">
        <h2 id='loginheading'> Login </h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="loginemail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              ref={cancelemail}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="loginpassword"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              ref={cancelpswd}
            />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        <p className="signup-link">
          Create New Account? <Link to='/Sign'>Sign-up</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;




