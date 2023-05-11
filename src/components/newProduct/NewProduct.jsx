import React from 'react'
import Corusel3 from '../corusel3/Corsel3'
import All from '../all/All'
import './NewProduct.css'

function NewProduct() {
  return (
    <div className='container'>
        <div className='newProduct-wrapper'>

          <div className='titles'>
          <h3>Новинки</h3>  <All/>
          </div>

           <div className="newProduct"> 

              <Corusel3/>
              
           </div>
        </div>
    </div>
  )
}

export default NewProduct
