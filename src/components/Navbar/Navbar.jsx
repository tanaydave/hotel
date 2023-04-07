import React,{useState} from 'react'
import './navbar.scss'
import {SiTransportforlondon} from 'react-icons/si';
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'
const Navbar = () => {

const[active,setActive]= useState('navBar');

const showNav = ()=>{
  setActive('navBar activeNavbar')
}
const hideNav = ()=>{
  setActive('navBar')
}
// const [vis,setVis]= useState(true);
// const visibility =  ()=>{
//   setVis(!vis)
// }
// vis ? setActive('navBar activeNavbar'): setActive('navBar')



  return (
    
      <section className='navBarSection'>
        <div className='header'>
          <div className='logoDiv'>
            <a href="#" className="logo">
              <h1 className='flex'>
                <SiTransportforlondon className="icon" />
                Travel
              </h1>
            </a>


          </div>
          <div className={active}>
            <ul className="navLists flex">

              <li className="navItem">
                <a href="#" className="navLink">
                  Home
                </a>
              </li>
              
              <li className="navItem">
                <a href="#" className="navLink">
                  Product
                </a>
              </li>

              <li className="navItem">
                <a href="#" className="navLink">
                  Resources
                </a>
              </li>
              
              <li className="navItem">
                <a href="#" className="navLink">
                  Contact
                </a>
              </li>
              
              <li className="navItem">
                <a href="#" className="navLink">
                  Blog
                </a>
              </li>
              <div className="headerBtns flex">
                <button className="btn loginBtn">
                  <a href="#">Login</a>
                </button>
                <button className="btn">
                  <a href="#">Sign Up</a>
                </button>
              </div>

            </ul>
            <div onClick={hideNav} className="closeNavbar">
              <AiFillCloseCircle className="icon"/>
            </div>
          </div>
          <div onClick={showNav} className="toggleNavbar">
            <TbGridDots className="icon"/>
        
          </div>

        </div>
      </section>
    
  )
}

export default Navbar