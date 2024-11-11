import React from 'react'
import { Link ,useNavigate} from 'react-router-dom'




const Navbar = () => {
  let data=localStorage.getItem('user')
  let navigate=useNavigate()
  let logout=()=>{
    localStorage.clear()
    navigate('/Sign')

  }
  return (
   <>
   <div className="main">
    <img src="logo.png" alt="" />
    
    <h2 className='logo'>PicStream</h2>

<ul className='item'>
 <li><Link to='/'>HOME</Link></li>
 <li><Link to='/About'>ABOUT</Link></li>
 <li><Link to='/Contact'>CONTACT-US</Link></li>
 <li><Link to='/Prompt'>GENERATE NOW</Link></li>


</ul>
   
<div className="right">
  {
    data?<Link onClick={logout} to='/Sign'><button>Logout</button></Link>:
    <><Link to='/Login'><button>Login</button></Link><Link to='/Sign'><button id='signupbtn'>Sign-up</button></Link></>
  }
 {/* <Link to='/Login'><button>Login</button></Link>
<Link to='/Sign'><button>Sign-up</button></Link> */}

</div>
 
   </div>
 
   </>
  )
}

export default Navbar