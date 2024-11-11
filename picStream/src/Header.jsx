import React from 'react'
import { ReactTyped } from 'react-typed'

const Header = () => {
  return (
   <>
   <div className="header">
    <div className="content">
    
        <h1 className='heading'>EFFORTLESSLY CREATE STUNNING <br />
             <ReactTyped className='spn' strings={ ["THE AI-GENRATED IMAGES"]} typeSpeed={70} backSpeed={50} loop={true}/> </h1>
      
       
    </div>
  
    <div className="image">
        
<p className='paragraph'>Genrate your image to create breathtaking AI-genrated visuals in minutes</p>

<div className="inside_img">
    <img src="image.jpg" alt="" style={{height:'545px', width:'100%', backgroundRepeat:'no-repeat', borderRadius:'15px'}}/>
    
</div>

    </div>
 
   </div>
   </>
  )
}

export default Header