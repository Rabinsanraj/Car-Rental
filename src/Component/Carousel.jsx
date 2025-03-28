import React, { useEffect, useState } from "react";
import CarNav from "../Component/CarNav";
import Car1 from "../Images/Car1.jpg"
import Car2 from "../Images/Car2.jpg"
import Car3 from "../Images/Car3.jpg"
import Car4 from "../Images/Car4.jpg"
import Car5 from "../Images/Car5.jpg"
import Car6 from "../Images/Car6.jpg"
import Car7 from "../Images/Car7.jpg"
import Car8 from "../Images/Car8.jpg"
import Car9 from "../Images/Car9.jpg"
import Carouselbg from '../Images/Carouselbg.jpg'
import { Link } from "react-router-dom";
const products = [
  { id: 1, name: "Product 1", image:Car1, review:"Review: 3.8", seats:"4 Seats", 
    trans:"AT/MT", fuel:"Petrol", year:"2015", setting:"Settings", km:"27 K "},
  { id: 2, name: "Product 2", image:Car2, review:"Review: 3.8", seats:"4 Seats", 
    trans:"AT/MT", fuel:"Petrol", year:"2015", setting:"Settings", km:"27 K "},
  { id: 3, name: "Product 3", image:Car3, review:"Review: 3.8", seats:"4 Seats", 
    trans:"AT/MT", fuel:"Petrol", year:"2015", setting:"Settings", km:"27 K " },
  { id: 4, name: "Product 4", image:Car4, review:"Review: 3.8", seats:"4 Seats", 
    trans:"AT/MT", fuel:"Petrol", year:"2015", setting:"Settings", km:"27 K " },
  { id: 5, name: "Product 5", image:Car5, review:"Review: 3.8", seats:"4 Seats", 
    trans:"AT/MT", fuel:"Petrol", year:"2015", setting:"Settings", km:"27 K " },
  { id: 6, name: "Product 6", image:Car6, review:"Review: 3.8", seats:"4 Seats", 
    trans:"AT/MT", fuel:"Petrol", year:"2015", setting:"Settings", km:"27 K " },
  { id: 7, name: "Product 7", image:Car7, review:"Review: 3.8", seats:"4 Seats", 
    trans:"AT/MT", fuel:"Petrol", year:"2015", setting:"Settings", km:"27 K " },
  { id: 8, name: "Product 8", image:Car8, review:"Review: 3.8", seats:"4 Seats", 
    trans:"AT/MT", fuel:"Petrol", year:"2015", setting:"Settings", km:"27 K " },
  { id: 9, name: "Product 9", image:Car9, review:"Review: 3.8", seats:"4 Seats", 
    trans:"AT/MT", fuel:"Petrol", year:"2015", setting:"Settings", km:"27 K " }
];

const Carousel = () => {
  const [wishlist, setWishlist] = useState(() => {
    // Initialize wishlist from localStorage if available
    const savedWishlist = localStorage.getItem("wishlist");
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  // Toggle Wishlist
  const toggleWishlist = (product) => {
    const updatedWishlist = wishlist.some((item) => item.id === product.id)
      ? wishlist.filter((item) => item.id !== product.id)
      : [...wishlist, product];

    setWishlist(updatedWishlist);
    // Update localStorage with the new wishlist
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  // ---------------------------------------------------------------------------
  const [booknow, setBooknow] = useState(() => {
    const savedBooknow = localStorage.getItem("booknow");
    return savedBooknow ? JSON.parse(savedBooknow) : [];
  });

  const toggleBooknow = (product) => {
    const updatedBooknow = booknow.some((item) => item.id === product.id)
      ? booknow.filter((item) => item.id !== product.id)
      : [...booknow, product];

    setBooknow(updatedBooknow);
    // Update localStorage with the new booknow
    localStorage.setItem("booknow", JSON.stringify(updatedBooknow));
  };
  // ---------------------------------------------------------------------------

  const [count, Count] = useState(1500);

  const Increase = () => {
        Count(count + 500);
      };
    
      const Decrease = () => {
        if (count > 0) {
          Count(count - 500);
        }
      };

  return (
    <>
    <CarNav name="Our Cars" link1="/" link2="/" pagename1="Home" pagename2="About"/>
    <div className="container-fluid mt-4" style={{backgroundImage: `url(${Carouselbg})`,
        backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",
         width: "100%",minHeight:"681px"}}>
      <h2 className="text-black text-center fs-1 fw-bold pb-5 pt-5">Vehicle <span className="text-danger">Categories</span></h2>
      <div id="productCarousel" className="carousel slide" data-bs-ride="carousel" >
        <div className="carousel-inner ">
          {products.map((product, index) => (
            <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={product.id}>
              <div className="row">
                <div className="col"></div>
                <div className="col-md-4">
       <div className="card mb-3" style={{boxShadow:"8px 8px 10px 1px black"}}>
         <div className="container" style={{backgroundImage: `url(${product.image})`,backgroundColor: "#e4e4e4",
             backgroundSize: "420px",backgroundPosition: "center",backgroundRepeat: "no-repeat",width:
            "100%",minHeight: "300px",}}></div>
         <div className="card-body mt-2 mb-2" style={{ backgroundColor: "#dfdfdf" }}>
           <h3 className="card-title text-center">{product.name}</h3>

           <div className="row m-3 p-1 bg-white rounded-pill" style={{ boxShadow: "inset 5px 5px 5px rgba(0,0,0,2)" }}>
             <div className="col-3">
               <button className="mt-1" type="button" style={{ background: "none", border: "none" }}>
                 <box-icon name="plus" size="30px" onClick={Increase}></box-icon>
               </button>
             </div>
             <div className="col">
               <h3 className="text-danger fs-4 text-center mt-1" id="count">{count}/day</h3></div>
             <div className="col-3">
               <button className="mt-1" type="button" style={{ background: "none", border: "none" }}>
                 <box-icon name="minus" size="30px" onClick={Decrease}></box-icon>
               </button>
             </div>
           </div>
           <div className="row">
             <div className="col-8">
               <h5 className="text-center pt-3 pb-3">{product.review}</h5>
             </div>
             <div className="col-4">
               <button
                  className={`btn ${wishlist.some((item) => item.id === product.id) ? "btn-danger" : "btn-outline-danger"}`}
                  onClick={() => toggleWishlist(product)}>
                  {wishlist.some((item) => item.id === product.id) ? "♥ Liked" : "♡ Like"}
                </button>
             </div>
           </div>
           <div className="row p-2">
             <div className="col-4">
               <h3 className="text-center fs-5 fw-bold">{product.seats}</h3>
             </div>
             <div className="col-4">
               <h3 className="text-center fs-5 fw-bold">{product.trans}</h3>
             </div>
             <div className="col-4">
               <h3 className="text-center fs-5 fw-bold">{product.fuel}</h3>
             </div>
           </div>
           <div className="row p-2">
             <div className="col-4">
               <h3 className="text-center fs-5 fw-bold">{product.year}</h3>
             </div>
             <div className="col-4">
               <h3 className="text-center fs-5 fw-bold">{product.setting}</h3>
             </div>
             <div className="col-4">
               <h3 className="text-center fs-5 fw-bold">{product.km}</h3>
             </div>
           </div>
           <Link className="btn btn-dark form-control mt-2 mb-3" type="button" to="checkout" onClick={() => toggleBooknow(product)}>Book Now</Link>
         </div>
       </div>
     </div>
     <div className="col"></div>
      </div>
      </div>))}
      </div>
        {/* Carousel Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#productCarousel" data-bs-slide="prev">
        <box-icon type='solid' name='chevrons-left'size="30px"></box-icon>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#productCarousel" data-bs-slide="next">
        <box-icon name='chevrons-right' type='solid'size="30px" ></box-icon>
        </button>
      </div>

      {/* Go to Wishlist Page */}
      <h1 className="btn btn-primary mt-3">
        Added Wishlist ({wishlist.length})
      </h1>
    </div>
    </>
  );
};

export default Carousel;


