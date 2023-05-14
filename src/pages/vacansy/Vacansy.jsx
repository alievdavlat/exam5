import React from 'react'
import './Vacansy.css'
import { VacansyInfo, Vacansycard } from '../../components'
import axios from 'axios'

function Vacansy() {
  const [data , setData ] = React.useState([])
  const [currentData, setCurrentData] = React.useState(0)
  const [showVacansy, setSHowVacansy] = React.useState(true)

  const getData = async () => {
    try {
      const res = await axios.get(`http://localhost:3001/vacansy`)
      setData(res.data)
    } catch (error) {
      console.log(error);
    }
  }

  React.useEffect(() => {
    getData()
  },[])


  return (
    <div className='container'>
    <div className='vacansy'>
      {
    showVacansy ? data.map((item, idx) => <Vacansycard setSHowVacansy={setSHowVacansy} setCurrentData={setCurrentData} key={item.id} {...item}/>) : <VacansyInfo setSHowVacansy={setSHowVacansy}  currentData={currentData}/>
      }
    </div>
      </div>
  )
}

export default Vacansy
