import React from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import img from '../../assets/img/products/Торт для инстаграм-25 1 (2).jpg'
import './NewCart.css'

function NewCart() {
  return (
    <div className='newCart'>
        <div className='newCart-img'>
          <img src={img} alt="img" />
        </div>
        <div className="newCart-text">
          <p>Зефир считается крайне полезным лакомством и рекомендован даже детям</p>
          <div>
            <span>01.02.2022</span>
              <div>
              <span>103  </span> <span><VisibilityIcon /></span>

              </div>
          </div>
        </div>
    </div>
  )
}

export default NewCart
