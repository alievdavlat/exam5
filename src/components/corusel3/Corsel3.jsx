import React, { Component } from "react";
import Slider from "react-slick";
import './Corusel3.css'
import NewCart from "../newCart/NewCart";

const products = [
    {title:'Торт "Наполеон" классический', info:"Купили более 300 раз", likes:96, price:'1 600 ₽', weight:'1,25 кг.'},
    {title:'Торт "Наполеон" классический', info:"Купили более 300 раз", likes:96, price:'1 600 ₽', weight:'1,25 кг.'},
    {title:'Торт "Наполеон" классический', info:"Купили более 300 раз", likes:96, price:'1 600 ₽', weight:'1,25 кг.'},
    {title:'Торт "Наполеон" классический', info:"Купили более 300 раз", likes:96, price:'1 600 ₽', weight:'1,25 кг.'},
    {title:'Торт "Наполеон" классический', info:"Купили более 300 раз", likes:96, price:'1 600 ₽', weight:'1,25 кг.'},
    {title:'Торт "Наполеон" классический', info:"Купили более 300 раз", likes:96, price:'1 600 ₽', weight:'1,25 кг.'},
    
  ]

export default class Corusel3 extends Component {
  render() {
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
            products.map((item , idx) => <NewCart key={idx} />)
          }
        
        </Slider>
      </div>
    );
  }
}