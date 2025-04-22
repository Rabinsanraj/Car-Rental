import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CarNav from '../Component/CarNav';

function BillingDetails() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstname: '', lastname: '', persons: '',
    company: '', address: '', country: '', city: '',
    pincode: '', email: '', phone: '', addinfo: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emptyField = Object.entries(formData).find(([key, value]) => value.trim() === '');
    if (emptyField) {
      alert(`Please fill the "${emptyField[0]}" field.`);
    } else {
      localStorage.setItem('billingData', JSON.stringify(formData));
      navigate('/paymentoptions');
    }
  };

  return (
    <>
      <CarNav name="Checkout" />
      <div className="container-fluid" style={{ width: "95%" }}>
        <h1 className='fs-2 fw-bold pb-3'>Billing Info</h1>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6 mb-4">
              <label htmlFor="firstname" className='form-label fs-4 fw-bold'>First Name :</label>
              <input type="text" id='firstname' name="firstname" className='form-control fs-5'
                placeholder='Enter Your Name' value={formData.firstname} onChange={handleChange}
                style={{ height: "50px", border: "1px solid black" }} />
            </div>
            <div className="col-md-6 mb-4">
              <label htmlFor="lastname" className='form-label fs-4 fw-bold'>Last Name :</label>
              <input type="text" id='lastname' name="lastname" className='form-control fs-5'
                placeholder='Enter Your Last Name' value={formData.lastname} onChange={handleChange}
                style={{ height: "50px", border: "1px solid black" }} />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-4">
              <label htmlFor="persons" className='form-label fs-4 fw-bold'>No of Person :</label>
              <input type="number" id='persons' name="persons" className='form-control fs-5'
                placeholder='Enter No of Person' value={formData.persons} onChange={handleChange}
                style={{ height: "50px", border: "1px solid black" }} />
            </div>
            <div className="col-md-6 mb-4">
              <label htmlFor="company" className='form-label fs-4 fw-bold'>Company Name :</label>
              <input type="text" id='company' name="company" className='form-control fs-5'
                placeholder='Enter Company Name' value={formData.company} onChange={handleChange}
                style={{ height: "50px", border: "1px solid black" }} />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="address" className='form-label fs-4 fw-bold'>Street Address :</label>
            <input type="text" id='address' name="address" className='form-control fs-5'
              placeholder='Enter Your Address' value={formData.address} onChange={handleChange}
              style={{ height: "50px", border: "1px solid black" }} />
          </div>

          <div className="row">
            <div className="col-md-4 mb-4">
              <label className='form-label fs-4 fw-bold'>Country :</label>
              <input type="text" placeholder="Enter Your Country" className="form-control fs-5"
                name="country" value={formData.country} onChange={handleChange}
                style={{ height: "50px", border: "1px solid black" }} />
            </div>
            <div className="col-md-4 mb-4">
              <label className='form-label fs-4 fw-bold'>City :</label>
              <input placeholder="Enter Your City" className="form-control fs-5"
                name="city" value={formData.city} onChange={handleChange}
                style={{ height: "50px", border: "1px solid black" }} />
            </div>
            <div className="col-md-4 mb-4">
              <label htmlFor="pincode" className='form-label fs-4 fw-bold'>Pincode :</label>
              <input type="text" id='pincode' name="pincode" className='form-control fs-5'
                placeholder='Enter Your Pincode' value={formData.pincode} onChange={handleChange}
                style={{ height: "50px", border: "1px solid black" }} />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-4">
              <label htmlFor="email" className='form-label fs-4 fw-bold'>Email Address :</label>
              <input type="email" id='email' name="email" className='form-control fs-5'
                placeholder='Enter Your Email' value={formData.email} onChange={handleChange}
                style={{ height: "50px", border: "1px solid black" }} />
            </div>
            <div className="col-md-6 mb-4">
              <label htmlFor="phone" className='form-label fs-4 fw-bold'>Phone :</label>
              <input type="number" id='phone' name="phone" className='form-control fs-5'
                placeholder='Enter Your Phone' value={formData.phone} onChange={handleChange}
                style={{ height: "50px", border: "1px solid black" }} />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="addinfo" className='form-label fs-4 fw-bold'>Additional Information :</label>
            <textarea id='addinfo' name="addinfo" className='form-control fs-5'
              placeholder='Additional Information' value={formData.addinfo} onChange={handleChange}
              style={{ height: "150px", border: "1px solid black" }} />
          </div>

          <div className="row mt-4">
            <div className="col-md-6 text-center mb-3">
              <button type="submit" className='btn btn-warning text-light fs-3 fw-bold'>
                Confirm & Pay
              </button>
            </div>
            <div className="col-md-6 text-center mb-2">
              <Link type="button" className='btn btn-dark text-light fs-3 fw-bold' to="/checkout">
                Back to Details
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default BillingDetails;
