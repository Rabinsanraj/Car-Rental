import CarNav from '../Component/CarNav';
import CardBox from '../Component/CardBox';
import Map from '../Component/Map';

function Contact() {
    return (
        <>
            <CarNav name="Contact Us" />
            <div className="text-center fs-3">
                <h1 style={{ color: "red" }}>Contact us</h1>
            </div>
            <div className="container-fluid">
                <div className="row row-cols-md-4 pb-2 pt-5">
                    <div className="col-sm-3 pb-4">
                        <CardBox icon={<i className="bx bx-location-plus fs-1 p-2 rounded-circle" style={{ backgroundColor: "red" }} />} head="Address" />
                    </div>
                    <div className="col-sm-3 pb-4">
                        <CardBox icon={<i className="bx bx-envelope fs-1 p-2 rounded-circle" style={{ backgroundColor: "red" }} />} head="Email" />
                    </div>
                    <div className="col-sm-3 pb-4">
                        <CardBox icon={<i className="bx bx-phone-call fs-1 p-2 rounded-circle" style={{ backgroundColor: "red" }} />} head="Contact" />
                    </div>
                    <div className="col-sm-2 pb-4">
                        <CardBox icon={<i className="bx bx-sitemap fs-1 p-2 rounded-circle" style={{ backgroundColor: "red" }} />} head="Site" />
                    </div>
                </div>
            </div>

            <div className="container pt-4 pb-4">
                <div className="row row-cols-1 row-cols-md-2 d-flex justify-content-center align-items-center">
                    <div className="col">
                        <div className="card mx-auto" style={{ backgroundColor: "#000c69", boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.5)" }}>
                            <div className="card-body mt-3">
                                <h1 className="card-title" style={{ color: "red" }}>Send Your Message</h1>
                                <div className="container mt-5">
                                    <form>
                                        <div className="row d-flex mb-3">
                                            <div className="col mb-3">
                                                <input type="text" className="form-control" placeholder="Enter your Name" required />
                                            </div>
                                            <div className="col mb-3">
                                                <input type="email" className="form-control" placeholder="Enter your Email" required />
                                            </div>
                                        </div>
                                        <div className="row d-flex mb-3">
                                            <div className="col mb-3">
                                                <input type="text" className="form-control" placeholder="Enter your Phone" required />
                                            </div>
                                            <div className="col mb-3">
                                                <input type="text" className="form-control" placeholder="Your Trip" required />
                                            </div>
                                        </div>
                                        <div className="row d-flex mb-3">
                                            <div className="col mb-3">
                                                <input type="text" className="form-control" placeholder="Enter your name" required />
                                            </div>
                                        </div>
                                        <div className="mb-4 mt-3">
                                            <textarea className="form-control" rows="4" placeholder="Enter your message"></textarea>
                                        </div>
                                        <button type="submit" className="form-control btn btn-primary mb-3">Send Message</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card py-4" style={{ border: "none", backgroundColor: "#dfdfdf", boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.5)" }}>
                            {[1, 2, 3].map((branch, index) => (
                                <div className="card-body text-center bg-white mx-auto mt-3" key={index} style={{ borderRadius: "40px", width: "80%", boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.5)" }}>
                                    <h4 className="card-title">Our Branch {branch}</h4>
                                    <p className="fw-bold" style={{ color: "red" }}>Address :</p>
                                    <p className="fw-bold" style={{ color: "red" }}>Telephone : {branch === 3 ? "+91 0000000000" : ""}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Map />
        </>
    );
}

export default Contact;
