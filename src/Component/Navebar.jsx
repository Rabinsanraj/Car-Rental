import { Routes, Route, Link, useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';
import { lazy } from 'react';

// Lazy load pages
const Home = lazy(() => import('../Pages/Home'));
const Services = lazy(() => import('../Pages/Services'));
const Dashboard = lazy(() => import('../Pages/Dashboard'));
const Contact = lazy(() => import('../Pages/Contact'));
const GetStart = lazy(() => import('../Pages/GetStart'));
const MyBooking = lazy(() => import('../Pages/MyBooking'));
const WishlistPage = lazy(() => import('../Pages/WishlistPage'));
const CheckOut = lazy(() => import('../Pages/CheckOut'));
const DriverDetails = lazy(() => import('../Pages/DriverDetails'));
const BillingDetails = lazy(() => import('../Pages/BillingDetails'));
const PaymentOptions = lazy(() => import('../Pages/PaymentOptions'));
const RentNow = lazy(() => import('../Pages/RentNow'));
const ChangeDriver = lazy(() => import('./ChangeDriver'));


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
                <Link className="nav-link me-5 fs-5" onClick={handleNav} to="/">Home</Link>
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
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/billingdetails" element={<BillingDetails />} />
        <Route path="/changedriver" element={<ChangeDriver />} />
      </Routes>
    </>
  );
}

export default Navebar;
