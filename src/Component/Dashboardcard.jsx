import { Link } from 'react-router-dom';

function Dashboardcard(props) {
    const scrollToAllBooking = () => {
        const targetElement = document.getElementById('allBooking');
        if (targetElement) {
            window.scrollTo({ top: targetElement.offsetTop, behavior: "smooth" });
        }
    };

    return (
        <>
            <div className="col-lg-4 col-12">
                <div className="card border-1 mb-4" style={{
                    boxShadow: "7px 7px 10px red",
                    borderRadius: "20px", height: "fit-content"
                }}>
                    <div className="card-title">
                        <div className="row pt-1">
                            <div className="col-8">
                                <h2 className='ms-3 mt-2'>{props.name}</h2>
                                <div className="row">
                                    <h2 className='ms-3 fw-bold'>{props.count}</h2>
                                </div>
                            </div>
                        </div>
                        <hr className='w-75 mx-auto border-3' />
                    </div>
                    <div className="row w-75 pb-5">
                        <Link className='fs-4 ms-3 fw-bold text-decoration-none text-black' to='/mybooking'>
                            {props.view1}<span>{props.icon1}</span>
                        </Link>
                        <a className='fs-4 ms-3 fw-bold text-decoration-none text-black' onClick={scrollToAllBooking}>
                            {props.view2}<span>{props.icon2}</span>
                        </a>
                        <Link className='fs-4 ms-3 fw-bold text-decoration-none text-black' to='/wishlistpage'>
                            {props.view3}<span className='g-1'>{props.icon3}</span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboardcard;

export function Booking(props) {
    return (
        <>
            <div className="container-fluid mt-5" id='allBooking' style={{ width: "95%" }}>
                <h1 className='display-5 fw-bold' style={{ color: "red" }}>{props.heading}</h1>
            </div>
            <div className="container-fluid d-flex justify-content-center align-content-center mt-5">
                <div className="row text-center align-items-center">
                    <hr style={{ border: "1px solid black" }} />
                    <div className="col-md-2">
                        <img className="w-100 border border-2" src={props.image} alt="Car" />
                    </div>
                    <div className="col-sm-6 col-lg-2">
                        <div className="row">
                            <h3 className='fs-6 fw-bold' style={{ color: "#600047" }}>Ferrari 458 MM Speciale</h3>
                        </div>
                        <div className="row">
                            <h3 className='fs-6 fw-bold'>Rent Type : Hourly</h3>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                        <div className="row">
                            <h3 className='fs-6 fw-bold'>Start Date</h3>
                        </div>
                        <div className="row">
                            <h3 className='fs-6 fw-bold'>30 March 2025, 11:30 AM</h3>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                        <div className="row">
                            <h3 className='fs-6 fw-bold'>End Date</h3>
                        </div>
                        <div className="row">
                            <h3 className='fs-6 fw-bold'>30 March 2025, 2:30 PM</h3>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-2 text-center">
                        <div className="row">
                            <h3 className='fs-6 fw-bold'>Price</h3>
                        </div>
                        <div className="row">
                            <h1 className='fs-6 fw-bold'>2000</h1>
                        </div>
                        <div className="row justify-content-center align-items-center">
                            <button type='button' className={props.buttonstyle}>{props.buttonname}</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export function WishListComp() {
    return (
        <>
            <div className="row pb-5">
                <div className="col-4">
                    <img src={Car1} alt="" className='w-100 rounded-4' />
                </div>
                <div className="col-5 mt-3">
                    <div className="row">
                        <div className="col text-center mb-5">
                            <h4>BMW 640 XI Gran Turismo</h4>
                            <h4>Category : <span>BMW</span></h4>
                        </div>
                        <div className="row mt-5">
                            <div className="col-4 mb-4">
                                <h3 className='text-center fs-5 fw-bold'>4 Seats</h3>
                            </div>
                            <div className="col-4">
                                <h3 className='text-center fs-5 fw-bold'>AT/MT</h3>
                            </div>
                            <div className="col-4">
                                <h3 className='text-center fs-5 fw-bold'>Petrol</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <h3 className='text-center fs-5 fw-bold'>2015</h3>
                            </div>
                            <div className="col-4">
                                <h3 className='text-center fs-5 fw-bold'>Settings</h3>
                            </div>
                            <div className="col-4">
                                <h3 className='text-center fs-5 fw-bold'>27 K</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col text-center mt-3">
                    <div className="row">
                        <h3>3.58 Reviews</h3>
                    </div>
                    <div className="row pb-5">
                        <h3 className='fs-2 fw-bold' style={{ color: "red" }}>1500/day</h3>
                    </div>
                    <div className="row mt-5 align-items-center justify-content-center">
                        <Link type='button' className='form-control text-white bg-dark w-50 pt-3 pb-3 fs-4' style={{ textDecoration: "none" }} to="/">
                            Rent Now
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
