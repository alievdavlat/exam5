import React from 'react'
import './Corusel.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Corusel({slider}) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    cssEase: "linear",
    // fade: true,
  };



  return (
    <div className='hero'> 
    <Slider {...settings}>
      {
        slider.map((item, idx) => {
          return(
            <div key={item.id}>
            <img src={item.img} className='header-corusel' width={'100%'}  height={600}  alt="slide" />
          </div>
      
          )
        })
      }
  </Slider>
    </div>
  )
}

export default Corusel
