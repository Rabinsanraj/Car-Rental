import './App.css'
import Navebar from './Component/Navebar'
import Footer from './Component/Footer'
import { HashRouter } from 'react-router-dom'
function App() {
  return (
    <>
    <HashRouter>
    <Navebar/>
    <Footer/>
    </HashRouter>
    </>
  )
}

export default App
