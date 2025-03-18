import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'boxicons'
import CarPassing from '../Component/CarPassing'
import CarNav from '../Component/CarNav'
import CardBox from '../Component/CardBox'

function Services(){
    return(
        <>
        <CarNav name="Our Services" link1="Home" link2="About" link3="Our Cars" />
        <div className="text-center fs-3">
            <h1>Easy Car <span className="text-danger">Services</span></h1>
        </div>
        <div className="row row-cols-md-3 pt-4 pb-2">
            <div className="col-sm-2 pb-4">
            <CardBox icon={<box-icon name='phone-call' color='#08082d' size="45px" className="p-3 rounded-circle"style={{backgroundColor:"red"}} ></box-icon>} head="Phone Reservation" sub="Just a call away Reserve your rider instantly."/>
            </div>
            <div className="col-sm-2 pb-4">
            <CardBox icon={<box-icon name='coin-stack'color='#08082d' size="45px" className="p-3 rounded-circle"style={{backgroundColor:"red"}} ></box-icon>} head="Special Rate" sub="Exclusive Deals. Unbeatable Rates."/>
            </div>
            <div className="col-sm-2 pb-4">
            <CardBox icon={<box-icon name='chevrons-up' color='#08082d' size="45px" className="p-3 rounded-circle"style={{backgroundColor:"red"}} ></box-icon>} head="One Way Rental" sub="Ride here drop there one made easy."/>
            </div>
            <div className="col-sm-2 pb-4">
            <CardBox icon={<box-icon name='car' color='#08082d' size="45px" className="p-3 rounded-circle"style={{backgroundColor:"red"}} ></box-icon>} head="Free Ride" sub="Your next adventure Starts on Us enjoy a free ride."/>
            </div>
            <div className="col-sm-2 pb-4">
            <CardBox icon={<box-icon name='heart' color='#08082d' size="45px" className="p-3 rounded-circle"style={{backgroundColor:"red"}}></box-icon>} head="Life Insurance" sub="producting what matters most your life, your future."/>
            </div>
            <div className="col-sm-2 pb-4">
            <CardBox icon={<box-icon name='building-house' color='#08082d' size="45px" className="p-3 rounded-circle"style={{backgroundColor:"red"}} ></box-icon>} head="City to City" sub="Connecting cities one ride at a time."/>
            </div>
        </div>
        <CarPassing/>
        </>
    );
}
export default Services