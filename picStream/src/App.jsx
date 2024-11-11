import React from 'react'
import './App.css'
import Navbar from './Navbar'
import Prompt from './Prompt'
import Header from './Header'
import Footer  from './Footer'
import Contact from './Contact'
import About from './About'
import Policy from './Policy'
import Login from './Login'
import Sign from './Sign'
import Pagenotfound from './pagenotfound'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
const App = () => {
  return (
    <>
<BrowserRouter>
<Navbar/>
<Routes>
<Route path='/' element={<><Header/><Prompt/><About/><Contact/></>}/>
<Route path='/About' element={<About/>}/>
<Route path='/Contact' element={<Contact/>}/>
<Route path='/Prompt' element={<Prompt/>}/>
<Route path='/Footer' element={<Footer/>}/>
<Route path='/Policy' element={<Policy/>}/>
<Route path='/Login' element={<Login/>}/>
<Route path='/Sign' element={<Sign/>}/>
<Route path='/*' element={<Pagenotfound/>}/>



</Routes>
<Footer/>
</BrowserRouter>



      
    </>
  )
}

export default App