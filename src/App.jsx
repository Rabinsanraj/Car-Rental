import './App.css'
import Navebar from './Component/Navebar'
import Footer from './Component/Footer'
import { HashRouter } from 'react-router-dom'
import { Suspense } from 'react'
function App() {
  return (
    <>
      <Suspense  fallback={<span className="loader mt-5"></span>}>
        <HashRouter>
          <Navebar />
          <Footer />
        </HashRouter>
      </Suspense>
    </>
  )
}

export default App
