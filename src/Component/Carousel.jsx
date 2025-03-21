import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'boxicons'

function Carousel (props){
    return(
        <>
            <div className="col-md-4">
              <div className="card mb-3" >
                <div className="container" style={{backgroundImage: `url(${props.image})`, backgroundColor:"#e4e4e4",
              backgroundSize:"420px",backgroundPosition:"center",backgroundRepeat:"no-repeat",
              width: "100%",minHeight:"300px"}}>
                <a href="#"><box-icon name='heart'size="40px" className='p-1 rounded-circle fw-bold'></box-icon></a>
                </div>
                <div className="card-body mt-2 mb-2" style={{backgroundColor:"#dfdfdf"}}>
                  <h3 className="card-title text-center">{props.head}</h3>
                  <h5 className='text-center pt-3 pb-3'>{props.review}</h5>
                  <div className="row m-3 p-1 bg-white rounded-pill" style={{boxShadow:"inset 5px 5px 5px rgba(0,0,0,2)"}}>
                    <div className="col-3">
                    <button className='mt-1' type='button' style={{background:"none", border:"none"}}><box-icon name='plus'size="30px" ></box-icon></button>
                    </div>
                    <div className="col">
                        <h3 className='text-danger text-center mt-1'>1500/day</h3>
                    </div>
                    <div className="col-3">
                    <button className='mt-1' type='button'style={{background:"none", border:"none"}}><box-icon name='minus' size="30px"></box-icon></button>
                    </div>
                  </div>
                  <div className="row p-2">
                    <div className="col-4">
                      <h3 className='text-center fs-5 fw-bold'>4 Seats</h3>
                    </div>
                    <div className="col-4">
                     <h3 className='text-center fs-5 fw-bold'>AT/MT</h3>
                    </div>
                    <div className="col-4">
                      <h3 className='text-center fs-5 fw-bold'>Petrol</h3>
                    </div>
                  </div>
                  <div className="row p-2">
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
                  <button className='btn btn-dark form-control mt-2 mb-3' type="button">Book Now</button>
                </div>
              </div>
            </div>
        </>
    );
}
export default Carousel