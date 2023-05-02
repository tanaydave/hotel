import React from 'react'
import './app.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Popular from './components/Popular/Popular'
import Offers from './components/Offers/Offers'
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer'
import { Tanay } from './components/Tanay/Tanay'
import Signin from './components/Signin/Signin'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
const App = () => {
  return (

    <div>
      <Router>
        {/* <Navbar/> */}
        {/* <Tanay /> */}
        
        <Routes>
          <Route path='/home' element={<Tanay/>}/>
          <Route path='/' element={<Signin/>}/>
        </Routes>
      </Router>



    </div>

  )
}

export default App
