import React, { useContext } from 'react'
import { ProductsCart } from '../../components'
import './Rest.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setAllProduct } from '../../redux/slices/cartsSlice'
import request from '../../service/service'
import { context } from '../../App'



function Rest() {
  const {cartNames, allProduct} = useSelector(state => state.cartsSlice)
  const [restProduct, setRestProduct] = useContext(context)
  // const [restProduct, setRestProduct] = React.useState([])
  const dispatch = useDispatch()
  const getData = async () => {
    const all = await request.get(`/all`)
    dispatch(setAllProduct(all.data))
    // setRestProduct(all.data)
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
          cartNames && restProduct?.filter(item => item.type == cartNames || item.unique == cartNames || item.branch == cartNames).map((item, idx) => <ProductsCart key={idx} {...item}/>)
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
