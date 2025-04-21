import CarPassing from '../Component/CarPassing'
import CarNav from '../Component/CarNav'
import CardBox from '../Component/CardBox'
import OldLady from '../Images/old-lady.jpg'
import { CardBox1 } from '../Component/CardBox'

function Services(){
    return(
        <>
        <CarNav name="Our Services"/>
        <div className="text-center fs-3">
            <h1 className='fw-bold'>Easy Car <span style={{color:"red"}}>Services</span></h1>
        </div>
        <div className="container-fluid">
        <div className="row row-cols-md-3 pt-4 pb-2">
            <div className="col-sm-3 pb-4">
            <CardBox icon={<i className="bx bx-phone-call fs-1 p-3 rounded-circle"style={{backgroundColor:"red"}} ></i>} head="Phone Reservation" sub="Just a call away Reserve your rider instantly."/>
            </div>
            <div className="col-sm-3 pb-4">
            <CardBox icon={<i className="bx bx-coin-stack fs-1 p-3 rounded-circle"style={{backgroundColor:"red"}} ></i>} head="Special Rate" sub="Exclusive Deals. Unbeatable Rates."/>
            </div>
            <div className="col-sm-3 pb-4">
            <CardBox icon={<i className="bx bx-chevrons-up fs-1 p-3 rounded-circle"style={{backgroundColor:"red"}} ></i>} head="One Way Rental" sub="Ride here drop there one made easy."/>
            </div>
            <div className="col-sm-2 pb-4">
            <CardBox icon={<i className="bx bx-car fs-1 p-3 rounded-circle"style={{backgroundColor:"red"}} ></i>} head="Free Ride" sub="Your next adventure Starts on Us enjoy a free ride."/>
            </div>
            <div className="col-sm-2 pb-4">
            <CardBox icon={<i className="bx bx-heart fs-1 p-3 rounded-circle"style={{backgroundColor:"red"}}></i>} head="Life Insurance" sub="producting what matters most your life, your future."/>
            </div>
            <div className="col-sm-2 pb-4">
            <CardBox icon={<i className="bx bx-building-house fs-1 p-3 rounded-circle"style={{backgroundColor:"red"}} ></i>} head="City to City" sub="Connecting cities one ride at a time."/>
            </div>
        </div>
        </div>
        
        <CarPassing/>
        <div className="container-fluid  w-100 pt-4">
        <div className="row row-cols-1 row-cols-md-2">
            <CardBox1 oldlady={OldLady} personname="Person Name" profession="Profession"
            star1={<i className='bx bx-star fs-4' ></i>} star2={<i className='bx bx-star fs-4' ></i>} 
            star3={<i className='bx bx-star fs-4' ></i>}/>
            <CardBox1 oldlady={OldLady} personname="Person Name" profession="Profession"
            star1={<i className='bx bx-star fs-4' ></i>} star2={<i className='bx bx-star fs-4' ></i>}
            star3={<i className='bx bx-star fs-4' ></i>}/>
        </div>
        </div>
        </>
    );
}
export default Services