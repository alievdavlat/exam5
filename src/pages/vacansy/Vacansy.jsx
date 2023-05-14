import React from 'react'
import './Vacansy.css'
import { AddRezume, VacansyInfo, Vacansycard } from '../../components'
import axios from 'axios'
import request from '../../service/service'

function Vacansy() {
  const [data , setData ] = React.useState([])
  const [currentData, setCurrentData] = React.useState(0)
  const [showVacansy, setSHowVacansy] = React.useState(true)
  const [openModal, setOpenModal] = React.useState(false)
  const [modalData, setModaldata] = React.useState({})
  const getData = async () => {
    try {
      const res = await request.get(`/vacansy`)
      setData(res.data)
    } catch (error) {
      console.log(error);
    }
  }

  React.useEffect(() => {
    getData()
  },[])


  return (
    <>
      { openModal &&  <AddRezume setOpenModal={setOpenModal} {...modalData} />}
    <div className='container'>
    <div className='vacansy'>
      {
    showVacansy ? data.map((item, idx) => <Vacansycard setSHowVacansy={setSHowVacansy} setCurrentData={setCurrentData}  key={item.id} {...item}/>) : <VacansyInfo setSHowVacansy={setSHowVacansy}  setOpenModal={setOpenModal} setModaldata={setModaldata} currentData={currentData}/>
      }
    </div>
      </div>
    </>
  )
}

export default Vacansy
