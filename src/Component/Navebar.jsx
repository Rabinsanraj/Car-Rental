import { Routes, Route, Link, useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';
import Home from '../Pages/Home';
import Services from "../Pages/Services";
import Dashboard from '../Pages/Dashboard';
import Contact from "../Pages/Contact";
import GetStart from "../Pages/GetStart";
import MyBooking from '../Pages/MyBooking';
import WishlistPage from '../Pages/WishlistPage';
import CheckOut from '../Pages/CheckOut';
import DriverDetails from '../Pages/DriverDetails';
import BillingDetails from '../Pages/BillingDetails';
import PaymentOptions from '../Pages/PaymentOptions';
import FinalBill from '../Pages/PaymentOptions'; // NOTE: Double import; use correct one if it's a different file
import RentNow from '../Pages/RentNow';
import ChangeDriver from './ChangeDriver';

export const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function Navebar() {
  const [expanded, setExpanded] = useState(false);

  const handleNav = () => {
    setExpanded(false);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg pt-2 pb-2 navbar-light bg-light position-sticky top-0 z-3">
        <div className="container-fluid">
          <Link to="/">
            <i className="bx bx-car fs-3 text-white ms-5 p-2 rounded-circle" style={{ backgroundColor: "red" }}></i>
          </Link>
          <Link className="navbar-brand fs-3 ms-2 fw-bold" style={{ color: "red" }} to="/">Easy Car</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
            onClick={() => setExpanded(!expanded)} aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${expanded ? "show" : ""}`} id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active me-5 fs-5" onClick={handleNav} to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link me-5 fs-5" onClick={handleNav} to="/service">Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link me-5 fs-5" onClick={handleNav} to="/dashboard">Dashboard</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link me-5 fs-5" onClick={handleNav} to="/contact">Contact US</Link>
              </li>
              <li className="nav-item">
                <Link className="btn fs-5 text-light fw-bold rounded-pill ps-4 pe-4 me-4"
                  style={{ backgroundColor: "red" }} onClick={handleNav} to="/getstart">Get Started</Link>
              </li>
            </ul>
          </div>
        </div>
        <ScrollToTop />
      </nav>

      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/getstart" element={<GetStart />} />

        {/* Subpages */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/mybooking" element={<MyBooking />} />
        <Route path="/wishlistpage" element={<WishlistPage />} />
        <Route path="/rentnow" element={<RentNow />} />
        <Route path="/paymentoptions" element={<PaymentOptions />} />
        <Route path="/changedriver" element={<DriverDetails />} />
        <Route path="/finalbill" element={<FinalBill />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/billingdetails" element={<BillingDetails />} />
        <Route path="/changedriver" element={<ChangeDriver />} />
      </Routes>
    </>
  );
}

export default Navebar;
