import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "boxicons";
import CarNav from "../Component/CarNav";
import Car1 from "../Images/Car1.jpg";
import { Row } from "./CheckOut";

function FinalBill() {
  return (
    <>
      <CarNav name="Checkout" />

      <div className="container-fluid text-center mx-auto pt-3">
        <h1>
          <box-icon
            name="check-double"
            color="white"
            size="70px"
            className="bg-success p-1 rounded-circle"
          ></box-icon>
        </h1>
        <h1 className="fs-2 fw-bold pt-3">
          Thank you! Your Booking Has Been Recived
        </h1>
        <div className="container-fluid mx-auto mt-5 pt-1 pb-1"
          style={{ backgroundColor: "#a5eed1" }}>
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-3 h-50">
              <img
                src={Car1}
                alt=""
                className="w-75"
                style={{ borderRadius: "30px" }}
              />
            </div>
            <div className="col-md-5 pt-5">
              <h1 className="fs-2 fw-bold">Chevrolet Camaro</h1>
              <h1 className="fs-2 fw-bold">Miami St Destin</h1>
            </div>
            <div className="col-md-4 text-center pt-5">
              <h1 className="fs-3 fw-bold">TOTAL AMOUNT</h1>
              <h1 className="fs-2 fw-bold text-danger">2000</h1>
            </div>
          </div>
        </div>
        <div className="container mt-5 mx-auto">
        <div className="row ">
          <div className="col-md-6 text-start" style={{ border: "2px solid orange" }}>
            <div className="row">
              <h1 className="col fw-bold fs-3 pt-3 pb-3">Location & Time</h1>
            </div>
            <hr style={{ border: "2px solid black" }} />
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
                  <li className="fs-5">
                    1230 E Springs Rd, Los Angeles, CA, USA
                  </li>
                  <li className="fs-5">04/18/2025</li>
                </ul>
                <ul>
                  <li className="fs-4 fw-bold">Booking Type</li>
                  <li className="fs-5">
                    Norwegian Caribbean Cruise Los Angeles, CA 90025
                  </li>
                  <li className="fs-5">04/27/2025 - 03:00</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-5 mx-auto"
            style={{ border: "3px solid orange", borderRadius: "20px" }}
          >
            <Row detail="Rental Charge" amount="+300" />
            <Row detail="Rental Charge" amount="+60" />
            <Row detail="Rental Charge" amount="+200" />
            <Row detail="Rental Charge" amount="+200" />
            <Row detail="Rental Charge" amount="+20" />
            <Row detail="Rental Charge" amount="+200" />
            <div className="row pt-2 pb-3">
              <h2 className="col">SUBTOTAL</h2>
              <h2 className="col">2000</h2>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}
export default FinalBill;
