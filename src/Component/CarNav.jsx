import PassLight from "../Images/PassingLights.jpg";
import { Link } from "react-router-dom";

function CarNav({ name, link1, link2, link3, pagename1, pagename2, pagename3 }) {
  return (
    <div className="container-fluid w-100"
      style={{backgroundImage: `url(${PassLight})`,
        backgroundSize: "cover",backgroundPosition: "center",backgroundRepeat: "no-repeat",}}>
      <h1 className="text-white text-center display-4 fw-bold" style={{ paddingTop: "80px",
        paddingBottom:"80px" }}>{name}</h1>
    </div>
  );
}

export default CarNav;
