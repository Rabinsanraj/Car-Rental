import React, { useEffect, useState } from "react";
import CarNav from "../Component/CarNav";
import { Link } from "react-router-dom";
import ChangeDriver from "../Component/ChangeDriver";

const CheckOut = () => {
  const [booknow, setBooknow] = useState(() => {
    const savedBooknow = localStorage.getItem("booknow");
    return savedBooknow ? JSON.parse(savedBooknow) : [];
  });

  useEffect(() => {
    if (booknow.length === 0) {
      localStorage.removeItem("booknow");
    } else {
      localStorage.setItem("booknow", JSON.stringify(booknow));
    }
  }, [booknow]);

  // Remove product from booknow
  const removeFromBooknow = (product) => {
    setBooknow((prevState) => prevState.filter((item) => item.id !== product.id));
  };

  return (
    <>
      <CarNav name="Checkout" />
      <div className="container-fluid mt-4 pb-4" style={{ border: "3px solid black", width: "95%" }}>
        <h1 className="mt-3">Reserve Your Car</h1>
        <h3 className="mt-3 mb-3" style={{ color: "red" }}>Check the Details</h3>
        {booknow.length === 0 ? (
          <p className="mt-3 mb-3 fs-4 text-warning">No items in this Page!</p>
        ) : (
          <div className="container text-center" style={{ border: "1px solid black" }}>
            {booknow.map((product) => (
              <div key={product.id}>
                <div className="row mt-5">
                  <div className="col-md-4">
                    <div className="row pt-3">
                      <img src={product.image} style={{ width: "100%", borderRadius: "30px" }} alt="Car" />
                    </div>
                    <div className="row pt-5">
                      <h1>{product.name}</h1>
                    </div>
                  </div>
                  <div className="col-md-7 mx-auto" style={{ border: "3px solid orange", borderRadius: "20px" }}>
                    {["+300", "+60", "+200", "+200", "+20", "+200"].map((amount, index) => (
                      <Row key={index} detail="Rental Charge" amount={amount} />
                    ))}
                    <div className="row pt-5 pb-3">
                      <h2 className="col">SUBTOTAL</h2>
                      <h2 className="col">2000</h2>
                    </div>
                  </div>
                </div>
                <div className="row pt-4 w-100 h-50 mx-auto pb-4">
                  <div className="col text-center">
                    <button className="btn fs-4 text-light fw-bold"style={{ backgroundColor: "red" }}
                      onClick={() => removeFromBooknow(product)}>Remove</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        <ChangeDriver />
        <div className="row mt-5 pt-5 justify-content-end">
          <div className="col text-end">
            <Link className="btn btn-warning text-white fs-4 fw-bold" to="/billingdetails">
              Confirm & Pay
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckOut;

export function Row({ detail, amount }) {
  return (
    <div className="row pt-4">
      <h6 className="col text-start">{detail}</h6>
      <h6 className="col text-end">{amount}</h6>
    </div>
  );
}
