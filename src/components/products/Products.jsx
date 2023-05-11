import React from 'react'
import './Products.css'
import Corusel2 from '../corusel2/Corusel2'
import All from '../all/All'





function Products() {
  return (
    <div className='container'>
        <div className='product-wrapper'>

          <div className='titles'>
          <h3>Новинки</h3>  <All/>
          </div>

           <div className="products"> 

              <Corusel2/>
              
           </div>
        </div>
    </div>
  )
}



export default Products
