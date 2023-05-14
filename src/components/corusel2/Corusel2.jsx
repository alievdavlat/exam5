import React, { Component } from "react";
import Slider from "react-slick";
import ProductsCart from "../porductsCart/ProductsCart";
import './Corusel2.css'


 const Corusel2 = ({show,data, title}) => {


  const settings = {
      dots: false,
      infinite: true,
      slidesToShow: show,
      slidesToScroll: 2,
      autoplay:true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]

    };

    return (
      <div className="corusel2">
        
        <Slider  {...settings}>

          {
            data.filter(item => item.type === title || item.unique === title).map((item , idx) => <ProductsCart key={item.id} {...item} />)
          }
        
        </Slider>
      </div>
    );
  
}

export default Corusel2