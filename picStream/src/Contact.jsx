import React, { useRef, useState } from 'react';
import './App.css';
import { json ,useNavigate } from 'react-router-dom';

function Contact() {
  let [name,setname] = useState(" ")
  let [email,setemail]=useState("")
  let [msg,setmsg]=useState(" ")
  let cancelname=useRef("")
  let cancelemail=useRef("")
  let cancelmsg=useRef("")
 let item=localStorage.getItem('user')
 let navigate=useNavigate()
  let handleSubmit=(e)=>{
         e.preventDefault()
         cancelname.current.value=""
         cancelemail.current.value=""
         cancelmsg.current.value=""
         if(!item){
          navigate('/Sign')
         }
        contactdata()
  }


  let contactdata=async()=>{
    let result= await fetch("http://localhost:5000/contacts",{
      method: 'post',
      body: JSON.stringify({name,email, message: msg }),
      headers:{
        'Content-Type':'application/json'
      },
    })
    let data= await result.json()
  
    
    }
    

  return (
    <>
   
    <div  className="main_contact">

    <div className="contact_img">
      <img src="contact_img5.jpg" alt="" />
    </div>
    <div className="contact">
      <h1 id='contact_us'>Contact Us </h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>  <br />
          <input
            type="text"
            id="name"
            name="name"
           placeholder='Enter Your Name'
            required
            onChange={(e)=>setname(e.target.value)}
            ref={cancelname}
            autoComplete='off'
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label> <br />
          <input
            type="email"
            id="email"
            name="email"
            placeholder='Enter your Email'
            onChange={(e)=>setemail(e.target.value)}
            required
            ref={cancelemail}
            autoComplete='off'
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label> <br />
          <textarea
            id="message"
            name="message"
            onChange={(e)=>setmsg(e.target.value)}
            required
            ref={cancelmsg}
            
          ></textarea>
        </div>

        <button type="submit" id='contact_btn'>Submit</button>
      </form>

     
    </div>
   
    </div>
 
    </>
  );
  
}

export default Contact;


