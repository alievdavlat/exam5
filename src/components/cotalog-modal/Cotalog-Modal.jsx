import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './Cotalog-Modal.css'

function CotalogModal() {
  return (
    <div className='cotalog-modal'>
        <p>Каталог</p>
        <ul>
          <li><span>Новинки</span> <ArrowForwardIosIcon/></li>
          <li><span>Торты</span> <ArrowForwardIosIcon/></li>
          <li><span>Десерты в баночках</span> <ArrowForwardIosIcon/></li>
          <li><span>Пирожные</span> <ArrowForwardIosIcon/></li>
          <li><span>Подарочные наборы</span> <ArrowForwardIosIcon/></li>
          <li><span>Шоколад</span> <ArrowForwardIosIcon/></li>
          <li><span>Украшения</span> <ArrowForwardIosIcon/></li>
          <li><span>Капкейки</span> <ArrowForwardIosIcon/></li>
        </ul>
    </div>
  )
}

export default CotalogModal
