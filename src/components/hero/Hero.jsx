import React from 'react'
import axios from 'axios'
import './Hero.css'
import Corusel from '../corusel/Corusel'





function Hero() {
  const [slider, setSlider] = React.useState([])
const getData = async () => {
 const {data}  = await axios.get('http://localhost:3001/slider')
  setSlider(data)
}

  React.useEffect(() => {
      getData()
  },[]) 


  return (
    <div className='container'>
      <Corusel slider={slider}/>
    </div>
  )
}

export default Hero
