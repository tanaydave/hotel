import React from 'react'
import './footer.scss'
import {ImFacebook} from 'react-icons/im';
import {AiFillInstagram} from 'react-icons/ai';
import {BsTwitter} from 'react-icons/bs';
// import {SiTransportforLondon} from 'react-icons/si';

const Footer = () => {
  return (
    <div className="footer">
      <div className="secContainer container grid">
        <div className="logoDiv">

          <div className="footerLogo">
            <a href="#" className='logo flex'>
              <h1 className="flex">
                {/* <SiTransportforLondon className="icon"/>  */}
                Travel
              </h1>
            </a>
          </div>
        
        <div className="socials flex">
          <ImFacebook className="icon"></ImFacebook>
           <BsTwitter className="icon"></BsTwitter>
           <AiFillInstagram className="icon"></AiFillInstagram>

        </div>
        

      </div>
      <div className="footerLinks">
        <span className="linkTitle">
          Information


        </span>
        

        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Explore</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">Travel </a>
        </li>
      </div>
      <div className="footerLinks">
        <span className="linkTitle">
          Contact Us
        </span>
        <span className="phone">+00000000</span>
         <span className="email">travel@gmail.com</span>
      </div>
      </div>

    </div>
  )
}

export default Footer