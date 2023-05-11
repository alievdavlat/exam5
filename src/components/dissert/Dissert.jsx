import React from 'react'
import Corusel2 from '../corusel2/Corusel2'
import All from '../all/All'
import './Dissert.css'

function Dissert() {
  return (
    <div className='container'>
    <div className='dissert-wrapper'>

      <div className='titles'>
      <h3>Десерты в баночках</h3>  <All/>
      </div>

       <div className="dissert"> 

          <Corusel2/>
          
       </div>
    </div>
</div>
  )
}

export default Dissert
