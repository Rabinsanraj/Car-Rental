import React, { useEffect, useState } from "react";
import CarNav from "../Component/CarNav";
import { Link } from "react-router-dom";

const WishlistPage = () => {
  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem("wishlist");
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  useEffect(() => {
    if (wishlist.length === 0) {
      localStorage.removeItem("wishlist");
    } else {
      localStorage.setItem("wishlist", JSON.stringify(wishlist)); 
    }
  }, [wishlist]);

  // Remove product from wishlist
  const removeFromWishlist = (product) => {
    const updatedWishlist = wishlist.filter((item) => item.id !== product.id);
    setWishlist(updatedWishlist);
  };
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
    <div className="container-fluid mt-4">
      <h2>Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>No items in the wishlist.</p>
      ) : (
        <div className="container-fluid">
          {wishlist.map((product) => (
          <div key={product.id}>
            <div className="row pb-5 text-center mx-auto" >
              <div className="col-md-3">
                <img src={product.image} style={{width:"100%"}} />
              </div>
              <div className="col-md-5">
                <div className="row"><h1>{product.name}</h1></div>
                <div className="row">
                  <div className="col"><h4>{product.seats}</h4></div>
                  <div className="col"><h4>{product.trans}</h4></div>
                  <div className="col"><h4>{product.fuel}</h4></div>
                </div>
                <div className="row">
                  <div className="col"><h4>{product.year}</h4></div>
                  <div className="col"><h4>{product.setting}</h4></div>
                  <div className="col"><h4>{product.km}</h4></div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="row">
                  <h1>Review</h1>
                </div>
                <div className="row m-3 bg-white rounded-pill" style={{ boxShadow: "inset 5px 5px 5px rgba(0,0,0,2)" }}>
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
                <div className="row mt-5">
                <div className="col-md-6 mx-auto">
                  <Link className="btn btn-dark" to="rentnow">Rent Now</Link>
                </div>
                <div className="col-md-6 mx-auto"> 
                <button className="btn btn-danger" onClick={() => removeFromWishlist(product)}>Remove</button>
                </div>
                </div>
              </div>
            </div>
            </div>
          ))}
        </div>
      )}

    </div>
    </>
  );
};

export default WishlistPage;