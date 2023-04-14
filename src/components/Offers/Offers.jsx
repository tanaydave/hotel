import React from 'react'
import './offers.scss'
import { MdKingBed } from 'react-icons/md'
import { MdBathtub } from 'react-icons/md'
import { FaWifi } from 'react-icons/fa'
import { MdLocationOn } from 'react-icons/md'
import { BsArrowRightShort } from 'react-icons/bs'
import img from '../../assets/bg-img.jpg'
import london from '../../assets/london.jpg'
import machu_picchu from '../../assets/machu_picchu.jpg'
import Angkor_Wat from '../../assets/Angkor_Wat.jpg'

const locations = [
  {
    id: 1,
    imgSrc: london,
    destTitle: 'London',
    location: 'United Kingdom',
    price:'5000'
  },
  {
    id: 2,
    imgSrc: machu_picchu,
    destTitle: 'Machu Picchu',
    location: 'Peru',
    price:'5000'
    

  },
  {
    id: 3,
    imgSrc: Angkor_Wat,
    destTitle: 'Angkor Wat',
    location: 'Cambodia',
    price:'5000'
    

  }]

const Offers = () => {
  return (

    <section className="offer container section">
      <div className="secContainer">
        <div className="secIntro">
          <div className="secTitle">
            <h2>
              Special Offers

            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, itaque.
            </p>

          </div>
          <div className="mainContent grid">
            {locations.map((offer) => {
              return (
                <div className="singleOffer">
                  <div className="destImage">
                    <img src={offer.imgSrc} alt="image title " />
                    <span className="discount">
                      30% Off
                    </span>
                  </div>
                  <div className="offerBody">
                    <div className="price flex">
                      <h4>
                        {offer.price}
                      </h4>

                    </div>
                    <div className="amenities flex">
                      <div className="singleAmenity flex">
                        <MdKingBed className="icon" />
                        <small>2 Beds</small>
                      </div>

                      <div className="singleAmenity flex">
                        <MdBathtub className="icon" />
                        <small>Bath</small>
                      </div>

                      <div className="singleAmenity flex">
                        <FaWifi className="icon" />
                        <small>Wi-Fi</small>
                      </div>



                    </div>
                    <div className="location flex">
                      <MdLocationOn className="icon" />
                      <small>address , {offer.location}</small>
                    </div>
                    <button className="btn flex">
                      View Details
                      <BsArrowRightShort className="icon" />
                    </button>
                  </div>
                </div>)
            })}
          </div>
        </div>
      </div>
    </section>




  )
}

export default Offers