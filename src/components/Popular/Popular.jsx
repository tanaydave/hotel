import React from 'react'
import './popular.scss'
import { BsArrowLeftShort } from 'react-icons/bs';
import { BsArrowRightShort } from 'react-icons/bs';
import { BsDot } from 'react-icons/bs';
import london from '../../assets/london.jpg'
import Angkor_Wat from '../../assets/Angkor_Wat.jpg'
import Guanajuato from '../../assets/Guanajuato.jpg'
import machu_picchu from '../../assets/machu_picchu.jpg'
import taj_mahal from '../../assets/taj_mahal.jpg'



const Data = [
  {
    id: 1,
    imgSrc: london,
    destTitle: 'London',
    location: 'United Kingdom',
    grade: 'Cultural Relax',

  },
  {
    id: 2,
    imgSrc: machu_picchu,
    destTitle: 'Machu Picchu',
    location: 'Peru',
    grade: 'Cultural Relax',

  },
  {
    id:3,
    imgSrc:Guanajuato ,
    destTitle: 'Guanajuato',
    location: 'Mexico',
    grade: 'Cultural Relax',

  },
  {
    id: 4,
    imgSrc: Angkor_Wat,
    destTitle: 'Angkor Wat',
    location: 'Cambodia',
    grade: 'Cultural Relax',

  },
  {
    id: 5,
    imgSrc:taj_mahal,
    destTitle: 'Taj Mahal',
    location: 'India',
    grade: 'Cultural Relax',

  },
  
]
console.log(Data)
const Popular = () => {
  return (
    <section className="popular section container">
      <div className="secContainer">
        <div className="secHeader flex">
          <div className="textDiv">
            <h2 className="secTitle">
              Popular Destination
            </h2>
            <p>
              from historical cities to natural spectaculars , come see the best of the world!
            </p>
          </div>
          <div className="iconsDiv flex">
            <BsArrowLeftShort className="icon leftIcon" />
            <BsArrowRightShort className="icon " />
          </div>
        </div>
        <div className="mainContent grid">
          {Data.map((data)=>{
            return(
            // {console.log{imgSrc)}
            <div className="singleDestination">
            <div className="destImage">
              <img src={data.imgSrc} alt="image title" />
              <div className="overlayInfo">
                <h3>{data.destTitle}</h3>
                <p>
                  {data.location}
                </p>
                <BsArrowRightShort className="icon" />

              </div>

            </div>
            <div className="destFooter">
              <div className="number">
                0{data.id}
              </div>
              <div className="destText flex">
                <h6>
                  {data.location}
                </h6>
                <span className="flex">
                  <span className="dot">
                    <BsDot className="icon" />

                  </span>
                  Travel
                </span>
              </div>
            </div>
          </div>
        // </div>
          



          )})}
          {/* <div className="singleDestination">
            <div className="destImage">
              <img src={london} alt="image title" />
              <div className="overlayInfo">
                <h3>some content</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur.
                </p>
                <BsArrowRightShort className="icon" />

              </div>

            </div>
            <div className="destFooter">
              <div className="number">
                01
              </div>
              <div className="destText flex">
                <h6>
                  London
                </h6>
                <span className="flex">
                  <span className="dot">
                    <BsDot className="icon" />

                  </span>
                  Travel
                </span>
              </div>
            </div>
          </div> */}
        </div>

      </div>
    </section>
  )
}

export default Popular