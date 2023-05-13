import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Cotalog, Main, Rest } from '../pages'
import { Navbar } from '../components'

function Layout() {
  return (
    <>
     <header>
        <Navbar />
      </header>
    
    <Routes>
      <Route  path='/' element={<Main/>} />
      <Route path='/catalog' element={<Cotalog/>} />
      <Route path='/rest' element={<Rest/>} />
    </Routes>
    </>
  )
}

export default Layout
