import 'bootstrap/dist/css/bootstrap.min.css'
import "boxicons";
function Footer(){
    return(
      <div className='container-fluid w-100 mt-2 pb-5' style={{backgroundColor:"black"}}>
        <div className="row row-cols-sm-1 d-flex text-white">
          <div className="col-md-5">
            <p className='display-5 fs-3 fw-bold mt-5 text-center'style={{color:"red"}}>About US</p>
            <h6 className='fs-4 text-center mt-2 fw-semibold lh-base'>Maintains a safe distence from the vehicle ahead, 
              automatically adjusting speed to match traffic flow. </h6>
            <div className='input-group mt-4' style={{height:"6vh"}}>
              <input type="email" className="form-control fs-5 fw-bold" placeholder="Enter Your Email" style={{}}/>
              <button className="btn fs-5 fw-bold text-light" type="button" style={{overflow:"hidden",backgroundColor:"red"}}>Subscribe</button>
            </div>
          </div>
          <div className="col-md-2 footer-nav">
          <p className='display-5 fs-3 fw-bold mt-5 text-center'style={{color:"red"}}>Quick Links</p>
          <div className="row">
          <a className='fs-4 text-white text-center fw-semibold text-decoration-none'
          href="/home">Home</a>
          <a className='fs-4 text-white text-center fw-semibold lh-lg text-decoration-none'
          href="/service">Services</a>
          <a className='fs-4 text-white text-center  fw-semibold lh-lg text-decoration-none'
          href="/dashboard">Dashboard</a>
          </div>
          </div>
          <div className="col-md-3">
          <p className='display-5 fs-3 fw-bold mt-4 text-center'style={{color:"red"}}>Business Hour</p>
          <h1 className="fs-5 fw-bold text-center text-decoration-underline">Mon-Friday</h1>
          <h4 className='text-center'> 09.00 AM to 07.00 PM</h4>

          <h1 className="fs-5 fw-bold text-center text-decoration-underline">Saturday </h1>
          <h4 className='text-center'>10.00 AM to 05.00 PM</h4>
          <h1 className="fs-5 fw-bold text-center text-decoration-underline">Vacation</h1>
          <h4 className='text-center'> All sunday is our vacation</h4>
          </div>
          <div className="col-md-2">
          <p className='display-5 fs-3 fw-bold mt-5 text-center'style={{color:"red"}}>Contact Info</p>
          <h1 className="fs-6 fw-bold text-center"><box-icon name='phone' size='30px' color='#ff0000' ></box-icon>+91 0000000000</h1>
          <h1 className="fs-6 fw-bold text-center"><box-icon name='envelope' size='30px' color='#ff0000' ></box-icon>Easycar@gmail.com</h1>
          <div className="pt-4 d-flex justify-content-center "style={{gap:"15px"}}>
              <a href="https://www.facebook.com/login.php"><box-icon className="bg-white p-2 rounded-circle" name='facebook' 
              size="35px" type='logo' color='red' ></box-icon></a>
              <a href="https://www.instagram.com/accounts/login/"><box-icon className="bg-white p-2 rounded-circle" name='instagram'
              size="35px" type='logo' color='red' ></box-icon></a>
              <a href="https://x.com/login"><box-icon className="bg-white p-2 rounded-circle" name='twitter' 
              size="35px" type='logo' color='red' ></box-icon></a>
          </div>
          </div>
        </div>
      </div>
    );
}
export default Footer