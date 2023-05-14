import React from 'react'
import './Products.css'
import Corusel2 from '../corusel2/Corusel2'
import All from '../all/All'





function Products({title, data,show}) {
 
 


  return (
    <div className='container'>
        <div className='product-wrapper'>

          <div className='titles'>
          <h3>{title}</h3>  <All/>
          </div>

           <div className="products"> 

              <Corusel2 data={data}  title={title} show={show}/>
              
           </div>
        </div>
    </div>
  )
}



export default Products
