import React from 'react'
import './Reklama.css'

function Reklama({bg}) {
  return (
    <div className='container'>
      <img className='reklama' src={bg} alt={'img'} />
    </div>
  )
}

export default Reklama
