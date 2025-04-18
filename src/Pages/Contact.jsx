import CarNav from '../Component/CarNav'
import CardBox from'../Component/CardBox'
import Map from '../Component/Map'

function Contact(){
    return(<>
    <CarNav name="Contact Us"/>
    <div className="text-center fs-3">
            <h1 style={{color:"red"}}>Contact us</h1>
        </div>
        <div className="container-fluid">
        <div className="row row-cols-md-4 pb-2 pt-5">
            <div className="col-sm-3 pb-4">
            <CardBox icon={<box-icon name='location-plus' color='#08082d' size="45px" className="p-2 rounded-circle"style={{backgroundColor:"red"}} >
            </box-icon>} head="Address"/>
            </div>
            <div className="col-sm-3 pb-4">
            <CardBox icon={<box-icon name='envelope' color='#08082d' size="45px" className="p-2 rounded-circle"style={{backgroundColor:"red"}} >
            </box-icon>} head="Email"/>
            </div>
            <div className="col-sm-3 pb-4">
            <CardBox icon={<box-icon name='phone-call' color='#08082d' size="45px" className="p-2 rounded-circle"style={{backgroundColor:"red"}} >
            </box-icon>} head="Contact"/>
            </div>
            <div className="col-sm-2 pb-4">
            <CardBox icon={<box-icon name='sitemap'  color='#08082d' size="45px" className="p-2 rounded-circle"style={{backgroundColor:"red"}} >
            </box-icon>} head="Site"/>
            </div>
        </div>
        </div>

        <div className="container pt-4 pb-4">
            <div className="row row-cols-1 row-cols-md-2 d-flex justify-content-center align-items-center ">
                <div className="col">
                    <div className="card mx-auto" style={{backgroundColor:"#000c69",boxShadow:"5px 5px 10px rgba(0, 0, 0, 0.5)"}}>
                      <div className="card-body mt-3">
                        <h1 className="card-title" style={{color:"red"}}>Send Your Message</h1>
                        <div className="container mt-5">
                        <form>
                       <div className="row d-flex mb-3">
                       <div className=" col mb-3">
                       <input type="text" className="form-control" id="name" placeholder="Enter your Name" required />
                       </div>
                       <div className="col mb-3">
                       <input type="email" className="form-control" id="email" placeholder="Enter your Email" required />
                       </div>
                       </div>
                       <div className="row d-flex mb-3">
                       <div className=" col mb-3">
                       <input type="text" className="form-control" id="name" placeholder="Enter your Phone" required />
                       </div>
                       <div className="col mb-3">
                       <input type="email" className="form-control" id="email" placeholder="your Trip" required />
                       </div>
                       </div>
                       <div className="row d-flex mb-3">
                       <div className=" col mb-3">
                       <input type="text" className="form-control" id="name" placeholder="Enter your name" required />
                       </div>
                       </div>
                       <div className="mb-4 mt-3">
                       <textarea className="form-control" id="message" rows="4" placeholder="Enter your message"></textarea>
                      </div>
                      <button type="submit" className="form-control btn btn-primary mb-3">Send Message</button>
                       </form>
                       </div>
                      </div>
                    </div>
                </div>
                <div className="col">
                <div className="card py-4" style={{border:"none", backgroundColor:"#dfdfdf",boxShadow:"5px 5px 10px rgba(0, 0, 0, 0.5)"}}>
                      <div className="card-body text-center bg-white mx-auto" style={{borderRadius:"40px",width:"80%", boxShadow:"5px 5px 10px rgba(0,0,0,0.5) "}}>
                        <h4 className="card-title">Our Branch 1</h4>
                        <p className="fw-bold"style={{color:"red"}}>Address :</p>
                        <p className="fw-bold"style={{color:"red"}}>Telephone : </p>
                      </div>
                      <div className="card-body text-center bg-white mx-auto mt-3"style={{borderRadius:"40px",width:"80%", boxShadow:"5px 5px 10px rgba(0,0,0,0.5)"}}>
                        <h4 className="card-title">Our Branch 2</h4>
                        <p className="fw-bold"style={{color:"red"}}>Address :</p>
                        <p className="fw-bold"style={{color:"red"}}>Telephone : </p>
                      </div>
                      <div className="card-body text-center bg-white mx-auto mt-3"style={{borderRadius:"40px",width:"80%",  boxShadow:"5px 5px 10px rgba(0,0,0,0.5) "}}>
                        <h4 className="card-title">Our Branch 3</h4>
                        <p className="fw-bold"style={{color:"red"}}>Address : </p>
                        <p className="fw-bold"style={{color:"red"}}>Telephone : +91 0000000000</p>
                      </div>
                    </div> 
                </div>
            </div>
        </div>
        <Map/>
    </>
    );
}
export default Contact