import React from 'react'
import { ProductsCart } from '../../components'
import './Rest.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setAllProduct } from '../../redux/slices/cartsSlice'



function Rest() {
  const {cartNames, allProduct} = useSelector(state => state.cartsSlice)
  const dispatch = useDispatch()
  const getData = async () => {
    const all = await axios.get(`http://localhost:3001/${cartNames}`)
    dispatch(setAllProduct(all.data))
  
  }

 React.useEffect(() => {
  getData()
 },[cartNames]) 
  return (
    <div className='rest'>
      
      <div className="container">
          <h1>{cartNames}</h1>
          <br />  <br /> <br /> 
        <div className="rest-cards">
          {
          cartNames && allProduct?.map((item, idx) => <ProductsCart key={idx} {...item}/>)
          }
        </div>
        <Link to={'/'}>
        <button className='prev-btn'>
         back
        </button>
        </Link>
        </div>
    </div>
  )
}

export default Rest
