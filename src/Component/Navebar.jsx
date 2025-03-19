import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { BrowserRouter,Routes,Route,Link} from "react-router-dom";
import Sevices from "../Pages/Services"
import Home from '../Pages/Home'
import 'boxicons'
function Navebar (){
    return(
      <BrowserRouter basename="/Car-Rental">
      <nav className="navbar navbar-expand-lg pt-2 pb-2 navbar-light bg-light position-sticky top-0 z-3">
          <div className="container-fluid">
            <Link to="/"><box-icon name='car' color='#ffffff' size="25px" className="bg-danger ms-5 p-2 rounded-circle"></box-icon></Link>
            <Link className="navbar-brand fs-3 ms-2 fw-bold text-danger" to="/">Easy  Car</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link active me-5 fs-5" aria-current="page" to="/" >Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link me-5 fs-5" to="service" >Services</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link me-5 fs-5" to="#" >Dashboard</Link>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link me-5 fs-5" to="#" >Contact US</Link>
                </li>
               <li className='nav-item'>
                <Link className="btn btn-danger fs-5 rounded-pill ps-4 pe-4 me-4"> Get Started</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Routes>
            <Route path="/" element={<Home/>}/>
             <Route path="service" element={<Sevices/>}/>
        </Routes>
      </BrowserRouter>
    );
}
export default Navebar