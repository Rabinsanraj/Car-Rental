import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const ChangeDriver = () => {
  const location = useLocation();

  // Extracting data from location state
  const { selectedDriver, firstName, lastName, dlNumber, dlImage } = location.state || {};
  return (
    <div className="container">
      <h1 className="fw-bold text-center pt-5 pb-3">Driver Details</h1>
      
      <div className="row pt-3">
        <div className="col-md-6" style={{ border: "2px solid orange", padding:"20px" }}>
          <h2 className="fs-3 fw-bold text-start pt-3 pb-3">Driver Details</h2>
          <div className="row">
            <div className="col-md-4">
              <img src={dlImage} alt="Driver's License" className="w-100" />
            </div>
            <div className="col my-auto text-start">
              <ul>
                <h3>{selectedDriver}</h3>
                <li className="mt-3 fs-5 fw-bold">{dlNumber}</li>
                <li className="mt-3 fs-5 fw-bold">{firstName} <span>{lastName}</span></li>
              </ul>
              <div className="row">
              <div className="col">
              <Link className="btn btn-dark fs-5 fw-bold" to="/changedriver">Change Driver</Link>
              </div>
              </div>
            </div>
          </div> 
        </div>
      </div>
      <div className="pt-5 text-center">
        <Link to="/paymentoptions" className="btn btn-warning fs-2 text-white fw-bold">Print Now</Link>
      </div>
    </div>
  );
};

export default ChangeDriver;
