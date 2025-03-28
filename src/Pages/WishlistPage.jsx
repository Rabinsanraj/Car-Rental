import React, { useEffect, useState } from "react";
import CarNav from "../Component/CarNav";

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
                <div className="row">

                </div>
                <div className="row"> 
                <button className="btn btn-danger" onClick={() => removeFromWishlist(product)}>Remove</button>
                </div>
                <div className="row">
                  <button>Rent Now</button>
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
