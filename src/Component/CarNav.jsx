import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import PassLight from "../Images/PassingLights.jpg"
import { BrowserRouter,Routes,Route,Link} from "react-router-dom";

function CarNav(props){
    return(
        <div className="container-fluid w-100"  style={{backgroundImage: `url(${PassLight})`,
            backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"}}>
                <h1 className='text-white text-center display-4 fw-bold'style={{paddingTop:"60px"}}>{props.name}</h1>
                <p className="d-flex justify-content-center text-white gap-1 pt-1"style={{paddingBottom:"70px"}}>
                    <a className='text-white text-decoration-none' href="">{props.link1}</a>/
                    <a className='text-white text-decoration-none' href="">{props.link2}</a>/
                    <a className='text-white text-decoration-none' href="">{props.link3}</a>
                </p>
        </div>
    );
}
export default CarNav