import React from 'react'
import './Main.css'
import { Dissert, Footer, Hero, Navbar, Product, Traditional } from '../../components'
import Reklama from '../../components/reklama/Reklama'
import bg1 from '../../assets/img/bg/Banner left.png'
import bg2 from '../../assets/img/bg/Banner right.png'
import NewProduct from '../../components/newProduct/NewProduct'

const arr =  [ 1, 2,3 ]

function Main() {
  return (
    <>
      <header>
        <Navbar/>
      </header>
      
      
      <main>
      <Hero/>
      <Product/>
      <Traditional/>
      <Reklama  bg={bg1} />
      <Dissert/>
      <Product/>
      <Reklama bg={bg2} />
        {arr.map((item, idx) => <Product key={idx}/>)}
       <NewProduct/>
      </main>
      
      <footer>
        <Footer/>
      </footer>

    </>
  )
}

export default Main
