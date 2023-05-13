import React from 'react'
import {   CotalogModal, FilterBtn, ProductsCart } from '../../components'
import './Cotalog.css'
import { useSelector } from 'react-redux'

function Cotalog() {
  const {filterProduct} = useSelector(store => store.filter)
  return (
      <>
    <div className="contaner">

    <div className='cotalog'>
      <div className="cotalog-left">
        <CotalogModal/>
      </div>
      <div className="cotalog-right">
        <FilterBtn/>
        <div className='filtred-products'>
          {
            filterProduct?.map((item , idx) => <ProductsCart key={item.id} {...item}/>)
          }
        </div>
      </div>
    </div>
    </div>
      
      </>
  )
}

export default Cotalog
