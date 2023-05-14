import React from 'react'
import './Vacansycard.css'

function Vacansycard({setCurrentData,setSHowVacansy, id, name, description,price, city,exprience, fulltime,whatdo}) {
 
 const handleInfo = () => {
  setCurrentData(id)
  setSHowVacansy(false)
 }
  return (
    <div className='vacansyCard'>

        <div className='vacansyCard-inner'>
          <div className='vacansyCard-text'>
            <h2>{name}</h2>
              <p>{description}</p>
          </div>
          <div className='vacansyCard-price'>
            <h3>{price}</h3>
            <p>{city}</p>
          </div>
        </div>

        <button className='vacansyCard-btn' onClick={ () => handleInfo()}>Click</button>
    </div>
  )
}

export default Vacansycard
