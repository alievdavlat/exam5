import React from 'react'
import './Reklama.css'

function Reklama({bg, text}) {
  return (
    <div className='container'>
      <div className='img-container'> 
      <img className='reklama' src={bg} alt={'img'} />
      <div className='reklama-text'>
        <p>{text}</p>
      </div>
      </div>
    </div>
  )
}

export default Reklama
