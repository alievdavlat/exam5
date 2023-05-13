import React, { Component } from "react";
import Slider from "react-slick";
import './Corusel3.css'
import NewCart from "../newCart/NewCart";
import axios from "axios";

 const  Corusel3 = () => {
  const [product, setProduct] = React.useState([])
  const getData = async () => {
    const another = await axios.get('http://localhost:3001/another')
    setProduct(another.data)

  }

  React.useEffect(() => {
    getData()
  },[])

  
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 2,
      autoplay:true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            infinite: true,
            dots: false
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
      <div className="corusel3">
        
        <Slider {...settings}>

          {
            product.map((item , idx) => <NewCart key={idx} {...item} />)
          }
        
        </Slider>
      </div>
    );
  
}

export default Corusel3