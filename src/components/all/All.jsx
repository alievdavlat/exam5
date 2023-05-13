import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { setCartNames } from '../../redux/slices/cartsSlice'

function All() {
  const dispatch = useDispatch()
  return (
    <>
    <Link to={'/rest'} >
      <h3 onClick={() => dispatch(setCartNames('all'))}>
      All >
      </h3>
    </Link>

    </>
  )
}

export default All
