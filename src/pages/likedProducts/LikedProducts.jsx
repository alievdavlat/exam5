import React, { useContext, useEffect, useRef } from 'react'
import './LikedProducts.css'
import { ProductsCart } from '../../components'
import { context, likedProducts } from '../../App'
import { Link } from 'react-router-dom'

function LikedProducts() {

 return (
    <div className='container'>
      <div className="likedProducts-wrapper">

      <div className="likedProducts">
        {
          likedProducts.length > 0 ?  likedProducts.map((item, idx) => <ProductsCart key={idx}  {...item}/>): <h1>No liked pruducts ☹️</h1>
        }
      </div>
          <Link to={'/'}>
          <button className='likedProducts-btn'>
            Back
          </button>
          </Link>
        </div>
    </div>
  )
}

export default LikedProducts
