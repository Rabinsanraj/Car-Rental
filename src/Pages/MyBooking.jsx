import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import "boxicons/css/boxicons.min.css";
import CarNav from '../Component/CarNav';
import { Booking } from '../Component/Dashboardcard';
import Car1 from '../Images/Car1.jpg'
import Car2 from '../Images/Car2.jpg'
import Car3 from '../Images/Car3.jpg'

function MyBooking(){
    return(
        <>
         <CarNav name="User Dashboard" pagename1="Home" pagename2="About" link1="/" link2="/"/>
         <Booking heading="My Booking" image={Car1} 
        buttonstyle="btn bg-light btn-primary text-primary fw-bold rounded-pill" buttonname="Upcoming"/>
        <Booking image={Car2} buttonstyle="btn bg-light btn-success text-success fw-bold rounded-pill" buttonname="Canceled"/>
        <Booking image={Car3}  buttonstyle="btn bg-light btn-warning text-warning fw-bold rounded-pill" buttonname="in progress"/>
        <hr className='border-black border-3 pb-5'/>
        </>
    );
}
export default MyBooking