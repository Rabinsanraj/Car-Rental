import CarNav from "../Component/CarNav";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function RentNow() {
  const [selectedDelivery, setSelectedDelivery] = useState("");
  const [bookingType, setBookingType] = useState("");
  const [currentLocation, setCurrentLocation] = useState("");
  const [returnLocation, setReturnLocation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endDate, setEndDate] = useState("");
  const [endTime, setEndTime] = useState("");

  const navigate = useNavigate();

  const handleSelect = (value) => {
    if (["delivery", "selfpickup"].includes(value)) {
      setSelectedDelivery(value);
    } else {
      setBookingType(value);
    }
  };

  const handleContinue = () => {
    if (
      !selectedDelivery ||
      !bookingType ||
      !startDate ||
      !startTime ||
      !endDate ||
      !endTime ||
      !currentLocation ||
      !returnLocation
    ) {
      alert("Please fill in all the fields before continuing.");
      return;
    }

    const formData = {
      selectedDelivery,
      bookingType,
      startDate,
      startTime,
      endDate,
      endTime,
      currentLocation,
      returnLocation,
    };

    // Pass data to the next page using navigate
    localStorage.setItem("bookingData",JSON.stringify(formData))
    navigate("/finalbill");
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
                  backgroundColor: selectedDelivery === "delivery" ? "#aee0af" : "white",
                  cursor: "pointer",
                }}
                onClick={() => handleSelect("delivery")}
              >
                <input
                  type="radio"
                  name="drivertoggle"
                  style={{ transform: "scale(1.5)", accentColor: "green" }}
                  checked={selectedDelivery === "delivery"}
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
                  backgroundColor: selectedDelivery === "selfpickup" ? "#aee0af" : "white",
                  cursor: "pointer",
                }}
                onClick={() => handleSelect("selfpickup")}
              >
                <input
                  type="radio"
                  name="drivertoggle"
                  style={{ transform: "scale(1.5)", accentColor: "green" }}
                  checked={selectedDelivery === "selfpickup"}
                  readOnly
                />
                <h1 className="card-title">Self Pickup</h1>
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid mt-4 pb-4" style={{ border: "1px solid black", width: "95%" }}>
        <h1 className="fs-2 fw-bold pt-3 pb-3">Location</h1>
        <div className="row ">
          <div className="col-md-5 mx-auto">
            <label htmlFor="country" className="form-label fs-4 fw-bold">
              Delivery Location :
            </label>
            <input
              type="text"
              id="currentLoc"
              placeholder="Enter Your Location"
              className="form-control fs-5"
              style={{ height: "50px", border: "1px solid black" }}
              value={currentLocation}
              onChange={(e) => setCurrentLocation(e.target.value)}
              required
            />
          </div>
          <div className="col-md-5 mx-auto">
            <label htmlFor="city" className="form-label fs-4 fw-bold">
              Return Location :
            </label>
            <input
              type="text"
              id="returnLoc"
              placeholder="Enter Your Location"
              className="form-control fs-5"
              style={{ height: "50px", border: "1px solid black" }}
              value={returnLocation}
              onChange={(e) => setReturnLocation(e.target.value)}
              required
            />
          </div>
        </div>
      </div>

      <div className="container-fluid mt-5" style={{ border: "1px solid black", width: "95%" }}>
        <h1 className="fs-2 fw-bold pt-4 pb-4">Booking Type & Time</h1>
      </div>
      <div className="container-fluid align-items-center justify-content-center" style={{ border: "1px solid black", width: "95%" }}>
        <div className="row text-center gx-5 gy-3 mt-5">
          {["hourly", "day 8", "weekly", "monthly"].map((type) => (
            <div className="col-md-3" key={type}>
              <div className="card">
                <label
                  className="container selfdriver pt-3 pb-3 border border-3 text-center w-100"
                  style={{
                    backgroundColor: bookingType === type ? "#aee0af" : "white",
                    cursor: "pointer",
                  }}
                  onClick={() => handleSelect(type)}
                >
                  <input
                    type="radio"
                    name="timetoggle"
                    style={{ transform: "scale(1.5)", accentColor: "green" }}
                    checked={bookingType === type}
                    readOnly
                  />
                  <h3 className="pt-3 pb-3 fs-2">
                    {type === "day 8" ? "Day 8hrs Only" : type.charAt(0).toUpperCase() + type.slice(1)}
                  </h3>
                </label>
              </div>
            </div>
          ))}
        </div>

        <div className="row gy-2 pt-4">
          <div className="col-md-6">
            <h3 htmlFor="sd" className="form-label text-center fs-4 fw-bold">Starting Date</h3>
            <input
              type="date"
              id="sd"
              className="form-control mx-auto fs-5"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              style={{ height: "50px", border: "1px solid black", width: "70%" }}
              required
            />
          </div>
          <div className="col-md-6">
            <h3 htmlFor="st" className="form-label text-center fs-4 fw-bold">Starting Time</h3>
            <input
              type="time"
              id="st"
              className="form-control mx-auto fs-5"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              style={{ height: "50px", border: "1px solid black", width: "70%" }}
              required
            />
          </div>
        </div>
        <div className="row gy-2">
          <div className="col-md-6">
            <h3 htmlFor="ed" className="form-label fs-4 text-center fw-bold">Ending Date</h3>
            <input
              type="date"
              id="ed"
              className="form-control mx-auto fs-5"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              style={{ height: "50px", border: "1px solid black", width: "70%" }}
              required
            />
          </div>
          <div className="col-md-6">
            <h3 htmlFor="et" className="form-label text-center fs-4 fw-bold">Ending Time</h3>
            <input
              type="time"
              id="et"
              className="form-control mx-auto fs-5"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              style={{ height: "50px", border: "1px solid black", width: "70%" }}
              required
            />
          </div>
        </div>

        <div className="container pt-5 text-center pb-5">
          <button className="btn text-light fs-2 fw-bold btn-warning" onClick={handleContinue}>
            Continue Booking
          </button>
        </div>
      </div>
    </>
  );
}

export default RentNow;