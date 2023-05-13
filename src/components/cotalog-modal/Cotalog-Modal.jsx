import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './Cotalog-Modal.css'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setFilterProduct } from '../../redux/slices/filterSlice';

const arr = ['all', 'new','popular', 'phones' ,'another']

function CotalogModal() {
  const dispatch  = useDispatch()


  const onFetch = async (name) => {
    const res = await axios.get(`http://localhost:3001/${name}`)
    dispatch(setFilterProduct(res.data))
  }

  return (
    <div className='cotalog-modal'>
        <p>Каталог</p>
        <ul>
         {
          arr.map((item, idx) =>  <li onClick={() => onFetch(item)} ><span>{item}</span> <ArrowForwardIosIcon/></li>)
         }
        </ul>
    </div>
  )
}

export default CotalogModal
