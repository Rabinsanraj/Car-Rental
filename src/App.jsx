// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Carousel from './Component/Carousel';
// import Wishlist from './Pages/WishList';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Carousel />} />
//         <Route path="/wishlist" element={<Wishlist />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

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
