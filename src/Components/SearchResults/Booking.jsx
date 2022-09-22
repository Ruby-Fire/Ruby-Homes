import React from './Booking.css'
import Image1 from '../../Assets/AQZU3603.jpg'
import Image2 from '../../Assets/BGRC6769.jpg'
import Image3 from '../../Assets/KFTA7852.jpg'
import Image4 from '../../Assets/LNGE7942.jpg'
import Image5 from '../../Assets/VANM0746.jpg'
import Image6 from '../../Assets/WXUT3244.jpg'
import { useState } from 'react'
import Footer from '../Footer'




function Booking() {

    const [slide, setSlide] =useState(0)
    const [open, setOpen] =useState(false)

    const HandleOpen = (i)=> {
    setSlide(i);
    setOpen(true)
    }
  return (
    <>
    <div className='HotelWrapper'>
       {open &&  <div className="Slider">


                <div className="SliderWrapper">
                        <img src={slide} alt="" />
                </div>
        </div>}
        <div className='BodyContainer'>
            <div className="HeaderWrapper">
                <h1 className='rubyHomes'> Grand Hotel</h1>
                <button className='Reserve'>Reserve or bookNow </button>
            </div>
            <div className="HotelDesc">
                <div className="IconsDis">

                    <p>Excellent location  - 500m from center</p>
                </div>
                <p>book a stay over  $114 at this property</p>
                <div className="ImageDivider">
                    <img onClick={() =>HandleOpen} src={Image1} alt="" />
                    <img src={Image2} alt="" />
                    <img src={Image3} alt="" />
                    <img src={Image4} alt="" />
                    <img src={Image5} alt="" />
                    <img src={Image6} alt="" />
                </div>

            </div>
            <div className="StayInHeart">
                <div className="Krakow">
                    <h1>stay in heart of Krakow</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia atque rem veniam aliquam ipsum fugit, optio at consequatur nesciunt quibusdam saepe et esse ducimus perspiciatis beatae eligendi cupiditate impedit deleniti.</p>
                </div>
            <div className="PerfectForyou">
                  <h3>Perfect for a  9 night stay  </h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia atque rem veniam aliquam ipsum fugit, optio at consequatur nesciunt quibusdam saepe et esse ducimus perspiciatis beatae eligendi cupiditate impedit deleniti.</p>
                    <h3>$945 (9 nights)</h3>
                    <button>Reserve or book now </button>
                
            </div>
              
            </div>
        </div>
    </div>
    <Footer />
 </>
  )
}

export default Booking