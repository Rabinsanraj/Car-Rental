import Car from "../Images/CarOnRoad.jpg"
import KeyInHand from "../Images/keyinhand.jpg"
import ManONCar from "../Images/topofcar.jpg"
import CarGray from "../Images/Car-gray.jpg"
import Merun from "../Images/merun.png"
import 'bootstrap/dist/css/bootstrap.min.css'
import CarPassing from '../Component/CarPassing'
import {LocationAPI} from '../Component/LocationAPI'
import { CarAPI } from "../Component/CarAPI"
import { Link } from "react-router-dom"
import React, { useEffect, useState } from "react";

function Home() {
  const [formData, setFormData] = useState({
    carType: "",
    pickupLocation: "",
    dropLocation: ""});

  const [errors, setErrors] = useState({
    carType: "",
    pickupLocation: "",
    dropLocation: ""});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    Object.keys(formData).forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = `${field} is required.`;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form is valid, proceeding...");
    }
  };
 
  return (
    
    <>
    <div className="container-fluid" style={{backgroundImage: `url(${Car})`,
    backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",
     width: "100%",minHeight:"700px"}}>
    <div className="container-fluid  pb-5 d-flex">
    <div className="w-auto pt-4">
      <div className="card-body h1-form p-4"  style={{ width:"auto",backgroundColor:"#050563",borderRadius:"15px",opacity:"90%",
        margin:"auto", marginTop:"50px",boxShadow:"5px 5px 10px rgba(0, 0, 0, 0.6)"}}>
        <h5 className="card-title fs-4 fw-bold text-center text-white mb-4">CONTINUE CARE RESERVATION</h5>
        <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <CarAPI name="carType" inputstyle="form-control"  placeholder="Enter Your Car Type"
        value={formData.carType} onChange={handleChange}/>
        {errors.carType && <small className="text-danger">{errors.carType}</small>}
      </div>
      <div className="mb-4">
        <LocationAPI name="pickupLocation" inputstyle="form-control" placeholder="Enter Pickup Location" 
        value={formData.pickupLocation} onChange={handleChange}/>
        {errors.pickupLocation && <small className="text-danger">{errors.pickupLocation}</small>}
      </div>
      <div className="mb-4">
        <LocationAPI name="dropLocation" inputstyle="form-control" placeholder="Enter Drop Location" 
        value={formData.dropLocation} onChange={handleChange}/>
        {errors.dropLocation && <small className="text-danger">{errors.dropLocation}</small>}
      </div>

      <div className="row pb-4">
        <div className="col-6 col-md-6 text-center">
          <label htmlFor="pickupDate" className="form-label text-white">Pickup Date</label>
          <input type="date" className="form-control" style={{width:"100%"}}required/>
        </div>
        <div className="col-6 col-md-6 text-center">
          <label htmlFor="pickupTime" className="form-label text-white">Pickup Time</label>
          <input type="time" className="form-control" placeholder="Enter Drop Location"
           style={{width:"100%"}}required/>
        </div>
      </div>

      <div className="row pb-4">
        <div className="col-6 col-md-6 text-center">
          <label htmlFor="dropDate" className="form-label text-white">Drop Date</label>
          <input type="date" className="form-control" placeholder="Enter Drop Location"
           style={{width:"100%"}} required/>
          
        </div>
        <div className="col-6 col-md-6 text-center">
          <label htmlFor="dropTime" className="form-label text-white">Drop Time</label>
          <input type="time" className="form-control" placeholder="Enter Drop Location" 
          style={{width:"100%"}}required/>
        </div>
      </div>

      <Link type="submit" className="btn btn-danger text-white w-100" to="/getstart" onClick={handleSubmit}>
      Book Now</Link>
    </form>
      </div>
    </div>
    </div>
    </div>
    {/* ---------------------------------------------------------------- */}

    <div className="w-100 pt-4" style={{backgroundImage: `url(${Merun})`, backgroundColor:"#e4e4e4",
    backgroundSize:"600px",backgroundPosition:"center 170px,0px",backgroundRepeat:"no-repeat",
     width: "100%", top:"50px"}}> 
      <div className="w-100 text-center pb-5">
        <h1 className="text-black fs-2 fw-bold lh-1">EASY CARS <span style={{color:"red"}}>FEATURE</span></h1>
        <h5 className="text-black fw-bold lh-1">Maintains a safe distence from the vehicle ahead, automatically</h5>
        <h5 className="text-black fw-bold lh-1"  >adjusting speed to match traffic flow.</h5>
      </div>
{/* --------------------------------- */}
<div className="container-fluid w-100 pb-5" style={{paddingTop:"250px"}}>
  <div className="row row-cols-2 d-flex text-center ">
    <div className="col-md-3 pb-5">
    <box-icon name='trophy' color='#08082d' size="40px" className="p-2 rounded-circle"style={{backgroundColor:"red",}}></box-icon>
    <h1 className="fs-5 text-black fw-bolder">First Class Service</h1>
          <h4>Experience Excellence</h4>
          <h4> - Ride First Class </h4>
    </div>
    <div className="col-md-3">
    <box-icon name='purchase-tag'size="40px" type='solid' color='#08082d' className="p-2 rounded-circle"style={{backgroundColor:"red"}}></box-icon>
    <h1 className="fs-5 text-black fw-bolder">Quality at Minimum</h1>
          <h4>Experience Excellence</h4>
          <h4> - Ride First Class </h4>
    </div>
    <div className="col-md-3">
    <box-icon name='map'color='#08082d' size="40px" className="p-2 rounded-circle"style={{backgroundColor:"red"}}></box-icon>
    <h1 className="fs-5 text-black fw-bolder">24/7 Road Assistance</h1>
          <h4>Experience Excellence</h4>
          <h4> - Ride First Class </h4>
    </div>
    <div className="col-md-3">
    <box-icon name='star' color='#08082d' size="40px" className="p-3 rounded-circle" style={{backgroundColor:"red"}}></box-icon>
    <h1 className="fs-5 text-black fw-bolder">Free Pickup and Drop Off</h1>
          <h4>Experience Excellence</h4>
          <h4> - Ride First Class </h4>
    </div>
  </div>
</div>
</div>     
{/* --------------------------------- */}

   <div className="container-fluid pt-3">
    <div className="row row-cols-md-2 ">
      <div className="col-md-7 text-center">
        <div className="container-fluid">
          <h1 className="pt-3" style={{color:"black"}}><span style={{color:"red"}}>About</span> Easy Car Rente</h1>
          <div className="container-fluid pt-5">
            <div className="row gy-4">
              <div className="col-md-6">
              <div className="card" style={{width:"100%",height:"fit-content",minHeight:"260px",maxHeight:"350px",borderRadius:"20px",boxShadow:"5px 5px 10px rgba(0, 0, 0, 0.5)"}}>
              <h1><box-icon name='target-lock'  color='#08082d' size="45px" className="p-3 mt-3 rounded-circle" style={{backgroundColor:"red"}}></box-icon></h1>
              <h3 className="fs-2 fw-bold">Our Vision</h3>
              <p className="fs-6 fw-bold">"Redefining Mobility, Empowering journeys."</p>
            </div>
              </div>
              <div className="col-md-6">
              <div className="card" style={{ width:"100%",height:"fit-content",minHeight:"260px",maxHeight:"auto",borderRadius:"20px",boxShadow:"5px 5px 10px rgba(0, 0, 0, 0.5)"}}>
              <h1><box-icon name='like' color='#08082d' size="45px" className="p-3 mt-3 rounded-circle" style={{backgroundColor:"red"}} ></box-icon></h1>
                <h3 className="fs-2 fw-bold">Our Mision</h3>
                <p className="fs-6 fw-bold">"affordable and customer car rental solutions and convenience at every Mile"</p>
              </div>
              </div>
            </div>
            <div className="row pt-4">
              <div className="col-md-6">
              <div className="card pt-5 text-white" style={{backgroundColor:"#050563",height:"200px",borderRadius:"20px",boxShadow:"5px 5px 10px rgba(0, 0, 0, 0.5)"}}>
              <h1 className="fw-bold">10</h1>
              <p className="fs-2 fw-bold">Years of Experience</p>
            </div>
              </div>
              <div className="col-md-6 pt-4 ">
              <div className="card p-3 border-0">
              <div className="row  mx-auto">
                <p className="d-flex fw-bold"><box-icon name='check' color='#08082d' size="25px" className="me-4 rounded"
                style={{backgroundColor:"red"}}></box-icon>First Class Service</p>
              </div>
              <div className="row mx-auto">
                <p className="d-flex fw-bold"><box-icon name='check' color='#08082d' size="25px" className="me-2 rounded" 
                style={{backgroundColor:"red"}}></box-icon>Quality at Minimum</p>
              </div>
              <div className="row mx-auto">
                <p className="d-flex fw-bold"><box-icon name='check'color='#08082d' size="25px" className="me-3 rounded" 
                style={{backgroundColor:"red"}}></box-icon>Free Pick and Drop</p>
              </div> 
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-5 pb-5" style={{backgroundImage:`url(${KeyInHand})`,
      backgroundRepeat:"no-repeat",backgroundSize:"cover",height:"700px"}} >
        <div className="container position-relative w-100 left-25  mt-5 top-50">
        <img src={ManONCar} className="w-100 pt-5 mt-5"/>
        </div>
      </div>
    </div>
   </div>
    <CarPassing/>

    <div className="container-fluid mt-1" style={{backgroundImage: `url(${CarGray})`,
    backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",
     width: "100%"}}>
      <div className="text-container text-end" style={{paddingTop:"150px",paddingBottom:"150px", textShadow:"3px 3px 5px black"}}>
        <h1 className="display-1 fw-bold  lh-base" style={{color:"red"}}>Rent Your Car</h1>
        <h1 className="display-6 fw-bold  lh-base" style={{color:"white"}}>Intrerested in Renting ?</h1>
        <h1 className="display-6 fw-bold  lh-base" style={{color:"white"}}>Don't hesitate and <span style={{color:"red"}}>SEND </span> 
        us a <span className="display-4 fw-bold  lh-base" style={{color:"red"}}>MESSAGE</span></h1>
        <div className="row row row-cols-2 row-cols-md-2 pt-5">
          <div className="col">
            <div className="row">
            <div className="col-4"></div>
            <div className="col"><button className="btn text-white fs-4 fw-bold p-auto" style={{backgroundColor:"#ff1b1b",
            borderRadius:"25px",textShadow:"3px 3px 5px black"}}>Whatsapp</button></div>
            <div className="col-4"></div>
            </div>
          </div>
          <div className="col">
            <div className="row">
            <div className="col-4"></div>
            <div className="col"><Link to="contact" className="btn text-white fs-4 fw-bold p-auto" style={{backgroundColor:"#ff1b1b",
            borderRadius:"25px"}}>Contactus</Link></div>
            <div className="col-4"></div>
            </div>
          </div>
        </div>
      </div>
     </div>
    </>
  );
  setTimeout(()=>{
    console.log=()=>{}
  },5000)
 
}
export default Home;