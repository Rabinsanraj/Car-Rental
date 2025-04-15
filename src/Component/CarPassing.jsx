import CaratNight from "../Images/carpassing.jpeg"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

function CarPassing (){
    return(
        <>
        <div className="container-fluid w-100 mt-5" style={{backgroundImage: `url(${CaratNight})`,
            backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",
             width: "100%", height:"auto"}}>
                <div className='container-fluid pt-5 pb-md-5 mb-3 w-100'>
                <div className="row row-cols-2 d-flex text-center text-white fs-1">
                    <div className="col-md-3">
                    <box-icon name='target-lock'  color='black' size="45px" className="p-md-3 mt-md-5 mb-md-3 rounded" style={{backgroundColor:"red"}}></box-icon>
                    <h1 className="fs-1 fw-bold mt-md-3">829 +</h1>
                    <h1 className="fs-3 fw-bold mt-md-3 mb-4">Happily Client</h1>
                    </div>
                    <div className="col-md-3 ">
                    <box-icon name='car'  color='black' size="45px" className="p-md-3 mt-md-5 mb-md-3 rounded" style={{backgroundColor:"red"}}></box-icon>
                    <h1 className="fs-1 fw-bold mt-md-3">56 +</h1>
                    <h1 className="fs-3 fw-bold mt-md-3 mb-4">Number Of Cars</h1>
                    </div>
                    <div className="col-md-3">
                    <box-icon name='buildings'  color='black' size="45px" className="p-md-3 mt-md-5 mb-md-3 rounded" style={{backgroundColor:"red"}}></box-icon>
                    <h1 className="fs-1 fw-bold mt-md-3">127 +</h1>
                    <h1 className="fs-3 fw-bold mt-md-3 mb-4">Car Center</h1>
                    </div>
                    <div className="col-md-3">
                    <box-icon name='time-five' color='black' size="45px" className="p-md-3 mt-md-5 mb-md-3 rounded" style={{backgroundColor:"red"}} ></box-icon>
                    <h1 className="fs-1 fw-bold text' mt-md-3">589 +</h1>
                    <h1 className="fs-3 fw-bold mt-md-3 mb-4">Total Kilometers</h1>
                    </div>
                </div>

                </div>
                </div>
        </>
    );
}
export default CarPassing