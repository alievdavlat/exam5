import React from 'react'
import Corusel3 from '../corusel3/Corsel3'
import All from '../all/All'
import './NewProduct.css'
import Corusel2 from '../corusel2/Corusel2'
import axios from 'axios'

function NewProduct() {
  return (
    <div className='container'>
        <div className='newProduct-wrapper'>

          <div className='titles'>
          <h3>another Product</h3>  <All/>
          </div>

           <div className="newProduct"> 

              <Corusel3  show={3}/>
              
           </div>
        </div>
    </div>
  )
}

export default NewProduct
