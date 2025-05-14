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

    localStorage.setItem("bookingData", JSON.stringify(formData));
    navigate("/PaymentOptions");
  };

  return (
    <>
      <CarNav name="Checkout" />
      <div className="container-fluid">
        <h1 className="fs-2 fw-bold">Rental Type & Time</h1>
      </div>
      <div className="container-fluid pt-5">
        <div className="row gy-3">
          {["delivery", "selfpickup"].map((value) => (
            <div className="col-md-5 mx-auto" key={value}>
              <div className="card-body text-center">
                <label
                  className={`container pt-3 pb-3 border border-3 rounded-5 text-center w-100 ${selectedDelivery === value ? "bg-light" : ""}`}
                  onClick={() => handleSelect(value)}
                >
                  <input
                    type="radio"
                    name="drivertoggle"
                    style={{ transform: "scale(1.5)", accentColor: "green" }}
                    checked={selectedDelivery === value}
                    readOnly
                  />
                  <h1 className="card-title">{value === "delivery" ? "Delivery" : "Self Pickup"}</h1>
                </label>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container-fluid mt-4 pb-4" style={{ border: "1px solid black", width: "95%" }}>
        <h1 className="fs-2 fw-bold pt-3 pb-3">Location</h1>
        <div className="row">
          {[
            { label: "Delivery Location", value: currentLocation, setter: setCurrentLocation },
            { label: "Return Location", value: returnLocation, setter: setReturnLocation }
          ].map(({ label, value, setter }) => (
            <div className="col-md-5 mx-auto" key={label}>
              <label htmlFor={label} className="form-label fs-4 fw-bold">
                {label} :
              </label>
              <input
                type="text"
                placeholder={`Enter Your ${label}`}
                className="form-control fs-5"
                style={{ height: "50px", border: "1px solid black" }}
                value={value}
                onChange={(e) => setter(e.target.value)}
                required
              />
            </div>
          ))}
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
                  className="container pt-3 pb-3 border border-3 text-center w-100"
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
                  <h3 className="pt-3 pb-3 fs-2">{type === "day 8" ? "Day 8hrs Only" : type.charAt(0).toUpperCase() + type.slice(1)}</h3>
                </label>
              </div>
            </div>
          ))}
        </div>

        <div className="row gy-2 pt-4">
          {[["sd", startDate, setStartDate], ["st", startTime, setStartTime], ["ed", endDate, setEndDate], ["et", endTime, setEndTime]].map(
            ([id, value, setter], index) => (
              <div className="col-md-6" key={id}>
                <h3 htmlFor={id} className="form-label text-center fs-4 fw-bold">{index % 2 === 0 ? "Starting" : "Ending"} {index % 2 === 0 ? "Date" : "Time"}</h3>
                <input
                  type={index % 2 === 0 ? "date" : "time"}
                  id={id}
                  className="form-control mx-auto fs-5"
                  value={value}
                  onChange={(e) => setter(e.target.value)}
                  style={{ height: "50px", border: "1px solid black", width: "70%" }}
                  required
                />
              </div>
            )
          )}
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
