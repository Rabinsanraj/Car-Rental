import PassLight from "../Images/PassingLights.jpg"
import {Link} from "react-router-dom";

function CarNav(props){
    return(
        <div className="container-fluid w-100"  style={{backgroundImage: `url(${PassLight})`,
            backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"}}>
                <h1 className='text-white text-center display-4 fw-bold'style={{paddingTop:"60px"}}>{props.name}</h1>
                <p className="d-flex justify-content-center text-white gap-1 pt-1"style={{paddingBottom:"70px"}}>
                    <Link className='text-white fw-bold text-decoration-none' to={props.link1}>{props.pagename1}</Link>
                    <br />
                    <Link className='text-white fw-bold text-decoration-none' to={props.link2}>{props.pagename2}</Link>
                    <br />
                    <Link className='text-white fw-bold text-decoration-none' to={props.link3}>{props.pagename3}</Link>
                </p>
        </div>
    );
}
export default CarNav