import React, { useEffect, useState } from "react";
import CarNav from "../Component/CarNav";

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
    <CarNav name="Our Cars" link1="/" link2="/" pagename1="Home" pagename2="About"/>
    <div className="container-fluid mt-4">
      <h1>Reserve Your Car</h1>
      <h3>Check the Details</h3>
      {booknow.length === 0 ? (
        <p>Check the Details</p>
      ) : (
        <div className="container pb-5 text-center">
          {booknow.map((product) => (
          <div key={product.id}>
                <div className="row">
                <div className="col-4">
                    <div className="row pt-3">
                    <img src={product.image} style={{width:"100%", borderRadius:"30px"}} />
                    </div>
                    <div className="row pt-3">
                        <h1>{product.name}</h1>
                    </div>
                </div>
                <div className="col-7 border border-3 mx-auto">
                    <div className="row pt-4 ">
                        <h6 className="col text-start">Rental Charge</h6>
                        <h6 className="col text-end">+300</h6>
                    </div>
                    <div className="row">
                        <div className="col"></div>
                        <div className="col"></div>
                    </div>
                    <div className="row">
                        <div className="col"></div>
                        <div className="col"></div>
                    </div>
                    <div className="row">
                        <div className="col"></div>
                        <div className="col"></div>
                    </div>
                    <div className="row">
                        <div className="col"></div>
                        <div className="col"></div>
                    </div>
                    <div className="row">
                        <div className="col"></div>
                        <div className="col"></div>
                    </div>
                    <div className="row">
                        <div className="col"></div>
                        <div className="col"></div>
                    </div>
                </div>
                </div>
                {/* <div className="row"> 
                <button className="btn btn-danger" onClick={() => removeFromBooknow(product)}>Remove</button>
                </div>
                  <button>Rent Now</button> */}
                </div>
          ))}
        </div>
      )}

    </div>
    </>
  );
};

export default CheckOut;
