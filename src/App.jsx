import { useState } from 'react'
import './App.css'
import Footer from './Component/Footer'
import Navebar from './Component/Navebar'
import Home from './Pages/Home'

function App() {
  return (
    <>
      <Navebar/>
      <Home/>
      <Footer/>
    </>
  )
}

export default App
