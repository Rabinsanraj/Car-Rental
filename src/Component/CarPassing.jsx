import CaratNight from "../Images/carpassing.jpeg"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

function CarPassing (){
    return(
        <>
        <div className="container-fluid w-100 mt-4" style={{backgroundImage: `url(${CaratNight})`,
            backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",
             width: "100%", height:"auto"}}>
                <div className='container-fluid pt-5 pb-5 w-100'>
                <div className="row row-cols-2 d-flex text-center text-white fs-1">
                    <div className="col-md-3">
                    <box-icon name='target-lock'  color='black' size="45px" className="p-3 mt-5 mb-3 rounded" style={{backgroundColor:"red"}}></box-icon>
                    <h1 className="fs-1 fw-bold mt-3">829 +</h1>
                    <h1 className="fs-3 fw-bold mt-3 mb-3">Happily Client</h1>
                    </div>
                    <div className="col-md-3 ">
                    <box-icon name='car'  color='black' size="45px" className="p-3 mt-5 mb-3 rounded" style={{backgroundColor:"red"}}></box-icon>
                    <h1 className="fs-1 fw-bold mt-3">56 +</h1>
                    <h1 className="fs-3 fw-bold mt-3 mb-3">Number Of Cars</h1>
                    </div>
                    <div className="col-md-3">
                    <box-icon name='buildings'  color='black' size="45px" className="p-3 mt-5 mb-3 rounded" style={{backgroundColor:"red"}}></box-icon>
                    <h1 className="fs-1 fw-bold mt-3">127 +</h1>
                    <h1 className="fs-3 fw-bold mt-3 mb-3">Car Center</h1>
                    </div>
                    <div className="col-md-3">
                    <box-icon name='time-five' color='black' size="45px" className="p-3 mt-5 mb-3 rounded" style={{backgroundColor:"red"}} ></box-icon>
                    <h1 className="fs-1 fw-bold mt-3">589 +</h1>
                    <h1 className="fs-3 fw-bold mt-3 mb-3">Total Kilometers</h1>
                    </div>
                </div>

                </div>
                </div>
        </>
    );
}
export default CarPassing