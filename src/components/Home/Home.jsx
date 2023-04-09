import React from 'react'
import './home.scss'

const Home = () => {
  return (
    <section className="home">
      <div className="secConatiner container">
        <div className="homeText">
          <h1 className="title">
            Plan Your Trip With Travel
          </h1>
          <p className="subTitle">
            Travel to your favourite city with respectful of the environment
          </p>
          <button className="btn"> 
            <a href="#">Explore Now</a>
          </button>
        </div>

        <div className="homeCard grid">
          <div className="locationDiv">
            <label htmlfor='location'>Location</label>
            <input type='text' placeholder='Dream Destination'/>
          </div>

          <div className="distDiv">
            <label htmlfor='location'>Location</label>
            <input type='text' placeholder='10 Meters'/>
          </div>
           
          <div className="priceDiv">
            <label htmlfor='price'>Location</label>
            <input type='text' placeholder='Rs 1000 - Rs 20,000'/>       
          </div>
          <button className="btn">Search</button>
        </div>
      </div>

    </section>
  )
}

export default Home