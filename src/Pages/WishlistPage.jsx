import React, { useEffect, useState } from "react";
import CarNav from "../Component/CarNav";
import { Link } from "react-router-dom";

const WishlistPage = () => {
  const [wishlist, setWishlist] = useState(() => {
    const data = localStorage.getItem("wishlist");
    return data ? JSON.parse(data) : [];
  });

  const [counts, setCounts] = useState(() => {
    const data = localStorage.getItem("wishlist");
    const items = data ? JSON.parse(data) : [];
    return items.reduce((acc, item) => {
      acc[item.id] = 1500;
      return acc;
    }, {});
  });

  useEffect(() => {
    if (wishlist.length === 0) {
      localStorage.removeItem("wishlist");
    } else {
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }
  }, [wishlist]);

  const removeFromWishlist = (product) => {
    setWishlist((prev) => prev.filter((item) => item.id !== product.id));
    setCounts((prev) => {
      const updated = { ...prev };
      delete updated[product.id];
      return updated;
    });
  };

  const updateCount = (id, action) => {
    setCounts((prev) => ({
      ...prev,
      [id]: Math.max(0, prev[id] + (action === "inc" ? 500 : -500)),
    }));
  };

  return (
    <>
      <CarNav name="Our Cars" />
      <div className="container-fluid mt-4">
        <h2>Wishlist</h2>
        {wishlist.length === 0 ? (
          <p>No items in the wishlist.</p>
        ) : (
          <div className="container-fluid">
            {wishlist.map((product) => (
              <div key={product.id}>
                <div className="row pb-3 text-center mx-auto border border-3">
                  <div className="col-md-3">
                    <img src={product.image} style={{ width: "100%" }} />
                  </div>
                  <div className="col-md-5">
                    <div className="row">
                      <h1 className="fs-3 pt-2 pb-5">{product.name}</h1>
                    </div>
                    <div className="row">
                      <div className="col">
                        <h5>{product.seats}</h5>
                      </div>
                      <div className="col">
                        <h5>{product.trans}</h5>
                      </div>
                      <div className="col">
                        <h5>{product.fuel}</h5>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <h5>{product.year}</h5>
                      </div>
                      <div className="col">
                        <h5>{product.setting}</h5>
                      </div>
                      <div className="col">
                        <h5>{product.km}</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="row pt-2">
                      <h4>Review</h4>
                      <h5>3.8</h5>
                    </div>
                    <div
                      className="row pt-2 bg-white rounded-pill g-0"
                      style={{ boxShadow: "inset 5px 5px 5px rgba(0,0,0,2)" }}
                    >
                      <div className="col">
                        <button
                          type="button"
                          style={{ background: "none", border: "none" }}
                          onClick={() => updateCount(product.id, "inc")}
                        >
                          <i className="bx bx-plus fs-3"></i>
                        </button>
                      </div>
                      <div className="col">
                        <h3
                          className="fs-4 text-center"
                          style={{ color: "red" }}
                        >
                          {counts[product.id]}/day
                        </h3>
                      </div>
                      <div className="col">
                        <button
                          type="button"
                          style={{ background: "none", border: "none" }}
                          onClick={() => updateCount(product.id, "dec")}
                        >
                          <i className="bx bx-minus fs-3"></i>
                        </button>
                      </div>
                    </div>
                    <div className="row mt-5">
                      <div className="col-md-6 pb-3 mx-auto">
                        <Link
                          className="btn btn-dark text-light fw-bold"
                          to="/rentnow"
                        >
                          Rent Now
                        </Link>
                      </div>
                      <div className="col-md-6 mx-auto">
                        <button
                          className="btn text-light fw-bold"
                          style={{ backgroundColor: "red" }}
                          onClick={() => removeFromWishlist(product)}
                        >
                          Remove
                        </button>
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
