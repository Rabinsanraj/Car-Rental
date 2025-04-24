import CarNav from '../Component/CarNav';
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

function DriverDetails() {
  const [selectedDriver, setSelectedDriver] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dlNumber, setDlNumber] = useState("");
  const [dlImageBase64, setDlImageBase64] = useState("");
  const [formValidated, setFormValidated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("driverData"));
    if (savedData) {
      setSelectedDriver(savedData.selectedDriver || "");
      setFirstName(savedData.firstName || "");
      setLastName(savedData.lastName || "");
      setDlNumber(savedData.dlNumber || "");
      setDlImageBase64(savedData.dlImage || "");
    }
  }, []);

  useEffect(() => {
    const driverData = { selectedDriver, firstName, lastName, dlNumber, dlImage: dlImageBase64 };
    localStorage.setItem("driverData", JSON.stringify(driverData));
  }, [selectedDriver, firstName, lastName, dlNumber, dlImageBase64]);

  const handleSelect = (driverType) => setSelectedDriver(driverType);

  const handleDataChangeDriver = (e) => {
    e.preventDefault();
    setFormValidated(true);
    if (firstName && lastName && dlNumber && dlImageBase64) {
      const driverData = { selectedDriver, firstName, lastName, dlNumber, dlImage: dlImageBase64 };
      navigate('/finalbill', { state: driverData });
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => setDlImageBase64(reader.result);
      reader.readAsDataURL(file);
    } else {
      alert("Please upload a valid image file.");
    }
  };

  const isFormIncomplete = formValidated && (!firstName || !lastName || !dlNumber || !dlImageBase64);

  return (
    <>
      <CarNav name="Checkout" />
      <div className="container-fluid text-center">
        <h1 className="fw-bold pt-3 pb-3">Driver Details</h1>
      </div>

      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-5 pb-5">
            <label className="container selfdriver pt-3 pb-3 border border-3 rounded-5 text-center w-100"
              style={{ backgroundColor: selectedDriver === "self driver" ? "#aee0af" : "white", cursor: "pointer" }}
              onClick={() => handleSelect("self driver")}>
              <input type="radio" name="drivertoggle" style={{ transform: "scale(1.5)", accentColor: "green" }}
                checked={selectedDriver === "self driver"} readOnly />
              <h2 className="pt-3">Self Driver</h2>
            </label>
          </div>

          <div className="col-md-5">
            <label className="container actingdriver pt-3 pb-3 border border-3 rounded-5 text-center w-100"
              style={{ backgroundColor: selectedDriver === "acting driver" ? "#aee0af" : "white", cursor: "pointer" }}
              onClick={() => handleSelect("acting driver")}>
              <input type="radio" name="drivertoggle" style={{ transform: "scale(1.5)", accentColor: "green" }}
                checked={selectedDriver === "acting driver"} readOnly />
              <h2 className="pt-3">Acting Driver</h2>
            </label>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <form className="pt-2">
          <div className="row d-flex justify-content-center">
            <div className="col-md-5">
              <label htmlFor="firstname" className="form-label fs-4 fw-bold">First Name :</label>
              <input type="text" id="firstname" className="form-control fs-5"
                placeholder="Enter Your Name" style={{ height: "50px", border: "1px solid black" }}
                value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
            </div>
            <div className="col-md-5">
              <label htmlFor="lastname" className="form-label fs-4 fw-bold">Last Name :</label>
              <input type="text" id="lastname" className="form-control fs-5"
                placeholder="Enter Your Last Name" style={{ height: "50px", border: "1px solid black" }}
                value={lastName} onChange={(e) => setLastName(e.target.value)} required />
            </div>
          </div>

          <div className="row pt-5 d-flex justify-content-center">
            <div className="col-md-5">
              <label htmlFor="number" className="form-label fs-4 fw-bold">DL Number :</label>
              <input type="text" id="number" className="form-control fs-5"
                placeholder="Enter Your DL Number" style={{ height: "50px", border: "1px solid black" }}
                value={dlNumber} onChange={(e) => setDlNumber(e.target.value)} required />
            </div>
            <div className="col-md-5">
              <label htmlFor="image" className="form-label fs-4 fw-bold">DL Image :</label>
              <input type="file" id="image" className="form-control fs-5"
                style={{ height: "50px", border: "1px solid black" }}
                onChange={handleImageUpload} required />
            </div>
          </div>

          <div className="container pt-5 pb-5 d-flex align-items-center justify-content-center">
            <button
              type="button"
              className={`form-control w-50 text-center fs-3 fw-bold ${isFormIncomplete ? "bg-warning text-dark" : "bg-dark text-light"}`}
              onClick={handleDataChangeDriver}>
              {isFormIncomplete ? "Please fill all fields!" : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default DriverDetails;
