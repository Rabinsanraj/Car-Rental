import CaratNight from "../Images/carpassing.jpeg"

function CarPassing (){
    return(
        <>
        <div className="container-fluid w-100" style={{backgroundImage: `url(${CaratNight})`,
            backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",
             width: "100%"}}>
                <div className='container pt-3 pb-3 mb-3'>
                <div className="row row-cols-2 d-flex text-center text-white fs-1">
                    <div className="col-md-3">
                    <i className="bx bx-target-lock fs-1 p-3 mt-md-5 mb-md-3 rounded" style={{backgroundColor:"red"}}></i>
                    <h4 className="fw-bold mt-3">829 +</h4>
                    <h4 className=" fw-bold mt-2 mb-4">Happily Client</h4>
                    </div>
                    <div className="col-md-3 ">
                    <i className="bx bx-car fs-1 p-3 mt-md-5 mb-md-3 rounded" style={{backgroundColor:"red"}}></i>
                    <h4 className="fw-bold mt-3">56 +</h4>
                    <h4 className="fw-bold mt-2 mb-4">Number Of Cars</h4>
                    </div>
                    <div className="col-md-3">
                    <i className="bx bx-buildings fs-1 p-3 mt-md-5 mb-md-3 rounded" style={{backgroundColor:"red"}}></i>
                    <h4 className="fw-bold mt-3">127 +</h4>
                    <h4 className="fw-bold mt-2 mb-4">Car Center</h4>
                    </div>
                    <div className="col-md-3">
                    <i className="bx bx-time-five fs-1 p-3 mt-md-5 mb-md-3 rounded" style={{backgroundColor:"red"}} ></i>
                    <h4 className="fw-bold text' mt-3">589 +</h4>
                    <h4 className="fw-bold mt-2 mb-4">Total Kilometers</h4>
                    </div>
                </div>

                </div>
                </div>
        </>
    );
}
export default CarPassing