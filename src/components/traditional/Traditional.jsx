import React from 'react'
import ProductsCart from '../porductsCart/ProductsCart'
import Corusel2 from '../corusel2/Corusel2'
import './Traditional.css'
import All from '../all/All'


function Traditional() {
  return (
    <div className='container'>
    <div className='traditional-wrapper'>
      <div className="titles">
      <h3>Традиционные торты</h3> <All/>
      </div>
       <div className="traditional"> 

          <Corusel2/>
          
       </div>
    </div>
</div>

  )
}

export default Traditional

