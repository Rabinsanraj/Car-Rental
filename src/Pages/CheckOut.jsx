import React, { useEffect, useState } from "react";
import CarNav from "../Component/CarNav";
import CarDriver from '../Images/CarDriver.jpg'
import { Link } from "react-router-dom";

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
    const updatedBooknow = booknow.filter((item) => item.id !== product.id);
    setBooknow(updatedBooknow);
  };

  return (
    <>
    <CarNav name="Checkout" link1="/" link2="/" pagename1="Home" pagename2="About"/>
    <div className="container-fluid mt-4 pb-4" style={{border:"3px solid black", width:"95%"}}>
      <h1 className="mt-3">Reserve Your Car</h1>
      <h3  className="mt-3 mb-3 text-danger">Check the Details</h3>
      {booknow.length === 0 ? (
        <p className="mt-3 mb-3 fs-4 text-warning">No items in this Page !</p>
      ) : (
        <div className="container text-center" style={{border:"1px solid black"}}>
          {booknow.map((product) => (
          <div key={product.id}>
                <div className="row mt-5">
                <div className="col-md-4">
                    <div className="row pt-3">
                    <img src={product.image} style={{width:"100%", borderRadius:"30px"}} />
                    </div>
                    <div className="row pt-3">
                        <h1>{product.name}</h1>
                    </div>
                </div>
                <div className="col-md-7 mx-auto" style={{border:"3px solid orange", borderRadius:"20px"}}>
                    <Row detail="Rental Charge" amount="+300"/>
                    <Row detail="Rental Charge" amount="+60"/>
                    <Row detail="Rental Charge" amount="+200"/>
                    <Row detail="Rental Charge" amount="+200"/>
                    <Row detail="Rental Charge" amount="+20"/>
                    <Row detail="Rental Charge" amount="+200"/>
                    <div className="row pt-5 pb-3">
                        <h2 className="col">SUBTOTAL</h2>
                        <h2 className="col">2000</h2>
                    </div>
                </div>
                </div>
                <div className="row pt-4 w-100 h-50 mx-auto pb-4">
                  <div className="col text-center">
                  <button className="btn fs-3 fw-bold btn-danger" onClick={() => removeFromBooknow(product)}>Remove</button>
                  </div>
                </div>
                </div>
          ))}
        </div>
      )}

        <div className="row ms-3 mt-5 mx-auto">
                  <div className="col-md-6" style={{border:"2px solid orange"}}>
                    <div className="row">
                      <h1 className="col fw-bold fs-3 pt-4 pb-2">Location & Time</h1>
                      <Link className="col fw-bold pt-4 pb-2 text-end pe-5" to="">
                        <box-icon type='solid' name='edit' color="#787878" size="40px"></box-icon></Link>
                    </div>
                    <hr style={{border:"2px solid black"}} />
                    <div className="row">
                    <div className="col">
                    <ul>
                    <li className="fs-4 fw-bold">Booking Type</li>
                    <li className="fs-5">Delivery</li>
                    </ul>
                    <ul>
                      <li className="fs-4 fw-bold">Rental Type</li>
                      <li className="fs-5">Days</li>
                    </ul>
                    <ul>
                      <li className="fs-4 fw-bold">Delivery Location & Time</li>
                      <li className="fs-5">1230 E Springs Rd, Los Angeles, CA, USA</li>
                      <li className="fs-5">04/18/2025</li>
                    </ul>
                    <ul>
                      <li className="fs-4 fw-bold">Booking Type</li>
                      <li className="fs-5">Norwegian Caribbean Cruise Los Angeles, CA 90025</li>
                      <li className="fs-5">04/27/2025 - 03:00</li>
                    </ul>
                    </div>
                    </div>
                  </div>
                  <div className="col-md-5 mt-5 g-5">
                    <div className="row pb-3" style={{border:"3px solid orange"}}>
                    <h1 className="mt-3 mb-3">Driver Details</h1>
                    <div className="col-md-4">
                    <img src={CarDriver} alt="" className="w-100"/>
                  </div>
                  <div className="col">
                    <ul>
                      <h4></h4>
                      <li className="mt-3 fs-5 fw-bold">No of Rides Completed : 32</li>
                      <li className="mt-3 fs-5 fw-bold">Age : 36</li>
                    </ul>
                    <div className="row">
                      <div className="col">
                        <Link className="btn btn-dark fs-4 fw-bold" to="changedriver">Change Driver</Link>
                      </div>
                    </div>
                  </div>
                  </div>
                  <div className="row mt-5 pt-5 justify-content-end">
                    <div className="col text-end">
                    <Link className="btn btn-warning text-white fs-4 fw-bold" to="billingdetails">Confirm & Pay</Link>
                    </div>
                  </div>

                  </div>
                </div>
    </div>
    </>
  );
};

export default CheckOut;


export function Row(props){
  return(
  <>
  <div className="row pt-4">
    <h6 className="col text-start">{props.detail}</h6>
    <h6 className="col text-end">{props.amount}</h6>
  </div>
  <div className="row">
  <h1  className="col fw-bold fs-3">{props.head}</h1>
  </div>

  </>
  );
} 