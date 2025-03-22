import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'boxicons'
import { Link } from 'react-router-dom';

function Dashboardcard (props){
    return(
        <>
        <div className="col-lg-6 col-12">
                <div className="card border-1">
                    <div className="card-title">
                        <div className="row pt-2">
                            <div className="col-8">
                            <h1 className='fs-2 ms-3 mt-3'>{props.name}</h1>
                            <div className="row">
                                <h1 className='display-6 ms-3 fw-bold'>{props.count}</h1>
                            </div>
                            </div>
                            <div className="col-4 text-center">
                            <span className='ms-auto'>{props.icon}</span>
                            </div>
                        </div>
                        <hr className='w-75 mx-auto border-3'></hr>
                    </div>
                    <div className="row pt-2 pb-5">
                        <Link className='fs-2 ms-3 fw-bold'>{props.view}<span>{props.viewicon}</span></Link>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Dashboardcard

{/* <box-icon name='calendar' size='50px' color="#ffffff" className="bg-success p-4 rounded-circle" ></box-icon> */}
{/* <box-icon name='right-arrow-alt' size="40px"></box-icon> */}