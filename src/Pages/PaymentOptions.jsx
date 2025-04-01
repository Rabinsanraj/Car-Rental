import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import "boxicons"
import CarNav from '../Component/CarNav';
import Paypal from '../Images/paypal-logo.png'
import Stripe from '../Images/Stripe-Logo.png'
import Gpay from '../Images/google-pay.png'
import { Link } from 'react-router-dom';

function PaymentOptions() {
    return (
        <>
            <CarNav name="Checkout" />
            <div className="container-fluid" style={{ border: "2px solid black" }}>
                <h1 className='fs-2 fw-bold'>Payment Options</h1>
                <h3 className='fs-4 pt-2'>Choose your payment method</h3>
                <div className="container-fluid pt-4">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-md-4 pb-3">
                            <Link className="card payment-card" style={{
                                backgroundImage: `url(${Paypal})`, backgroundColor: "#88f78a",
                                backgroundSize: "170px", backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",width: "100%", minHeight: "120px",
                                borderRadius: "30px", border: "2px solid green"}}>
                            </Link>
                        </div>
                        <div className="col-md-4 pb-3">
                            <Link className="card payment-card" style={{
                                backgroundImage: `url(${Stripe})`, backgroundColor: "#88f78a",
                                backgroundSize: "170px", backgroundPosition: "center",
                                backgroundRepeat: "no-repeat", width: "100%", minHeight: "120px",
                                borderRadius: "30px", border: "2px solid green"}}>
                            </Link>
                        </div>
                        <div className="col-md-4 pb-3">
                            <Link className="card payment-card" style={{backgroundImage: `url(${Gpay})`,
                                backgroundColor: "#88f78a", backgroundSize: "170px", backgroundPosition: "center",
                                backgroundRepeat: "no-repeat", width: "100%",
                                minHeight: "120px", borderRadius: "30px", border: "2px solid green"}}>
                            </Link>
                        </div>
                    </div>

                    <div className="row pb-3">
                        <div className="col-md-4 text-center">
                            <Link className="card payment-card" style={{ backgroundColor: "#88f78a",
                                textDecoration: "none", borderRadius: "30px", border: "2px solid green"}}>
                                <h1 className='fs-3 fw-bold'>VISA</h1>
                                <h3 className='fs-4 fw-light'>Debit Card</h3>
                                <h4 className='fs-3 fw-bold'>4532*****5221</h4>
                            </Link>
                        </div>
                        <div className="col-md-4 text-center my-auto">
                            <Link className="card payment-card" style={{
                                border: "1px solid orange", textDecoration: "none"}}>
                                <h1 className='fs-2 p-4'>+ Add a new Card</h1>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="container d-flex justify-content-center align-items-center pt-5 pb-5">
                    <Link className='btn btn-warning fs-2 fw-bold text-light'>Confirm & Pay</Link>
                </div>
            </div>
        </>
    );
}

export default PaymentOptions;
