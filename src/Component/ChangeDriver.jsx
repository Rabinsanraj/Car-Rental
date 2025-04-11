import React, { useEffect, useRef, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const ChangeDriver = () => {
  const location = useLocation();

  // Extracting data from location state
  const { selectedDriver, firstName, lastName, dlNumber, dlImage  } = location.state || {};
  let [driverData,setData]=useState("")
  useEffect(() => {
    if (selectedDriver) {
      setData(selectedDriver.toUpperCase());
    } else {
      setData("SELECT DRIVER");
    }
  }, [selectedDriver]);
  return (
    <div className="container">
      <h1 className="fw-bold text-center pt-5 pb-3">Driver Details</h1>
      <div className="row pt-1 justify-content-center">
        <div className="col-md-12" style={{ border: "2px solid orange", padding:"20px", width:"auto", minWidth:"70%",
        borderRadius:"20px"}}>
          <div className="row">
            <div className="col-md-4">
              <img src={dlImage } alt="Dl Image " className="w-100" />
            </div>
            <div className="col my-auto text-start">
              <ul style={{listStyleType:"square"}}>
                <li className='fw-bold text-danger fs-4'>{driverData}</li>
                <li className="mt-3 fs-5 fw-bold">NAME : {firstName} <span>{lastName}</span></li>
                <li className="mt-3 fs-5 fw-bold">DL Number : {dlNumber}</li>
              </ul>
              <div className="row">
              <div className="col text-start ms-4 mt-3">
              <Link className="btn btn-dark fs-5 fw-bold " to="/changedriver">Change Driver</Link>
              </div>
              </div>
            </div>
          </div> 
        </div>
      </div>
      <div className="pt-5 text-end">
        <Link to="/paymentoptions" className="btn btn-warning fs-3 mt-5 text-light fw-bold">Print Now</Link>
      </div>
    </div>
  );
};

export default ChangeDriver;
