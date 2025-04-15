import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "boxicons";
import CarNav from "../Component/CarNav";
import Paypal from "../Images/paypal-logo.png";
import Stripe from "../Images/Stripe-Logo.png";
import Gpay from "../Images/google-pay.png";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import CarDriver from "../Images/CarDriver.jpg";
import Car1 from "../Images/Car1.jpg";
import { Row } from "./CheckOut";
import ChangeDriver from "../Component/ChangeDriver";


function PaymentOptions() {
  const [selectedMethod, setSelectedMethod] = useState("");
  const [showFinalBill, setShowFinalBill] = useState(false);
  
  const location = useLocation();
  const {selectedDelivery,bookingType,
  startDate,endDate,startTime,endTime,currentLocation,returnLocation
  } = location.state || {};

  const { selectedDriver, firstName, lastName, dlNumber, dlImage } = location.state ||{};

  const handleSelect = (method) => {
    setSelectedMethod(method);
  };

  const handleConfirmPayment = () => {
    if (selectedMethod !== "") {
      setShowFinalBill(true);
      setTimeout(() => {
        const targetElement = document.getElementById('finalbill');
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      alert("Please select a payment method before proceeding.");
    }
  };

  const getBackgroundColor = (method) => {
    return selectedMethod === method ? "rgb(214, 245, 255)" : "#88f78a"; 
  };

  // ..........................................................



  return (
    <>
      <CarNav name="Checkout" />
      <div className="container-fluid" id="payoption" style={{ border: "2px solid black" }}>
        <h1 className="fs-2 fw-bold">Payment Options</h1>
        <h3 className="fs-4 pt-2">Choose your payment method</h3>
        <div className="container-fluid pt-4">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-4 pb-3">
              <div className="card payment-card"
                onClick={() => handleSelect("paypal")}
                style={{ backgroundImage: `url(${Paypal})`, backgroundColor: getBackgroundColor("paypal"),
                backgroundSize: "170px", backgroundPosition: "center",backgroundRepeat: "no-repeat", 
                width: "100%", minHeight: "120px", borderRadius: "30px", border: "2px solid green",
                cursor: "pointer"}}>
              </div>
            </div>
            <div className="col-md-4 pb-3">
              <div className="card payment-card"
                onClick={() => handleSelect("stripe")}
                style={{ backgroundImage: `url(${Stripe})`, backgroundColor: getBackgroundColor("stripe"), 
                backgroundSize: "170px",backgroundPosition: "center", backgroundRepeat: "no-repeat", 
                width: "100%", minHeight: "120px",borderRadius: "30px",border: "2px solid green", 
                cursor: "pointer",}}>
              </div>
            </div>
            <div className="col-md-4 pb-3">
              <div className="card payment-card" 
                onClick={() => handleSelect("gpay")} 
                style={{backgroundImage: `url(${Gpay})`,backgroundColor: getBackgroundColor("gpay"), 
                backgroundSize: "170px", backgroundPosition: "center", backgroundRepeat: "no-repeat",
                width: "100%",minHeight: "120px",borderRadius: "30px",border: "2px solid green",
                cursor: "pointer",}}>
              </div>
            </div>
          </div>

          <div className="row pb-3">
            <div className="col-md-4 text-center">
              <div className="card payment-card" 
                onClick={() => handleSelect("visa")}
                style={{ backgroundColor: getBackgroundColor("visa"),textDecoration: "none",
                borderRadius: "30px",border: "2px solid green",cursor: "pointer",}}>
                <h1 className="fs-3 fw-bold">VISA</h1>
                <h3 className="fs-4 fw-light">Debit Card</h3>
                <h4 className="fs-3 fw-bold">4532*****5221</h4>
              </div>
            </div>
            <div className="col-md-4 text-center pt-3 my-auto">
              <div className="card payment-card"  onClick={() => handleSelect("new_card")} 
                style={{ backgroundColor: getBackgroundColor("new_card"),
                  border: "1px solid orange", textDecoration: "none",borderRadius: "30px", cursor: "pointer",}}>
                <h1 className="fs-2 p-4">+ Add a new Card</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="container d-flex justify-content-center align-items-center pt-5 pb-5">
          <button 
            className="btn btn-warning fs-2 fw-bold text-light"
            onClick={handleConfirmPayment}>
            Confirm & Pay
          </button>
        </div>{showFinalBill && (<FinalBill selectedDelivery={selectedDelivery} bookingType={bookingType}
          startDate={startDate} endDate={endDate}startTime={startTime}endTime={endTime} 
          currentLocation={currentLocation} returnLocation={returnLocation} selectedDriver={selectedDriver}
          firstName={firstName} lastName={lastName} dlNumber={dlNumber} dlImage={dlImage}/>)}</div>
    </> 
  );
}

export default PaymentOptions;

export function FinalBill({


  selectedDelivery,
  bookingType,
  startDate,
  endDate,
  startTime,
  endTime,
  currentLocation,
  returnLocation,

  selectedDriver,
   firstName, 
   lastName, 
   dlNumber,
  dlImage
}) {
  // console.log(typeof selectedDriver)
  return (
    <>
      <div className="container-fluid text-center mx-auto mt-5 mb-5 pt-5 pb-5" id='finalbill' style={{border:"2px solid black"}}>
        <h1>
          <box-icon name="check-double" color="white" size="70px" className="bg-success p-1 rounded-circle"></box-icon>
        </h1>
        <h1 className="fs-2 fw-bold pt-3">
          Thank you! Your Booking Has Been Received
        </h1>
        <div className="container-fluid mx-auto mt-5 pt-1 pb-1" style={{ backgroundColor: "#a5eed1" }}>
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-3 h-50">
              <img src={Car1} alt="" className="w-75" style={{ borderRadius: "30px" }}/>
            </div>
            <div className="col-md-5 pt-5">
              <h1 className="fs-2 fw-bold">Chevrolet Camaro</h1>
              <h1 className="fs-2 fw-bold">Miami St Destin</h1>
            </div>
            <div className="col-md-4 text-center pt-5">
              <h1 className="fs-3 fw-bold">TOTAL AMOUNT</h1>
              <h1 className="fs-2 fw-bold" style={{color:"red"}}>2000</h1>
            </div>
          </div>
        </div>
        <div className="container mt-5 mx-auto">
          <div className="row">
            <div className="col-md-6 text-start" style={{ border: "2px solid black" }}>
              <div className="row">
                <h1 className="col fw-bold fs-3 pt-3 pb-3">Location & Time</h1>
                <Link className="col fw-bold pt-4 pb-2 text-end pe-5" to="/rentnow">
                  <box-icon type='solid' name='edit' color="#787878" size="40px"></box-icon>
                </Link>
              </div>
              <hr style={{ border: "2px solid black" }} />
              <div className="row">
                <div className="col">
                  <ul>
                    <li className="fs-4 fw-bold">Booking Type</li>
                    <li className="fs-5">{selectedDelivery}</li>
                  </ul>
                  <ul>
                    <li className="fs-4 fw-bold">Rental Type</li>
                    <li className="fs-5">{bookingType}</li>
                  </ul>
                  <ul>
                    <li className="fs-4 fw-bold">Delivery Location & Time </li>
                    <li className="fs-5">
                      {currentLocation}
                    </li>
                    <li className="fs-5">{startDate} - {startTime}</li>
                  </ul>
                  <ul>
                    <li className="fs-4 fw-bold">Return Location & Time</li>
                    <li className="fs-5">
                      {returnLocation}
                    </li>
                    <li className="fs-5">{endDate} - {endTime}</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-5 mt-3 mx-auto" style={{ border: "3px solid black", borderRadius: "20px" }}>
              <Row detail="Rental Charge" amount="+300" />
              <Row detail="Rental Charge" amount="+60" />
              <Row detail="Rental Charge" amount="+200" />
              <Row detail="Rental Charge" amount="+200" />
              <Row detail="Rental Charge" amount="+20" />
              <Row detail="Rental Charge" amount="+200" />
              <div className="row pt-5 pb-3">
                <h2 className="col">SUBTOTAL</h2>
                <h2 className="col">2000</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row pt-4">
            <div className="col-md-6" style={{border:"1px solid black"}}>
              <div className="row">
                <h2 className="text-start pt-4">Payment Details</h2>
              </div>
              <hr style={{border:"2px solid black"}} />
              <div className="row">
                <div className="col">
                  <ul>
                    <li className="text-start fs-3 fw-bold">Payment Mode</li>
                    <li className="text-start fs-4">Debit Card</li>
                    <li className="text-start fs-3 fw-bold">Transation ID</li>
                    <li className="text-start fs-4">#13245454455454</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-5 mx-auto my-auto" style={{border:"1px solid black",height:"fit-content"}}>
              <div className="row">
                <h2 className="text-start pt-4">Billing Information</h2>
              </div>
              <hr style={{border:"2px solid black"}} />
              <div className="row">
                <div className="col">
                  <ul>
                    <li className="text-start fw-bold">Darren Jurel</li>
                    <li className="text-start fw-bold">Mak Infotech </li>
                    <li className="text-start fw-bold">1230 E Springs Rd, Los Angeles, CA, USA</li>
                    <li className="text-start fw-bold">+1 0000000000</li>
                    <li className="text-start fw-bold">demo@gmail.com</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <ChangeDriver/>
          <div className="pt-5 text-end">
        <Link to="/paymentoptions" className="btn btn-warning fs-3 mt-5 text-light fw-bold">Print Now</Link>
          </div>
        </div>
      </div>
      </>
  );
}