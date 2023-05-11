import React, { Component } from "react";
import Slider from "react-slick";
import ProductsCart from "../porductsCart/ProductsCart";
import './Corusel2.css'

const products = [
    {title:'Торт "Наполеон" классический', info:"Купили более 300 раз", likes:96, price:'1 600 ₽', weight:'1,25 кг.'},
    {title:'Торт "Наполеон" классический', info:"Купили более 300 раз", likes:96, price:'1 600 ₽', weight:'1,25 кг.'},
    {title:'Торт "Наполеон" классический', info:"Купили более 300 раз", likes:96, price:'1 600 ₽', weight:'1,25 кг.'},
    {title:'Торт "Наполеон" классический', info:"Купили более 300 раз", likes:96, price:'1 600 ₽', weight:'1,25 кг.'},
    {title:'Торт "Наполеон" классический', info:"Купили более 300 раз", likes:96, price:'1 600 ₽', weight:'1,25 кг.'},
    {title:'Торт "Наполеон" классический', info:"Купили более 300 раз", likes:96, price:'1 600 ₽', weight:'1,25 кг.'},
    
  ]

export default class Corusel2 extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 4,
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
        
        <Slider {...settings}>

          {
            products.map((item , idx) => <ProductsCart key={idx} {...item} />)
          }
        
        </Slider>
      </div>
    );
  }
}