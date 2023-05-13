import React from 'react'
import './Filter-Btn.css'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setFilterProduct } from '../../redux/slices/filterSlice'

const filterNames = ['hp','mackbooks', 'acer','lenova','asus']

function FilterBtn() {
  const [activeFilter, setActiveFilter] = React.useState(0)
  const dispatch  = useDispatch()


  const onFilter = async (idx, filter) => {
    setActiveFilter(idx)
    try {
     const res = await axios.get(`http://localhost:3001/${filter}`)
     dispatch(setFilterProduct(res.data))
  
   } catch (error) {
     console.log(error);
   }

  }


  
  return (
    <ul className='filterBtn'>
      {
        filterNames.map((item, idx) => <li className={`filterBtn-items ${activeFilter === idx ? 'filterBtnActive': ''}`} key={idx} onClick={() => onFilter(idx, item)}>{item}</li>)
      }
    </ul>
  )
}

export default FilterBtn
