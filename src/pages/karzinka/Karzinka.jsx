import React from 'react'
import './Karzinka.css'
import { context, shoppingCart } from '../../App'
import { ProductsCart } from '../../components'
import { Link } from 'react-router-dom'

function Karzinka() {

  return (
    <div className='container'>
      <h2 style={{margin:'30px'}}>Karzinka 🛒</h2>
      <br /><br />

        <div className="karzinka-wrapper">
        
            <div className="karzinka">
            { shoppingCart.length > 0 ? shoppingCart.map((item, idx) => <ProductsCart  {...item}/>) : <h1> Empty Cart ☹️</h1> }
            </div>
          
          <Link to={'/rest'}>
          <button className='karzinka-btn'>
            Back
          </button>
          </Link>
        </div>
    </div>
  )
}

export default Karzinka
