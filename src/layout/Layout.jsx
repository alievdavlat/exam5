import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { About, Contact, ControlledAccordions, Cotalog, Kazrinka, LikedProducts, Main, Payment, Rest, SinglePage, Vacansy } from '../pages'
import { Navbar, ScrollTop } from '../components'

function Layout() {
  return (
    <>
     <header>
        <Navbar />
      </header>
      <ScrollTop/>
    <Routes>
      <Route  path='/' element={<Main/>} />
      <Route path='/catalog' element={<Cotalog/>} />
      <Route path='/rest' element={<Rest/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/vacansy' element={<Vacansy/>} />
      <Route path='/liked' element={<LikedProducts/>} />
      <Route path='/karzinka' element={<Kazrinka/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/payment' element={<Payment/>} />
      <Route path='/singlepage' element={<SinglePage/>} />
      <Route path='/delevery' element={<ControlledAccordions/>} />
    </Routes>
    
    </>
  )
}

export default Layout
