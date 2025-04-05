import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "boxicons";
import CarNav from "../Component/CarNav";
import CarDriver from "../Images/CarDriver.jpg";
import Car1 from "../Images/Car1.jpg";
import { Row } from "./CheckOut";
import { Link, useLocation, useNavigate } from "react-router-dom";
function FinalBill() {
  const { state } = useLocation();
  
  return (
    <>
      <CarNav name="Checkout" />

      <div className="container-fluid text-center mx-auto pt-3">
        <h1>
          <box-icon name="check-double"color="white"size="70px"className="bg-success p-1 rounded-circle"></box-icon>
        </h1>
        <h1 className="fs-2 fw-bold pt-3">
          Thank you! Your Booking Has Been Received
        </h1>
        <div className="container-fluid mx-auto mt-5 pt-1 pb-1"
          style={{ backgroundColor: "#a5eed1" }}>
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-3 h-50">
              <img src={Car1} alt="" className="w-75" style={{ borderRadius: "30px" }}/>
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
          <div className="col-md-6 text-start" style={{ border: "2px solid black" }}>
            <div className="row">
              <h1 className="col fw-bold fs-3 pt-3 pb-3">Location & Time</h1>
              <Link className="col fw-bold pt-4 pb-2 text-end pe-5" to="rentnow" >
              <box-icon type='solid' name='edit' color="#787878" size="40px"></box-icon></Link>
            </div>
            <hr style={{ border: "2px solid black" }} />
            <div className="row">
              <div className="col">
                <ul>
                  <li className="fs-4 fw-bold">Booking Type</li>
                  <li className="fs-5">{state?.bookingType}</li>
                </ul>
                <ul>
                  <li className="fs-4 fw-bold">Rental Type</li>
                  <li className="fs-5">{state?.rentalType}</li>
                </ul>
                <ul>
                  <li className="fs-4 fw-bold">Delivery Location & Time </li>
                  <li className="fs-5">
                    1230 E Springs Rd, Los Angeles, CA, USA
                  </li>
                  <li className="fs-5">{state?.startDate} - {state?.startTime}</li>
                </ul>
                <ul>
                  <li className="fs-4 fw-bold">Booking Type</li>
                  <li className="fs-5">
                    Norwegian Caribbean Cruise Los Angeles, CA 90025
                  </li>
                  <li className="fs-5">{state?.endDate} - {state?.endTime}</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-5 mx-auto"
            style={{ border: "3px solid black", borderRadius: "20px" }}>
            <Row detail="Rental Charge" amount="+300" />
            <Row detail="Rental Charge" amount="+60" />
            <Row detail="Rental Charge" amount="+200" />
            <Row detail="Rental Charge" amount="+200" />
            <Row detail="Rental Charge" amount="+20" />
            <Row detail="Rental Charge" amount="+200" />
            <div className="row pt-5 pb-3">
              <h2 className="col">SUBTOTAL</h2>
              <h2 className="col">2000</h2>
            </div>
          </div>
        </div>
        </div>
        <div className="container">
        <div className="row pt-4">
        <div className="col-md-6" style={{border:"1px solid black"}}>
          <div className="row">
            <h2 className="text-start pt-4">Payment Details</h2>
          </div>
          <hr style={{border:"2px solid black"}} />
          <div className="row">
            <div className="col">
            <ul>
              <li className="text-start fs-3 fw-bold">Payment Mode</li>
              <li className="text-start fs-4">Debit Card</li>
              <li className="text-start fs-3 fw-bold">Transation ID</li>
              <li className="text-start fs-4">#13245454455454</li>
            </ul>
            </div>
          </div>
        </div>
        <div className="col-md-5 mx-auto my-auto" style={{border:"1px solid black",height:"fit-content"}}>
          <div className="row">
            <h2 className="text-start pt-4">Billing Information</h2>
          </div>
          <hr style={{border:"2px solid black"}} />
          <div className="row">
            <div className="col">
            <ul>
              <li className="text-start fw-bold">Darren Jurel</li>
              <li className="text-start fw-bold">Mak Infotech </li>
              <li className="text-start fw-bold">1230 E Springs Rd, Los Angeles, CA, USA</li>
              <li className="text-start fw-bold">+1 0000000000</li>
              <li className="text-start fw-bold">demo@gmail.com</li>
            </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row pt-4">
        <div className="col-md-6" style={{border:"2px solid orange"}}>
          <h1 className="text-start fs-3 fw-bold pt-3 pb-3">Driver Details</h1>
          <div className="row">
          <div className="col-md-4">
              <img src={CarDriver} alt="" className="w-100"/> 
           </div>
           <div className="col my-auto text-start">
            <ul>
            <li className="mt fs-5 fw-bold">No of Rides Completed : 32</li>
           <li className="mt-3 fs-5 fw-bold">Age : 36</li>
            </ul>
             <div className="row pb-4">
            <div className="col mx-auto">
            <Link className="btn btn-dark fs-4 fw-bold" to="changedriver">Change Driver</Link>
            </div>
            </div>
            </div>
          </div> 
        </div>
        <div className="col-md-5 my-auto">
          <div className="col text-end">
          <Link className="btn btn-warning text-white fs-2 fw-bold">Print Order</Link>
          </div>
        </div>
      </div>
        </div>
      </div>

     
    </>
  );
}
export default FinalBill;
