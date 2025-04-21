import CaratNight from "../Images/carpassing.jpeg"

function CarPassing (){
    return(
        <>
        <div className="container-fluid w-100 mt-5" style={{backgroundImage: `url(${CaratNight})`,
            backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",
             width: "100%", height:"auto"}}>
                <div className='container-fluid pt-5 pb-md-5 mb-3 w-100'>
                <div className="row row-cols-2 d-flex text-center text-white fs-1">
                    <div className="col-md-3">
                    <i className="bx bx-target-lock fs-1 p-3 mt-md-5 mb-md-3 rounded" style={{backgroundColor:"red"}}></i>
                    <h1 className="fs-1 fw-bold mt-md-3">829 +</h1>
                    <h1 className="fs-3 fw-bold mt-md-3 mb-4">Happily Client</h1>
                    </div>
                    <div className="col-md-3 ">
                    <i className="bx bx-car fs-1 p-3 mt-md-5 mb-md-3 rounded" style={{backgroundColor:"red"}}></i>
                    <h1 className="fs-1 fw-bold mt-md-3">56 +</h1>
                    <h1 className="fs-3 fw-bold mt-md-3 mb-4">Number Of Cars</h1>
                    </div>
                    <div className="col-md-3">
                    <i className="bx bx-buildings fs-1 p-3 mt-md-5 mb-md-3 rounded" style={{backgroundColor:"red"}}></i>
                    <h1 className="fs-1 fw-bold mt-md-3">127 +</h1>
                    <h1 className="fs-3 fw-bold mt-md-3 mb-4">Car Center</h1>
                    </div>
                    <div className="col-md-3">
                    <i className="bx bx-time-five fs-1 p-3 mt-md-5 mb-md-3 rounded" style={{backgroundColor:"red"}} ></i>
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