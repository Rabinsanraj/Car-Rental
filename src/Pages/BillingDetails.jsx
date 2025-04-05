import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'boxicons';
import CarNav from '../Component/CarNav';
import { Link, useNavigate } from 'react-router-dom';
import { LocationAPI } from '../Component/LocationAPI';


function BillingDetails() {
    const navigate = useNavigate();

    const BacktoDetails = () => {
        history.back();
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;

        if (form.checkValidity()) {
            const formData = {
                firstname: form.firstname.value,
                lastname: form.lastname.value,
                persons: form.persons.value,
                company: form.company.value,
                address: form.address.value,
                country: form.country?.value,
                city: form.city?.value,
                pincode: form.pincode.value,
                email: form.email.value,
                phone: form.phone.value,
                addinfo: form.addinfo.value,
            };

            navigate("/paymentoptions", { state: formData });
        } else {
            form.reportValidity();
            alert("Please fill all required fields.");
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
                                placeholder='Enter Your Name' required
                                style={{ height: "50px", border: "1px solid black" }} />
                        </div>
                        <div className="col-md-6 mb-4">
                            <label htmlFor="lastname" className='form-label fs-4 fw-bold'>Last Name :</label>
                            <input type="text" id='lastname' name="lastname" className='form-control fs-5'
                                placeholder='Enter Your Last Name' required
                                style={{ height: "50px", border: "1px solid black" }} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <label htmlFor="persons" className='form-label fs-4 fw-bold'>No of Person :</label>
                            <input type="number" id='persons' name="persons" className='form-control fs-5'
                                placeholder='Enter No of Person' required
                                style={{ height: "50px", border: "1px solid black" }} />
                        </div>
                        <div className="col-md-6 mb-4">
                            <label htmlFor="company" className='form-label fs-4 fw-bold'>Company Name :</label>
                            <input type="text" id='company' name="company" className='form-control fs-5'
                                placeholder='Enter Company Name' required
                                style={{ height: "50px", border: "1px solid black" }} />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="address" className='form-label fs-4 fw-bold'>Street Address :</label>
                        <input type="text" id='address' name="address" className='form-control fs-5'
                            placeholder='Enter Your Address' required
                            style={{ height: "50px", border: "1px solid black" }} />
                    </div>
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <label className='form-label fs-4 fw-bold'>Country :</label>
                            <LocationAPI placeholder="Enter Your Country" inputstyle="form-control fs-5" name="country"
                                style={{ height: "50px", border: "1px solid black" }} required />
                        </div>
                        <div className="col-md-4 mb-4">
                            <label className='form-label fs-4 fw-bold'>City :</label>
                            <LocationAPI placeholder="Enter Your City" inputstyle="form-control fs-5" name="city"
                                style={{ height: "50px", border: "1px solid black" }} required />
                        </div>
                        <div className="col-md-4 mb-4">
                            <label htmlFor="pincode" className='form-label fs-4 fw-bold'>Pincode :</label>
                            <input type="text" id='pincode' name="pincode" className='form-control fs-5'
                                placeholder='Enter Your Pincode' required
                                style={{ height: "50px", border: "1px solid black" }} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <label htmlFor="email" className='form-label fs-4 fw-bold'>Email Address :</label>
                            <input type="email" id='email' name="email" className='form-control fs-5'
                                placeholder='Enter Your Email' required
                                style={{ height: "50px", border: "1px solid black" }} />
                        </div>
                        <div className="col-md-6 mb-4">
                            <label htmlFor="phone" className='form-label fs-4 fw-bold'>Phone :</label>
                            <input type="number" id='phone' name="phone" className='form-control fs-5'
                                placeholder='Enter Your Phone' required
                                style={{ height: "50px", border: "1px solid black" }} />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="addinfo" className='form-label fs-4 fw-bold'>Additional Information :</label>
                        <textarea id='addinfo' name="addinfo" className='form-control fs-5'
                            placeholder='Additional Information'
                            style={{ height: "150px", border: "1px solid black" }} required />
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-6 text-center mb-2">
                            <button type="button" className='btn btn-dark text-light fs-3 fw-bold' onClick={BacktoDetails}>
                                Back to Details
                            </button>
                        </div>
                        <div className="col-md-6 text-center mb-2">
                            <Link type="submit" className='btn btn-warning text-light fs-3 fw-bold' to="paymentoptions">
                                Confirm & Pay
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default BillingDetails;
