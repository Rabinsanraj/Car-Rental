import { Routes,Route,Link} from "react-router-dom";
import Home from '../Pages/Home'
import Services from "../Pages/Services"
import Dashboard from '../Pages/Dashboard'
import Contact from "../Pages/Contact"
import GetStart from "../Pages/GetStart"
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import MyBooking from '../Pages/MyBooking';
import WishlistPage from '../Pages/WishlistPage';
import CheckOut from '../Pages/CheckOut';
import DriverDetails from '../Pages/DriverDetails';
import BillingDetails from '../Pages/BillingDetails';
import PaymentOptions from '../Pages/PaymentOptions';
import RentNow from '../Pages/RentNow'
import ChangeDriver from './ChangeDriver';

export const ScrollToTop = () =>{
  const {pathname} = useLocation();
  // console.log(pathname)

  useEffect(()=>{
    window.scrollTo(0,0);
  },[pathname]);
  return null;
};

function Navebar (){
    return(
      <>
      <nav className="navbar navbar-expand-lg pt-2 pb-2 navbar-light bg-light position-sticky top-0 z-3">
          <div className="container-fluid">
            <Link to="/"><box-icon name='car' color='#ffffff' size="25px" className="ms-5 p-2 rounded-circle"style={{backgroundColor:"red"}}></box-icon></Link>
            <Link className="navbar-brand fs-3 ms-2 fw-bold" style={{color:"red"}} to="/">Easy  Car</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link active me-5 fs-5" aria-current="page" to="/" >Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link me-5 fs-5" to="/service" >Services</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link me-5 fs-5" to="/dashboard" >Dashboard</Link>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link me-5 fs-5" to="/contact" >Contact US</Link>
                </li>
               <li className='nav-item'>
                <Link className="btn fs-5 text-light fw-bold rounded-pill ps-4 pe-4 me-4" style={{backgroundColor:"red"}} to="/getstart">Get Started</Link>
                </li>
              </ul>
            </div>
          </div>
          <ScrollToTop/>
        </nav>

        <Routes>
      {/* Main Pages */}
      <Route path="/" element={<Home />} />
      <Route path="/service" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/getstart" element={<GetStart />} />

      {/* Dashboard & Subpages */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/mybooking" element={<MyBooking />} />
      <Route path="/wishlistpage" element={<WishlistPage />} />
      <Route path="/rentnow" element={<RentNow />} />
      <Route path="/paymentoptions" element={<PaymentOptions />} />
      <Route path="/changedriver" element={<DriverDetails />} />
      <Route path="/paymentoptions" element={<PaymentOptions/>} />

      {/* Checkout Flow */}
      <Route path="/checkout" element={<CheckOut />} />
      <Route path="/billingdetails" element={<BillingDetails />} />
      <Route path='/changedriver' element={<ChangeDriver/>}/>
      
    </Routes>
    </>
    );
}
export default Navebar