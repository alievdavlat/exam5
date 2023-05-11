import React from 'react'
import './ProductsCart.css'
import img from '../../assets/img/products/Торт для инстаграм-25 1 (2).jpg'
import FavoriteIcon from '@mui/icons-material/Favorite';

function ProductsCart({title, likes , price , info , weight}) {
  return (
    <div className='productCart'>
      <div className="product-cart__img">
        <img src={img} alt={title} />
      </div>

      <div className="productCart-info">
        <h5>{title}</h5>

        <div className='info'>
          <span>{info}</span>
          <div>
          <span>({likes}) </span>
          <span><FavoriteIcon/></span>
          </div>
        </div>

        <span className='price'>
          <b>{price}</b>
          <span>{weight}</span>
        </span>
      </div>

      
    </div>
  )
}

export default ProductsCart
