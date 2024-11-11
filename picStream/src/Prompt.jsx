import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import { json ,useNavigate} from 'react-router-dom';


const Prompt = () => {
  let [prompts,setprompt]=useState("")
  let [count, setcount]=useState(" ")
  let [images,setimages]=useState([])
  let canceldata=useRef("")
  // let cancelcount=useRef("")
   let dataitem=localStorage.getItem('user')
   let navigate=useNavigate()

  let handlesubmit=(e)=>{
  e.preventDefault()
  canceldata.current.value=""
  
 if(!dataitem){
navigate('/Sign')
 }
 fetchdata()
  }
 
  let fetchdata=async()=>{
    let api= await fetch(`https://api.unsplash.com/search/photos?page=1&query=${prompts}&client_id=88xDbvrMCGvU4vfkFz6yWUpJpp4l1YbbYgIQvMl2qfw`)
    let response= await api.json()
    setimages(response.results)
  
    
  }

  return (
   <>
  
  <div  className="main_prompt">
    <div className="left_content">
    
   <img src="promptimg.webp" alt="" /> 
    <span className='line'></span>
    <span className='line2'></span>
    <span className='line3'></span>
    </div>
    <div className="right_content">
      <div className="promptcontent">

      <h1>Refine Your <br />AI-Generated <br />Image</h1>
      <p>PicStream enables you to not only generate  <br />stunning images but alse refine and edit <br /> them with powerful AI tools.</p>
      </div>
   
    <form action="" onSubmit={handlesubmit}>
<input type="text" 
name="text" id="prompt"
placeholder='Enter The Prompt' 
autoComplete='off' 
required
onChange={(e)=>setprompt(e.target.value)}
ref={canceldata}
  /> <br />
{/* <input type="text"
 name="text" id="number_img"
  placeholder='No Of Image'
  required 
  autoComplete='off'
  onChange={(e)=>setcount(e.target.value)}
  />  */}
{/* <select name="select"
 id="number_img"
 
 onChange={(e)=>setcount(e.target.value)}
 ref={cancelcount}

>
  <option value="select">select</option>
 <option value=" 1"> 1</option>
 <option value=" 2"> 2</option>
 <option value=" 3"> 3</option>
 <option value=" 4"> 4</option>
 <option value=" 5"> 5</option>
 <option value=" 6"> 6</option>
 <option value=" 7"> 7</option>
 <option value="8"> 8</option>
 <option value=" 9"> 9</option>
 <option value="10"> 10</option>

</select> */}
<button type="submit" class="submit">Generate Now</button>
</form>
    </div>
    </div>
    <div className="promptimage">
    {images.map((value, index) => (
          <div class="generated_image" key={index}>
           <img src={value.urls.small} alt="generated" download/>
          </div>
        ))}
 </div>
   </>
  )
}

export default Prompt