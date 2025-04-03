import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "boxicons";
import CarNav from "../Component/CarNav";
import Paypal from "../Images/paypal-logo.png";
import Stripe from "../Images/Stripe-Logo.png";
import Gpay from "../Images/google-pay.png";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function PaymentOptions() {
  const [selectedMethod, setSelectedMethod] = useState(null);
  const navigate = useNavigate();

  const handleSelect = (method) => {
    setSelectedMethod(method);
  };

  const handleConfirm = () => {
    if (selectedMethod) {
      navigate("/finalbill");
    } else {
      alert("Please select a payment method before proceeding.");
    }
  };
  const getBackgroundColor = (method) => {
    return selectedMethod === method ? "rgb(214, 245, 255)" : "#88f78a"; // Yellow for selected, Green for unselected
  };

  return (
    <>
      <CarNav name="Checkout" />
      <div className="container-fluid" style={{ border: "2px solid black" }}>
        <h1 className="fs-2 fw-bold">Payment Options</h1>
        <h3 className="fs-4 pt-2">Choose your payment method</h3>
        <div className="container-fluid pt-4">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-4 pb-3">
              <div className="card payment-card"
                onClick={() => handleSelect("paypal")}
                style={{backgroundImage: `url(${Paypal})`, backgroundColor: getBackgroundColor("paypal"),
                  backgroundSize: "170px", backgroundPosition: "center",
                  backgroundRepeat: "no-repeat", width: "100%", minHeight: "120px", borderRadius: "30px", border: "2px solid green",
                  cursor: "pointer",}}>
                  </div>
            </div>
            <div className="col-md-4 pb-3">
              <div className="card payment-card"
                onClick={() => handleSelect("stripe")}
                style={{backgroundImage: `url(${Stripe})`, backgroundColor: getBackgroundColor("stripe"), backgroundSize: "170px",
                 backgroundPosition: "center", backgroundRepeat: "no-repeat", width: "100%", minHeight: "120px",
                 borderRadius: "30px",border: "2px solid green", cursor: "pointer",
                }}>
            </div>
            </div>
            <div className="col-md-4 pb-3">
              <div className="card payment-card" onClick={() => handleSelect("gpay")} style={{ backgroundImage: `url(${Gpay})`,
                backgroundColor: getBackgroundColor("gpay"), backgroundSize: "170px", backgroundPosition: "center",
                backgroundRepeat: "no-repeat",width: "100%",minHeight: "120px",borderRadius: "30px",
                border: "2px solid green",cursor: "pointer",}}>

            </div>
            </div>
           </div>

          <div className="row pb-3">
            <div className="col-md-4 text-center">
              <div className="card payment-card" onClick={() => handleSelect("visa")}style={{backgroundColor: getBackgroundColor("visa"),
                textDecoration: "none", borderRadius: "30px",border: "2px solid green",cursor: "pointer",}}>
                <h1 className="fs-3 fw-bold">VISA</h1>
                <h3 className="fs-4 fw-light">Debit Card</h3>
                <h4 className="fs-3 fw-bold">4532*****5221</h4>
              </div>
            </div>
            <div className="col-md-4 text-center pt-3 my-auto">
              <div className="card payment-card" onClick={() => handleSelect("new_card")} style={{backgroundColor: getBackgroundColor("new_card"),
                border: "1px solid orange", textDecoration: "none", borderRadius: "30px", cursor: "pointer",}}>
                <h1 className="fs-2 p-4">+ Add a new Card</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="container d-flex justify-content-center align-items-center pt-5 pb-5">
          {/* <button className="btn btn-warning fs-2 fw-bold text-light"onClick={handleConfirm}>
            Confirm & Pay</button> */}
            <Link className='btn btn-warning fs-2 fw-bold text-light' to="finalbill">Confirm & Pay</Link>
        </div>
      </div>
    </>
  );
}

export default PaymentOptions;

