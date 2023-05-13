import React from 'react'
import {   CotalogModal, FilterBtn } from '../../components'
import './Cotalog.css'
import { useSelector } from 'react-redux'

function Cotalog() {
  const {filterProduct} = useSelector(store => store.filter)
  console.log(filterProduct);
  return (
      <>
    <div className="contaner">

    <div className='cotalog'>
      <div className="cotalog-left">
        <CotalogModal/>
      </div>
      <div className="cotalog-right">
        <FilterBtn/>

      </div>
    </div>
    </div>
      
      </>
  )
}

export default Cotalog
