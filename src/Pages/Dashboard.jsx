import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import "boxicons/css/boxicons.min.css";
import CarNav from '../Component/CarNav';
import Dashboardcard from '../Component/Dashboardcard';
import {Booking}from '../Component/Dashboardcard';

import Car1 from'../Images/Car1.jpg'
import Car2 from'../Images/Car2.jpg'
import Car3 from'../Images/Car3.jpg'
import Car4 from'../Images/Car4.jpg'
import Car5 from'../Images/Car5.jpg'


function Dashboard(){
    return(
        <>
        <CarNav name="User Dashboard" pagename1="Home" pagename2="About" link1="/" link2="/"/>

        <div className="container-fluid " style={{width:"95%"}}>
            <h1 className='display-3 text-black fw-bold'>Dashboard</h1>
        </div>
        <div className="container-fluid" style={{width:"95%"}}>
        <div className="row mt-3">
            <Dashboardcard name="My Booking" count="2" icon={ <box-icon name='calendar' size='50px' color="#ffffff"
             className="bg-success p-4 rounded-circle" ></box-icon> } view1="View"/>
            <Dashboardcard name="All Booking" count="50" icon={ <box-icon name='calendar' size='50px' color="#ffffff" 
            className="bg-warning p-4 rounded-circle" ></box-icon> } view2="View All"/>
            <Dashboardcard name="Wishlist" count="2" icon={<box-icon name='car'  size='50px' color="#ffffff" 
            className="bg-danger p-4 rounded-circle" ></box-icon>} view3="View"/>
        </div>
        </div>
        <Booking heading="All Booking" image={Car1} buttonstyle="btn bg-light btn-primary text-primary fw-bold rounded-pill" buttonname="Upcoming"/>
        <Booking image={Car2} buttonstyle="btn bg-light btn-success text-success fw-bold rounded-pill" buttonname="Canceled"/>
        <Booking image={Car3}  buttonstyle="btn bg-light btn-warning text-warning fw-bold rounded-pill" buttonname="in progress"/>
        <Booking image={Car4}  buttonstyle="btn bg-light btn-warning text-warning fw-bold rounded-pill" buttonname="in progress"/>
        <Booking image={Car5}  buttonstyle="btn bg-light btn-primary text-primary fw-bold rounded-pill" buttonname="Canceled"/>
        <hr className='border-black border-3 pb-5' />
        </>
    );
}
export default Dashboard