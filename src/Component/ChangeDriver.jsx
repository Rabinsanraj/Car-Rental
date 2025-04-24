import React, { useEffect, useMemo, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

const ChangeDriver = () => {
  const location = useLocation();
  const bookingData = JSON.parse(localStorage.getItem("bookingData")) || {};
  const storedDriver = bookingData.driverData || {};
  const incomingDriver = location.state || {};

  const mergedData = { ...storedDriver, ...incomingDriver };
  const { selectedDriver, firstName, lastName, dlNumber, dlImage } = mergedData;

  const driverData = useMemo(() => selectedDriver ? selectedDriver.toUpperCase() : "SELECT DRIVER", [selectedDriver]);

  return (
    <div className="container">
      <h1 className="fw-bold text-center pt-5 pb-3">Driver Details</h1>
      <div className="row pt-1 justify-content-center">
        <div className="col-md-12" style={{ border: "2px solid orange", padding: "20px", minWidth: "70%", borderRadius: "20px" }}>
          <div className="row">
            <div className="col-md-4">
              <img src={dlImage} alt="Dl Image" className="w-100" />
            </div>
            <div className="col my-auto text-start">
              <ul style={{ listStyleType: "square" }}>
                <li className='fw-bold fs-4' style={{ color: "red" }}>{driverData}</li>
                <li className="mt-3 fs-5 fw-bold">NAME : {firstName} <span>{lastName}</span></li>
                <li className="mt-3 fs-5 fw-bold">DL Number : {dlNumber}</li>
              </ul>
              <div className="row">
                <div className="col text-start ms-4 mt-3">
                  <Link className="btn btn-dark fs-5 fw-bold" to="/changedriver">Change Driver</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangeDriver;

// ----------------------------------------------------------------

export function RentNowDetails() {
  const location = useLocation();
  const bookingData = JSON.parse(localStorage.getItem("bookingData")) || {};

  return (
    <>
      <div className="col-md-6 text-start" style={{ border: "2px solid black" }}>
        <div className="row">
          <h1 className="col fw-bold fs-3 pt-3 pb-3">Location & Time</h1>
          <Link className="col fw-bold pt-4 pb-2 text-end pe-5" to="/rentnow">
            <i className="bx bx-edit fs-1"></i>
          </Link>
        </div>
        <hr style={{ border: "2px solid black" }} />
        <ul>
          <li className="fs-4 fw-bold">Booking Type</li>
          <li className="fs-5">{bookingData.selectedDelivery}</li>
        </ul>
        <ul>
          <li className="fs-4 fw-bold">Rental Type</li>
          <li className="fs-5">{bookingData.bookingType}</li>
        </ul>
        <ul>
          <li className="fs-4 fw-bold">Delivery Location & Time</li>
          <li className="fs-5">{bookingData.currentLocation}</li>
          <li className="fs-5">{bookingData.startDate} - {bookingData.startTime}</li>
        </ul>
        <ul>
          <li className="fs-4 fw-bold">Return Location & Time</li>
          <li className="fs-5">{bookingData.returnLocation}</li>
          <li className="fs-5">{bookingData.endDate} - {bookingData.endTime}</li>
        </ul>
      </div>
    </>
  );
}



export function BillingDetails() {
  const [formData, setFormData] = useState("");

  useEffect(() => {
    const storedData = localStorage.getItem('billingData');
    if (storedData) setFormData(JSON.parse(storedData));
  }, []);

  return (
    <>
      <div className="col-md-5 mx-auto my-auto" style={{ border: "1px solid black", height: "fit-content" }}>
        <div className="row">
          <h3 className="col fw-bold pt-3 pb-3">Billing Information</h3>
          <Link className="col-4 fw-bold pt-4 pb-2 text-end pe-5" to="/billingdetails">
            <i className="bx bx-edit fs-1"></i>
          </Link>
        </div>
        <hr style={{ border: "2px solid black" }} />
        <ul>
          <li className="text-start fw-bold">{formData.firstname} <span>{formData.lastname}</span></li>
          <li className="text-start fw-bold">{formData.company}</li>
          <li className="text-start fw-bold">{formData.address}, {formData.country}, {formData.city} - {formData.pincode}</li>
          <li className="text-start fw-bold">{formData.phone}</li>
          <li className="text-start fw-bold">{formData.email}</li>
        </ul>
      </div>
    </>
  );
}

