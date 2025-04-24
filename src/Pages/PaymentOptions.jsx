import CarNav from "../Component/CarNav";
import Paypal from "../Images/paypal-logo.png";
import Stripe from "../Images/Stripe-Logo.png";
import Gpay from "../Images/google-pay.png";
import Car1 from "../Images/Car1.jpg";
import { useState } from "react";
import ChangeDriver, { RentNowDetails, BillingDetails } from "../Component/ChangeDriver";
import '../Component/Style.css';

function Row({ detail, amount }) {
  return (
    <div className="row">
      <div className="col text-start ms-4 pt-2">
        <p className="fs-4 fw-bold">{detail}</p>
      </div>
      <div className="col text-end me-3 pt-2">
        <p className="fs-4">{amount}</p>
      </div>
    </div>
  );
}

function PaymentOptions() {
  const [selectedMethod, setSelectedMethod] = useState("");
  const [showFinalBill, setShowFinalBill] = useState(false);

  const handleSelect = (method) => setSelectedMethod(method);

  const handleConfirmPayment = () => {
    if (!selectedMethod) {
      alert("Please select a payment method before proceeding.");
      return;
    }
    setShowFinalBill(true);
    setTimeout(() => {
      document.getElementById("finalbill")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const getBackgroundColor = (method) =>
    selectedMethod === method ? "rgb(214, 245, 255)" : "#88f78a";

  const getCardStyle = (method, image = null) => ({
    backgroundColor: getBackgroundColor(method),
    backgroundImage: image ? `url(${image})` : "none",
    backgroundSize: "170px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
    minHeight: "120px",
    borderRadius: "30px",
    border: "2px solid green",
    cursor: "pointer",
  });

  return (
    <>
      <CarNav name="Checkout" />
      <div className="container-fluid" id="payoption" style={{ border: "2px solid black" }}>
        {!showFinalBill && (
          <>
            <h1 className="fs-2 fw-bold">Payment Options</h1>
            <h3 className="fs-4 pt-2">Choose your payment method</h3>
            <div className="container-fluid pt-4">
              <div className="row align-items-center justify-content-center">
                {[
                  { method: "paypal", img: Paypal },
                  { method: "stripe", img: Stripe },
                  { method: "gpay", img: Gpay },
                ].map(({ method, img }) => (
                  <div className="col-md-4 pb-3" key={method}>
                    <div className="card payment-card"
                      onClick={() => handleSelect(method)}
                      style={getCardStyle(method, img)} />
                  </div>
                ))}
              </div>
              <div className="row pb-3">
                <div className="col-md-4 text-center">
                  <div className="card payment-card"
                    onClick={() => handleSelect("visa")}
                    style={getCardStyle("visa")}>
                    <h1 className="fs-3 fw-bold">VISA</h1>
                    <h3 className="fs-4 fw-light">Debit Card</h3>
                    <h4 className="fs-3 fw-bold">4532*****5221</h4>
                  </div>
                </div>
                <div className="col-md-4 text-center pt-3 my-auto">
                  <div className="card payment-card"
                    onClick={() => handleSelect("new_card")}
                    style={{ backgroundColor: getBackgroundColor("new_card"), border: "1px solid orange", borderRadius: "30px", cursor: "pointer" }}>
                    <h1 className="fs-2 p-4">+ Add a new Card</h1>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {!showFinalBill && (
          <div className="container d-flex justify-content-center align-items-center pt-5 pb-5">
            <button className="btn btn-warning fs-2 fw-bold text-light" onClick={handleConfirmPayment}>Confirm & Pay</button>
          </div>
        )}

        {showFinalBill && <FinalBill selectedMethod={selectedMethod} />}
      </div>
    </>
  );
}

function FinalBill({ selectedMethod }) {
  return (
    <div className="container-fluid text-center mx-auto mt-5 mb-5 pt-5 pb-5" id="finalbill" style={{ border: "2px solid black" }}>
      <h1><i className="bx bx-check-double fs-1 bg-success p-1 rounded-circle"></i></h1>
      <h1 className="fs-2 fw-bold pt-3">Thank you! Your Booking Has Been Received</h1>

      <div className="container-fluid mx-auto mt-5 pt-1 pb-1" style={{ backgroundColor: "#a5eed1" }}>
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-3">
            <img src={Car1} alt="Car" className="w-75" style={{ borderRadius: "30px" }} />
          </div>
          <div className="col-md-5 pt-5">
            <h1 className="fs-2 fw-bold">Chevrolet Camaro</h1>
            <h1 className="fs-2 fw-bold">Miami St Destin</h1>
          </div>
          <div className="col-md-4 text-center pt-5">
            <h1 className="fs-3 fw-bold">TOTAL AMOUNT</h1>
            <h1 className="fs-2 fw-bold" style={{ color: "red" }}>2000</h1>
          </div>
        </div>
      </div>

      <div className="container mt-5 mx-auto">
        <div className="row">
          <RentNowDetails />
          <div className="col-md-5 mt-3 mx-auto" style={{ border: "3px solid black", borderRadius: "20px" }}>
            <Row detail="Rental Charge" amount="+300" />
            <Row detail="Service Fee" amount="+60" />
            <Row detail="Insurance" amount="+200" />
            <Row detail="Driver Charge" amount="+200" />
            <Row detail="Taxes" amount="+20" />
            <Row detail="Other Fees" amount="+200" />
            <div className="row pt-5 pb-3">
              <h2 className="col">SUBTOTAL</h2>
              <h2 className="col">2000</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row pt-4">
          <div className="col-md-6" style={{ border: "1px solid black" }}>
            <h2 className="text-start pt-4">Payment Details</h2>
            <hr style={{ border: "2px solid black" }} />
            <ul>
              <li className="text-start fs-4 fw-bold">Payment Mode</li>
              <li className="text-start fs-4 fw-bold text-primary">
                {selectedMethod === "new_card" ? "New Card" : selectedMethod?.toUpperCase()}
              </li>
              <li className="text-start fs-4 fw-bold">Transaction ID</li>
              <li className="text-start fs-4 fw-bold">#13245454455454</li>
            </ul>
          </div>

          <BillingDetails />
        </div>

        <ChangeDriver />
        <div className="pt-5 text-end">
          <a onClick={() => { window.print(); }} className="btn btn-warning fs-3 mt-5 text-light fw-bold"> Print Now </a>
        </div>
      </div>
    </div>
  );
}

export default PaymentOptions;
