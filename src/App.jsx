import { useState } from 'react'
import './App.css'
import HeaderNav from './Component/HeaderNav'
import Navebar from './Component/Navebar'
import Footer from './Component/Footer'
import {Demo} from './Test/demo'

function App() {
  return (
    <>
      <HeaderNav/>
      <Navebar/>
      <Footer/>
      {/* <Demo/> */}
    </>
  )
}

export default App
