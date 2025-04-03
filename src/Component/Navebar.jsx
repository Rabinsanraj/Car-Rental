import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'boxicons'
import { HashRouter,Routes,Route,Link} from "react-router-dom";
import Home from '../Pages/Home'
import Sevices from "../Pages/Services"
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
import FinalBill from '../Pages/FinalBill';
import RentNow from '../Pages/RentNow'

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
      <HashRouter>
      <nav className="navbar navbar-expand-lg pt-2 pb-2 navbar-light bg-light position-sticky top-0 z-3">
          <div className="container-fluid">
            <Link to="/"><box-icon name='car' color='#ffffff' size="25px" className="bg-danger ms-5 p-2 rounded-circle"></box-icon></Link>
            <Link className="navbar-brand fs-3 ms-2 fw-bold text-danger" to="/">Easy  Car</Link>
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
                <Link className="btn btn-danger fs-5 rounded-pill ps-4 pe-4 me-4" to="/getstart">Get Started</Link>
                </li>
              </ul>
            </div>
          </div>
          <ScrollToTop/>
        </nav>

        <Routes>
            <Route path="/" element={<Home/>}/>
             <Route path="/service" element={<Sevices/>}/>
             <Route path="/dashboard" element={<Dashboard/>}/>
             <Route path="/contact" element={<Contact/>}/>
             <Route path="/getstart" element={<GetStart/>}/>
             <Route path='/dashboard/MyBooking' element={<MyBooking/>}/>
             <Route path='/dashboard/wishlistpage' element={<WishlistPage/>}/>
             <Route path='/getstart/checkout' element={<CheckOut/>}/>
             <Route path='/getstart/checkout/changedriver' element={<DriverDetails/>}/>
             <Route path='/getstart/checkout/billingdetails' element={<BillingDetails/>}/>
             <Route path='/getstart/checkout/billingdetails/paymentoptions' element={<PaymentOptions/>}/>
             <Route path='/getstart/checkout/billingdetails/paymentoptions/finalbill' element={<FinalBill/>}/>
             <Route path='/getstart/checkout/billingdetails/paymentoptions/finalbill/changedriver' element={<DriverDetails/>}/>
             <Route path='/dashboard/wishlistpage/rentnow' element={<RentNow/>}/>
        </Routes>
      </HashRouter>
    
    );
}
export default Navebar