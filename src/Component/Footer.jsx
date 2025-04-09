import 'bootstrap/dist/css/bootstrap.min.css'
import "boxicons/css/boxicons.min.css";
function Footer(){
    return(
      <div className='container-fluid w-100 mt-4 pb-5' style={{backgroundColor:"black"}}>
        <div className="row row-cols-sm-1 d-flex text-white">
          <div className="col-md-5">
            <p className='display-5 fs-2 fw-normal mt-5 ms-5 text-start'>About US</p>
            <h6 className='fs-4 text-center mt-5 fw-semibold lh-base' style={{marginLeft:"70px"}}>Maintains a safe distence from the vehicle ahead, 
              automatically adjusting speed to match traffic flow. </h6>
            <div className='input-group mb-5'style={{height:"60px",marginTop:"80px"}}>
              <input type="email" className="form-control fs-4 fw-bold" placeholder="Enter Your Email" style={{}}/>
              <button className="btn btn-primary fs-5 fw-bold"type="button">Subscribe</button>
            </div>
          </div>
          <div className="col-md-2">
          <p className='display-5 fs-2 fw-normal mt-5 text-center'>Quick Links</p>
          <div className="row">
          <a className='fs-4 text-center mt-4 fw-semibold lh-base' href="/home">Home</a>
          <a className='fs-4 text-center mt-4 fw-semibold lh-base' href="/service">Services</a>
          <a className='fs-4 text-center mt-4 fw-semibold lh-base' href="/dashboard">Dashboard</a>
          </div>
          </div>
          <div className="col-md-3">
          <p className='display-5 fs-2 fw-normal mt-5 text-center'>Business Hour</p>
          <h1 className="fs-5 text-center fw-semibold lh-lg">Mon-Friday : 09.00 AM to 07.00 PM</h1>
          <h1 className="fs-5 text-center fw-semibold lh-lg">Saturday : 10.00 AM to 05.00 PM</h1>
          <h1 className="fs-5 text-center fw-semibold lh-lg">Vacation : All sunday is our vacation</h1>
          </div>
          <div className="col-md-2">
          <p className='display-5 fs-2 fw-normal mt-5 text-center'>Contact Info</p>
          <h1 className="fs-6 fw-bold text-center"><box-icon name='phone' size='30px' color='#ff0000' ></box-icon>+91 0000000000</h1>
          <h1 className="fs-6 fw-bold text-center"><box-icon name='envelope' size='30px' color='#ff0000' ></box-icon>Easycar@gmail.com</h1>
          <div className="pt-3 d-flex justify-content-center "style={{gap:"15px"}}>
              <box-icon className="bg-white p-2 rounded-circle" name='facebook' size="35px" type='logo' color='red' ></box-icon>
              <box-icon className="bg-white p-2 rounded-circle" name='instagram' size="35px" type='logo' color='red' ></box-icon>
              <box-icon className="bg-white p-2 rounded-circle" name='twitter' size="35px" type='logo' color='red' ></box-icon>
          </div>
          </div>
        </div>
      </div>
    );
}
export default Footer