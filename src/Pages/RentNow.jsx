import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "boxicons";
import CarNav from "../Component/CarNav";
import { useState } from "react";
import { LocationAPI } from "../Component/LocationAPI";
import { Link } from "react-router-dom";

function RentNow() {
  const [selectedDriver, setSelectedDriver] = useState("");

  const handleSelect = (driverType) => {
    setSelectedDriver(driverType);
  };
  return (
    <>
      <CarNav name="Checkout" />
      <div className="container-fluid">
        <h1 className="fs-2 fw-bold">Rental Type & Time</h1>
      </div>
      <div className="container-fluid pt-5">
        <div className="row gy-3">
          <div className="col-md-5 mx-auto">
            <div className="card-body text-center">
              <label
                className="container selfdriver pt-3 pb-3 border border-3 rounded-5 text-center w-100"
                style={{
                  backgroundColor:
                    selectedDriver === "self" ? "#aee0af" : "white",
                  cursor: "pointer",
                }}
                onClick={() => handleSelect("self")}
              >
                <input
                  type="radio"
                  name="drivertoggle"
                  style={{ transform: "scale(1.5)", accentColor: "green" }}
                  checked={selectedDriver === "self"}
                  readOnly
                />
                <h1 className="card-title">Delivery</h1>
              </label>
            </div>
          </div>
          <div className="col-md-5 mx-auto">
            <div className="card-body text-center">
              <label
                className="container actingdriver pt-3 pb-3 border border-3 rounded-5 text-center w-100"
                style={{
                  backgroundColor:
                    selectedDriver === "acting" ? "#aee0af" : "white",
                  cursor: "pointer",
                }}
                onClick={() => handleSelect("acting")}
              >
                <input
                  type="radio"
                  name="drivertoggle"
                  style={{ transform: "scale(1.5)", accentColor: "green" }}
                  checked={selectedDriver === "acting"}
                  readOnly
                />
                <h1 className="card-title">Self Pickup</h1>
              </label>
            </div>
          </div>
        </div>
      </div>

      <div
        className="container-fluid mt-4"
        style={{ border: "1px solid black", width: "95%" }}
      >
        <h1 className="fs-2 fw-bold pt-3 pb-3">Location</h1>

        <div className="row ">
          <div className="col-md-5 mx-auto">
            <label htmlFor="country" className="form-label fs-4 fw-bold">
              Delivery Location :
            </label>
            <LocationAPI
              placeholder="Enter Your Country"
              inputstyle="form-control fs-5"
              style={{ height: "50px", border: "1px solid black" }}
              required
            />
            <div className="container text-start">
              <button className="btn btn-dark fs-3 fw-bold mt-5 mb-5 rounded">
                Current Location
              </button>
            </div>
          </div>
          <div className="col-md-5 mx-auto">
            <label htmlFor="city" className="form-label fs-4 fw-bold">
              Return Location :
            </label>
            <LocationAPI
              placeholder="Enter Your City"
              inputstyle="form-control fs-5"
              style={{ height: "50px", border: "1px solid black" }}
              required
            />
            <div className="container text-end">
              <button className="btn btn-dark fs-3 fw-bold mt-5 mb-5">
                Current Location
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="container-fluid mt-5"
        style={{ border: "1px solid black", width: "95%" }}
      >
        <h1 className="fs-2 fw-bold pt-4 pb-4">Booking Type & Time</h1>
      </div>
      <div
        className="container-fluid align-items-center justify-content-center"
        style={{ border: "1px solid black", width: "95%" }}
      >
        <div className="row text-center gx-5 gy-3 mt-5">
          <div className="col-md-3">
            <div className="card">
              <label
                className="container selfdriver pt-3 pb-3 border border-3 text-center w-100"
                style={{
                  backgroundColor:
                    selectedDriver === "hourly" ? "#aee0af" : "white",
                  cursor: "pointer",
                }}
                onClick={() => handleSelect("hourly")}
              >
                <input
                  type="radio"
                  name="timetoggle"
                  style={{ transform: "scale(1.5)", accentColor: "green" }}
                  checked={selectedDriver === "hourly"}
                  readOnly
                />
                <h3 className="pt-3 pb-3 fs-2">Hourly</h3>
              </label>
            </div>
          </div>

          {/* DAY 8 HRS */}
          <div className="col-md-3">
            <div className="card">
              <label
                className="container selfdriver pt-3 pb-3 border border-3 text-center w-100"
                style={{
                  backgroundColor:
                    selectedDriver === "day 8" ? "#aee0af" : "white",
                  cursor: "pointer",
                }}
                onClick={() => handleSelect("day 8")}
              >
                <input
                  type="radio"
                  name="timetoggle"
                  style={{ transform: "scale(1.5)", accentColor: "green" }}
                  checked={selectedDriver === "day 8"}
                  readOnly
                />
                <h3 className="pt-3 pb-3 fs-2">Day 8hrs Only</h3>
              </label>
            </div>
          </div>

          {/* WEEKLY */}
          <div className="col-md-3">
            <div className="card">
              <label
                className="container selfdriver pt-3 pb-3 border border-3 text-center w-100"
                style={{
                  backgroundColor:
                    selectedDriver === "weekly" ? "#aee0af" : "white",
                  cursor: "pointer",
                }}
                onClick={() => handleSelect("weekly")}
              >
                <input
                  type="radio"
                  name="timetoggle"
                  style={{ transform: "scale(1.5)", accentColor: "green" }}
                  checked={selectedDriver === "weekly"}
                  readOnly
                />
                <h3 className="pt-3 pb-3 fs-2">Weekly</h3>
              </label>
            </div>
          </div>

          {/* MONTHLY */}
          <div className="col-md-3">
            <div className="card">
              <label
                className="container selfdriver pt-3 pb-3 border border-3 text-center w-100"
                style={{
                  backgroundColor:
                    selectedDriver === "monthly" ? "#aee0af" : "white",
                  cursor: "pointer",
                }}
                onClick={() => handleSelect("monthly")}
              >
                <input
                  type="radio"
                  name="timetoggle"
                  style={{ transform: "scale(1.5)", accentColor: "green" }}
                  checked={selectedDriver === "monthly"}
                  readOnly
                />
                <h3 className="pt-3 pb-3 fs-2">Monthly</h3>
              </label>
            </div>
          </div>
          <div className="row gy-2">
            <div className="col-md-6">
              <label htmlFor="sd" className="form-label fs-4 fw-bold">
                Starting Date
              </label>
              <input
                type="date"
                id="sd"
                className="form-control mx-auto fs-5"
                placeholder="Enter Your Name"
                required
                style={{
                  height: "50px",
                  border: "1px solid black",
                  width: "70%",
                }}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="st" className="form-label fs-4 fw-bold">
                Starting Time
              </label>
              <input
                type="time"
                id="st"
                className="form-control  mx-auto fs-5"
                placeholder="Enter Your Name"
                required
                style={{
                  height: "50px",
                  border: "1px solid black",
                  width: "70%",
                }}
              />
            </div>
          </div>
          <div className="row gy-2">
            <div className="col-md-6">
              <label htmlFor="ed" className="form-label fs-4 fw-bold">
                Ending Date
              </label>
              <input
                type="date"
                id="ed"
                className="form-control  mx-auto fs-5"
                placeholder="Enter Your Name"
                required
                style={{
                  height: "50px",
                  border: "1px solid black",
                  width: "70%",
                }}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="et" className="form-label fs-4 fw-bold">
                Ending Time
              </label>
              <input
                type="time"
                id="et"
                className="form-control  mx-auto fs-5"
                placeholder="Enter Your Name"
                required
                style={{
                  height: "50px",
                  border: "1px solid black",
                  width: "70%",
                }}
              />
            </div>
          </div>
        </div>
        <div className="container pt-5 text-end pb-5">
          <Link className="btn text-light fs-2 btn-warning" to="paymentoptions">
            Continue Booking
          </Link>
        </div>
      </div>
    </>
  );
}
export default RentNow;
