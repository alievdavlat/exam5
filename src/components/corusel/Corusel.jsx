import React from 'react'
import './Corusel.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from '../../assets/img/corusel/605х705 1.jpg'
import img2 from '../../assets/img/corusel/linus-mimietz-gvptKmonylk-unsplash (1).jpg'
import img3 from '../../assets/img/corusel/daniel-eliashevskyi-aTg26S0_OC0-unsplash.jpg'
import img4 from '../../assets/img/corusel/cristina-gottardi-CSpjU6hYo_0-unsplash.jpg'



function Corusel() {
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
    <div>
      <img src={img1} width={'100%'} height={600}  alt="slide" />
    </div>
    <div>
      <img src={img2}  width={'95%'} height={600} alt="slide" />
    </div>
    <div>
      <img src={img3} width={'100%'} height={600}  alt="slide" />
    </div>
    <div>
      <img src={img4} width={'100%'} height={600}  alt="slide" />
    </div>
  </Slider>
    </div>
  )
}

export default Corusel
