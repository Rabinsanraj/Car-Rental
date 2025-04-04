import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import "boxicons"
import CarNav from '../Component/CarNav';
import { useState } from "react";
import { Link } from 'react-router-dom';
function DriverDetails() {
  const [selectedDriver, setSelectedDriver] = useState("");

  const handleSelect = (driverType) => {
    setSelectedDriver(driverType);
  };

  return (
    <>
      <CarNav name="Checkout"/>

      <div className="container-fluid text-center">
        <h1 className="fw-bold pt-3 pb-3">Driver Details</h1>
      </div>
      <div className="container-fluid">
      <div className="row justify-content-center align-content-center">
        <div className="col-md-5 pb-5">
          <label className="container selfdriver pt-3 pb-3 border border-3 rounded-5 text-center w-100"
            style={{ backgroundColor: selectedDriver === "self" ? "#aee0af" : "white", cursor: "pointer",}}
            onClick={() => handleSelect("self")}>
            <input type="radio" name="drivertoggle" style={{ transform: "scale(1.5)", accentColor: "green" }}
              checked={selectedDriver === "self"} readOnly/>
            <h2 className="pt-3">Self Driver</h2>
          </label>
        </div>

        <div className="col-md-5">
          <label className="container actingdriver pt-3 pb-3 border border-3 rounded-5 text-center w-100"
            style={{ backgroundColor: selectedDriver === "acting" ? "#aee0af" : "white", cursor: "pointer",}}
            onClick={() => handleSelect("acting")}>
            <input type="radio" name="drivertoggle" style={{ transform: "scale(1.5)", accentColor: "green" }}
              checked={selectedDriver === "acting"} readOnly/>
            <h2 className="pt-3">Acting Driver</h2>
          </label>
        </div>
      </div>
      </div>
      <div className="container-fluid">
      <form className='pt-2' action="/submit" method='post'>
        <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-5">
            <label htmlFor="firstname" className='form-label fs-4 fw-bold'>First Name :</label>
            <input type="text" id='firstname' className='form-control fs-5' placeholder='Enter Your Name'required
            style={{height:"50px", border:"1px solid black"}}/>
            </div>
            <div className="col-md-5">
            <label htmlFor="lastname" className='form-label fs-4 fw-bold'>Last Name :</label>
            <input type="text" id='lastname' className='form-control fs-5' placeholder='Enter Your Last Name' required
             style={{height:"50px", border:"1px solid black"}}/>
            </div>
        </div>
        <div className="row pt-5 d-flex justify-content-center align-items-center">
            <div className="col-md-5">
            <label htmlFor="number" className='form-label fs-4 fw-bold'>DL Number :</label>
            <input type="text" id='number'  className='form-control fs-5' placeholder='Enter Your Name'required
            style={{height:"50px", border:"1px solid black"}}/>
            </div>
            <div className="col-md-5">
            <label htmlFor="image" className='form-label fs-4 fw-bold'>DL Image :</label>
            <input type="File" id="image" className='form-control fs-5' required
             style={{height:"50px", border:"1px solid black"}}/>
            </div>
        </div>

        <div className="container pt-5 d-flex align-items-center justify-content-lg-center">
        <Link type='submit' className='form-control bg-dark text-center text-light
        w-25 fs-3 fw-bold'style={{textDecoration:"none"}} to="checkout">SUBMIT</Link>
        </div>
        </form>
      </div>
    </>
  );
}

export default DriverDetails;
