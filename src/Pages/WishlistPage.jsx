import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CarNav from "../Component/CarNav";

const WishlistPage = () => {
  const [wishlist, setWishlist] = useState(() => {
    // Initialize wishlist from localStorage or an empty array if not available
    const savedWishlist = localStorage.getItem("wishlist");
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  useEffect(() => {
    // Update localStorage when the wishlist changes
    if (wishlist.length === 0) {
      localStorage.removeItem("wishlist"); // Remove from localStorage if wishlist is empty
    } else {
      localStorage.setItem("wishlist", JSON.stringify(wishlist)); // Save updated wishlist
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
    <div className="container mt-4">
      <h2>Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>No items in the wishlist.</p>
      ) : (
        <div className="row">
          {wishlist.map((product) => (
            <div key={product.id} className="col-md-4 text-center mb-4">
              <img src={product.image} alt={product.name} className="w-25" />
              <h5>{product.name}</h5>
              <button className="btn btn-danger" onClick={() => removeFromWishlist(product)}>
               Remove
              </button>
            </div>
          ))}
        </div>
      )}

    </div>
    </>
  );
};

export default WishlistPage;
