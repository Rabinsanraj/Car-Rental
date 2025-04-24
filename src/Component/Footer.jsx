import { Link } from 'react-router-dom';
import facebook from '../Images/facebook-logo-24.png';
import instagram from '../Images/instagram-logo-24.png';
import twitter from '../Images/twitter-logo-24.png';

function Footer() {
  return (
    <div className='container-fluid w-100 mt-2 pb-4' style={{ backgroundColor: "black" }}>
      <div className="row text-white">
        <div className="col-md-5">
          <p className='fs-5 fw-bold mt-4 text-center' style={{ color: "red" }}>About US</p>
          <h6 className='fs-5 text-center mt-2 fw-semibold lh-base'>
            Maintains a safe distance from the vehicle ahead, automatically adjusting speed to match traffic flow.
          </h6>
          <div className='input-group mt-4' style={{ height: "6vh" }}>
            <input type="email" className="form-control fs-5 fw-bold" placeholder="Enter Your Email" />
            <button className="btn fs-5 fw-bold text-light" type="button" style={{ backgroundColor: "red" }}>
              Subscribe
            </button>
          </div>
        </div>

        <div className="col-md-2">
          <p className="fs-5 fw-bold mt-4 text-center" style={{ color: "red" }}>Quick Links</p>
          <ul className="list-unstyled text-center">
            <li className="mb-2">
              <Link className="fs-4 text-white fw-semibold text-decoration-none" to="/">Home</Link>
            </li>
            <li className="mb-2">
              <Link className="fs-4 text-white fw-semibold text-decoration-none" to="/service">Services</Link>
            </li>
            <li className="mb-2">
              <Link className="fs-4 text-white fw-semibold text-decoration-none" to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </div>

        <div className="col-md-3">
          <p className='fs-5 fw-bold mt-4 text-center' style={{ color: "red" }}>Business Hour</p>
          <div className="text-center">
            <h1 className="fs-5 fw-bold text-decoration-underline">Mon-Friday</h1>
            <h5>09.00 AM to 07.00 PM</h5>
            <h1 className="fs-5 fw-bold text-decoration-underline">Saturday</h1>
            <h5>10.00 AM to 05.00 PM</h5>
            <h1 className="fs-5 fw-bold text-decoration-underline">Vacation</h1>
            <h5>All Sunday is our vacation</h5>
          </div>
        </div>

        <div className="col-md-2">
          <p className='fs-5 fw-bold mt-4 text-center' style={{ color: "red" }}>Contact Info</p>
          <h1 className="fs-6 fw-bold text-center"><i className='bx bx-phone fs-3'></i> +91 0000000000</h1>
          <h1 className="fs-6 fw-bold text-center"><i className='bx bx-envelope fs-3'></i> Easycar@gmail.com</h1>
          <div className="pt-4 d-flex justify-content-center gap-3">
            <a href="https://www.facebook.com/login.php">
              <img src={facebook} alt="facebook" className="bg-white p-2 rounded-circle" />
            </a>
            <a href="https://www.instagram.com/accounts/login/">
              <img src={instagram} alt="instagram" className="bg-white p-2 rounded-circle" />
            </a>
            <a href="https://x.com/login">
              <img src={twitter} alt="twitter" className="bg-white p-2 rounded-circle" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
