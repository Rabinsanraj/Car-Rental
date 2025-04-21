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
            <h1 className='display-5 text-black fw-bold'>Dashboard</h1>
        </div>
        <div className="container-fluid pt-3" style={{width:"85%"}}>
        <div className="row d-flex justify-content-center align-items-center mt-3">
            <Dashboardcard name="My Booking" count="2" icon1={ 
            <i className="bx bx-calendar text-white fs-2 bg-success ms-2 p-2 rounded-circle" ></i> } view1="View"/>
            <Dashboardcard name="All Booking" count="50" icon2={ 
            <i className="bx bx-calendar text-white fs-2 bg-warning ms-2 p-2 rounded-circle" ></i> } view2="View All"/>
            <Dashboardcard name="Wishlist" count="2" icon3={ 
            <i className="bx bx-cart-add text-white fs-2 bg-dark ms-2 p-2 rounded-circle"></i> } view3="View"/>
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