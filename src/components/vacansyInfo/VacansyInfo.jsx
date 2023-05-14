import React from 'react'
import './VacansyInfo.css'
import img from '../../assets/img/Снимок экрана 2022-07-21 в 23.28 1.jpg'
import axios from 'axios'
import AddRezume from './addrezume/AddRezume'

// name, description,price, city,exprience, fulltime,whatdo 

function VacansyInfo({currentData, setSHowVacansy, setOpenModal, setModaldata}) {
const [data ,setData] = React.useState({})

  const getData = async () => {
    try {
      const res = await axios.get(`http://localhost:3001/vacansy/${currentData}`)
      setData(res.data)
    } catch (error) {
      console.log(error);
    }
  }

  React.useEffect(() => {
    getData()
  },[])

const handleModal = () => {
  setOpenModal(true)
  setModaldata({name:data.name, city:data.city})

}
  return (
    <>
    <div className='vacansyInfo'>
        <div className='vacansyInfo-text'>
         
            <h2>{data.name}</h2>
            <p>{data.city}</p>
            <b>{data.price}</b>

        </div>

        <div className='vacansyInfo-must'>
          <h2>Our Must</h2>
            <ul>
              <li>{data.exprience}</li>
              <li>{data.fulltime}</li>
            </ul>
          
        </div>

        <div className='keyWords'> 
        <h3>keyWords</h3>
            
            <ul>
              <li>Управление производственным персоналом</li>
              <li>Контроль качества</li>
              <li>Документальное сопровождение</li>
              <li>Работа в условиях многозадачности</li>
              <li>Технология производства</li>
              <li>Производственное планирование</li>
            </ul>
        </div>

       <div className='vacansyInfo-addres'>
          <h3>Адрес</h3>
          <p>г.Москва, Лихоборская набережная д.14</p>

          <div>
            <img src={img} alt="img" />
          </div>

         <div className="buttons-group">
         <button onClick={() => handleModal()}>
            add rezume
          </button>
          <button onClick={() => setSHowVacansy(true)}>
            back
          </button>
         </div>
       </div>
    </div>
    </>
  )
}

export default VacansyInfo
