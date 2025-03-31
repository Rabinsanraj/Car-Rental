import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'boxicons'
import CarNav from '../Component/CarNav';
import { Link} from 'react-router-dom';

function BillingDetails(){
    const BacktoDetails =()=>{
        history.back()
    }
    return(
        <>
       <CarNav name="Checkout"/>
       <div className="container-fluid" style={{width:"95%"}}>
        <h1 className='fs-2 fw-bold pb-3'>Billing Info</h1>
        <form>
            <div className="row">
                <div className="col-md-6">
                    <div className="mb-4">
                    <label htmlFor="firstname" className='form-label fs-4 fw-bold'>First Name :</label>
                    <input type="text" id='firstname' className='form-control fs-5' 
                    placeholder='Enter Your Name'required
                    style={{height:"50px", border:"1px solid black"}}/>
                    </div>
                </div>
                <div className="col-md-6">
                <div className="mb-4">
                    <label htmlFor="lastname" className='form-label fs-4 fw-bold'>Last Name :</label>
                    <input type="text" id='lastname' className='form-control fs-5' 
                    placeholder='Enter Your Last Name'required
                    style={{height:"50px", border:"1px solid black"}}/>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                <div className="mb-4">
                    <label htmlFor="person" className='form-label fs-4 fw-bold'>No of Person :</label>
                    <input type="number" id='persons' className='form-control fs-5' 
                    placeholder='Enter No of Person'required
                    style={{height:"50px", border:"1px solid black"}}/>
                    </div>
                </div>
                <div className="col-md-6">
                <div className="mb-4">
                    <label htmlFor="company" className='form-label fs-4 fw-bold'>Company Name :</label>
                    <input type="text" id='company' className='form-control fs-5' 
                    placeholder='Enter Company Name'required
                    style={{height:"50px", border:"1px solid black"}}/>
                    </div>
                </div>
            </div>
            <div className="row">
            <div className="col-md-12">
            <div className="mb-4">
                    <label htmlFor="company" className='form-label fs-4 fw-bold'>Street Address :</label>
                    <input type="text" id='company' className='form-control fs-5' 
                    placeholder='Enter Your Address'required
                    style={{height:"50px", border:"1px solid black"}}/>
            </div>
            </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                <div className="mb-4">
                    <label htmlFor="country" className='form-label fs-4 fw-bold'>Country :</label>
                    <input type="text" id='country' className='form-control fs-5' 
                    placeholder='Enter Your Country'required
                    style={{height:"50px", border:"1px solid black"}}/>
                    </div>
                </div>
                <div className="col-md-4">
                <div className="mb-4">
                    <label htmlFor="city" className='form-label fs-4 fw-bold'>City :</label>
                    <input type="text" id='city' className='form-control fs-5' 
                    placeholder='Enter Your City'required
                    style={{height:"50px", border:"1px solid black"}}/>
                    </div>
                </div>
                <div className="col-md-4">
                <div className="mb-4">
                    <label htmlFor="pincode" className='form-label fs-4 fw-bold'>Pincode :</label>
                    <input type="text" id='pincode' className='form-control fs-5' 
                    placeholder='Enter Your Pincode'required
                    style={{height:"50px", border:"1px solid black"}}/>
                    </div>
                </div>
            </div>
            
            <div className="row">
                <div className="col-md-6">
                <div className="mb-4">
                    <label htmlFor="email" className='form-label fs-4 fw-bold'>Email Address :</label>
                    <input type="email" id='email' className='form-control fs-5' 
                    placeholder='Enter Your Email'required
                    style={{height:"50px", border:"1px solid black"}}/>
                    </div>
                </div>
                <div className="col-md-6">
                <div className="mb-4">
                    <label htmlFor="phone" className='form-label fs-4 fw-bold'>Phone :</label>
                    <input type="number" id='phone' className='form-control fs-5' 
                    placeholder='Enter Your Phone'required
                    style={{height:"50px", border:"1px solid black"}}/>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                <div className="mb-4">
                    <label htmlFor="addinfo" className='form-label fs-4 fw-bold'>Additional Information :</label>
                    <textarea type="text" id='addinfo' className='form-control fs-5' 
                    placeholder='Additional Informatinon'required
                    style={{height:"150px", border:"1px solid black"}}/>
                    </div>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-md-6 text-center">
                    <div className="mb-4">
                    <Link className='btn btn-dark text-light fs-3 fw-bold' onClick={() => BacktoDetails()}>Back to Details</Link>
                    </div>
                </div>
                <div className="col-md-6 text-center">
                <div className="mb-4">
                <Link className='btn btn-warning form-control text-light fs-3 fw-bold' to="/">Confirm & Pay</Link>
                </div>
                </div>
            </div>
        </form>
       </div>
       </>
    );
}
export default BillingDetails
