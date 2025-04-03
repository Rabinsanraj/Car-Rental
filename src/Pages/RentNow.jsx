import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'boxicons'
import CarNav from '../Component/CarNav';
import { useState } from 'react';
import { LocationAPI } from '../Component/LocationAPI';

function RentNow(){
 const [selectedDriver, setSelectedDriver] = useState("");

  const handleSelect = (driverType) => {
    setSelectedDriver(driverType);
  };
    return(
    <>
    <CarNav name="Checkout"/>
    <div className="container-fluid">
        <h1 className='fs-2 fw-bold'>Rental Type & Time</h1>
    </div>
    <div className="container-fluid pt-5">
    <div className="row ">
            <div className="col-md-5 mx-auto">
                  <div className="card-body text-center">
                  <label className="container selfdriver pt-3 pb-3 border border-3 rounded-5 text-center w-100"
            style={{ backgroundColor: selectedDriver === "self" ? "#aee0af" : "white", cursor: "pointer",}}
            onClick={() => handleSelect("self")}>
                  <input type="radio" name="drivertoggle" style={{ transform: "scale(1.5)", accentColor: "green" }}
              checked={selectedDriver === "self"} readOnly/>
                    <h1 className="card-title">Delivery</h1>
                    </label>
                  </div>
            </div>
            <div className="col-md-5 mx-auto">
                  <div className="card-body text-center">
                  <label className="container actingdriver pt-3 pb-3 border border-3 rounded-5 text-center w-100"
            style={{ backgroundColor: selectedDriver === "acting" ? "#aee0af" : "white", cursor: "pointer",}}
            onClick={() => handleSelect("acting")}>
                  <input type="radio" name="drivertoggle" style={{ transform: "scale(1.5)", accentColor: "green" }}
              checked={selectedDriver === "acting"} readOnly/>
                    <h1 className="card-title">Self Pickup</h1>
                    </label>
                  </div>
            </div>
        </div>
    </div>

    <div className="container-fluid mt-4" style={{border:"1px solid black"}}>
        <h1 className='fs-2 fw-bold pt-3 pb-3'>Location</h1>

       <div className="row ">
                <div className="col-md-5 mx-auto">
                <label htmlFor="country" className='form-label fs-4 fw-bold'>Delivery Location :</label>
                <LocationAPI placeholder="Enter Your Country" inputstyle="form-control fs-5"
                 style={{height:"50px", border:"1px solid black"}} required/>
                  <div className="container text-center">
                <button className='btn btn-dark fs-1 mt-5 mb-5'>Current Location</button> 
                </div>
                </div>
                <div className="col-md-5 mx-auto">
                <label htmlFor="city" className='form-label fs-4 fw-bold'>Return Location :</label>
                <LocationAPI placeholder="Enter Your City" inputstyle="form-control fs-5" 
                style={{height:"50px", border:"1px solid black"}} required/>
                <div className="container text-center">
                <button className='btn btn-dark fs-1 fw-bold mt-5 mb-5'>Current Location</button> 
                </div>
                </div>
                </div>

    </div>
    </>
    );
}
export default RentNow