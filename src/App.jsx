import './App.css'
import Navebar from './Component/Navebar'
import Footer from './Component/Footer'
import { useEffect } from 'react'


function App() {
  // useEffect (()=>{
  //   window.addEventListener("load",()=>{
  //     setTimeout(()=>{
  //       console.clear();
  //     },5000)
      
  //   })
  // })
  return (
    <>
      <Navebar/>
      <Footer/>
    </>
  )
}

export default App
