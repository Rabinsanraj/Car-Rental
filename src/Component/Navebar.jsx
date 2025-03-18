import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'boxicons'
function Navebar (){
    return(
        <>
        <nav className="navbar navbar-expand-lg pt-2 pb-2 navbar-light bg-light position-sticky top-0 z-3">
          <div className="container-fluid">
            <a href=""><box-icon name='car' color='#ffffff' size="25px" className="bg-danger ms-5 p-2 rounded-circle"></box-icon></a>
            <a className="navbar-brand fs-3 ms-2 fw-bold text-danger" href="#">Easy  Car</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link active me-5 fs-5" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link me-5 fs-5" href="#">Services</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link me-5 fs-5" href="#">Dashboard</a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link me-5 fs-5" href="#">Contact US</a>
                </li>
               <li className='nav-item'>
                <button className="btn btn-danger fs-5 rounded-pill ps-4 pe-4 me-4"> Get Started</button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        </>
    );
}
export default Navebar