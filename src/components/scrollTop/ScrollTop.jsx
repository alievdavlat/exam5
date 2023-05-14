import React from 'react'
import './ScrollTop.css'
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

function ScrollTop() {
  const hqndleTop = () => {
    window.scroll(0,0)
  }
  return (
    <div className='scrollTop' onClick={() => hqndleTop()} >
      <KeyboardDoubleArrowUpIcon sx={{fontSize:'40px'}}/>
    </div>
  )
}

export default ScrollTop
