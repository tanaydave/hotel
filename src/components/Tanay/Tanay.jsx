import React from 'react';
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import Popular from '../Popular/Popular';
import Offers from '../Offers/Offers';
import Blog from'../Blog/Blog';
import Footer from '../Footer/Footer';
import {BrowserRouter as Router, Route,Routes,Link}  from 'react-router-dom';
const Tanay = () => {
  return (
    <div>
      
      <Navbar />
   
     
    <Home />
    <Popular/>
    <Offers />
    <Blog/>
    <Footer/> 
    

    </div>
    
  )
}

export  {Tanay}