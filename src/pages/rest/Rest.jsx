import React from 'react'
import { ProductsCart } from '../../components'
import './Rest.css'
import axios from 'axios'



function Rest() {
  const [all, setAll] = React.useState([])
  const getData = async () => {
    const all = await axios.get('http://localhost:3001/all')
    setAll(all.data)
  }

 React.useEffect(() => {
  getData()
 },[]) 
  return (
    <div className='rest'>
      
      <div className="container">

        <div className="rest-cards">
          {
            all.map((item, idx) => <ProductsCart key={idx} {...item}/>)
          }
        </div>
        <button className='prev-btn'>
          назад
        </button>
        </div>
    </div>
  )
}

export default Rest
