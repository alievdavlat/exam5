import React from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import './NewCart.css'

function NewCart({id, name, price,img}) {
  return (
    <div className='newCart'>
        <div className='newCart-img'>
          <img src={img} alt="img" />
        </div>
        <div className="newCart-text">
          <p>{name}</p>
          <div>
            price: <span>{price}</span>
          <div>
        </div>
          </div>
        </div>
    </div>
  )
}

export default NewCart
