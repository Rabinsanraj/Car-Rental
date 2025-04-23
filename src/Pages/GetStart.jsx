import React, { useState, useEffect } from "react";
import CarNav from "../Component/CarNav";
import { Link } from "react-router-dom";
import Carouselbg from "../Images/Carouselbg.jpg";

import Car1 from "../Images/Car1.jpg";
import Car2 from "../Images/Car2.jpg";
import Car3 from "../Images/Car3.jpg";
import Car4 from "../Images/Car4.jpg";
import Car5 from "../Images/Car5.jpg";
import Car6 from "../Images/Car6.jpg";
import Car7 from "../Images/Car7.jpg";
import Car8 from "../Images/Car8.jpg";
import Car9 from "../Images/Car9.jpg";

const products = [
  { id: 1, name: "Product 1", image: Car1 },
  { id: 2, name: "Product 2", image: Car2 },
  { id: 3, name: "Product 3", image: Car3 },
  { id: 4, name: "Product 4", image: Car4 },
  { id: 5, name: "Product 5", image: Car5 },
  { id: 6, name: "Product 6", image: Car6 },
  { id: 7, name: "Product 7", image: Car7 },
  { id: 8, name: "Product 8", image: Car8 },
  { id: 9, name: "Product 9", image: Car9 },
].map(product => ({
  ...product,
  review: "Review: 3.8", seats: "4 Seats", trans: "AT/MT",
  fuel: "Petrol", year: "2015", setting: "Setting", km: "27 K"
}));

const GetStart = () => {
  const [wishlist, setWishlist] = useState(() => JSON.parse(localStorage.getItem("wishlist")) || []);
  const [booknow, setBooknow] = useState(() => JSON.parse(localStorage.getItem("booknow")) || []);
  const [counts, setCounts] = useState(() =>
    products.reduce((acc, product) => ({ ...acc, [product.id]: 1500 }), {})
  );

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Listen for window resize and update state
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const updateLocalStorage = (key, value) => localStorage.setItem(key, JSON.stringify(value));

  const toggleItem = (list, setList, key, product) => {
    const exists = list.some(item => item.id === product.id);
    const updated = exists ? list.filter(item => item.id !== product.id) : [...list, product];
    setList(updated);
    updateLocalStorage(key, updated);
  };

  const handleCountChange = (id, type) => {
    setCounts(prev => ({
    ...prev,
    [id]: Math.max(0, type === "inc" ? prev[id] + 500 : prev[id] - 500)
    }));
  };

  // Dynamically chunk products based on window size
  const getChunks = () => {
    const chunkSize = windowWidth < 768 ? 1 : 3;
    const result = [];
    for (let i = 0; i < products.length; i += chunkSize) {
      result.push(products.slice(i, i + chunkSize));
    }
    return result;
  };

  const chunkedProducts = getChunks();

  return (
    <>
      <CarNav name="Our Cars" />
      <div className="container-fluid mt-4"
        style={{
          backgroundImage: `url(${Carouselbg})`,
          backgroundSize: "cover", backgroundPosition: "center",
          backgroundRepeat: "no-repeat", width: "100%", minHeight: "681px"
        }}>
        <h2 className="text-black text-center fs-1 fw-bold pb-3 pt-5">
          Vehicle <span style={{ color: "red" }}>Categories</span>
        </h2>

      <div id="productCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
        <div className="carousel-inner">
    {chunkedProducts.map((group, groupIndex) => (
      <div className={`carousel-item ${groupIndex === 0 ? "active" : ""}`} key={groupIndex}>
        <div className="row justify-content-center">
    {group.map(product => {
      const isLiked = wishlist.some(item => item.id === product.id);
      return (
        <div key={product.id} className="col-12 col-md-4 mb-3">
    <div className="card" style={{ boxShadow: "8px 8px 10px 1px black" }}>
      <div
        className="container"
        style={{
    backgroundImage: `url(${product.image})`, backgroundColor: "#e4e4e4",
    backgroundSize: "420px", backgroundPosition: "center",
    backgroundRepeat: "no-repeat", width: "100%", minHeight: "300px"
        }}></div>

      <div className="card-body mt-2 mb-2" style={{ backgroundColor: "#dfdfdf" }}>
        <h3 className="card-title text-center">{product.name}</h3>

        <div className="row m-3 p-1 bg-white rounded-pill"
    style={{ boxShadow: "inset 5px 5px 5px rgba(0,0,0,2)" }}>
    <div className="col-3">
      <button className="mt-1" style={{ background: "none", border: "none" }}
        onClick={() => handleCountChange(product.id, "inc")}>
        <i className="bx bx-plus fs-2"></i>
      </button>
    </div>
    <div className="col">
      <h3 className="fs-4 text-center mt-1" style={{ color: "red" }}>{counts[product.id]}/day</h3>
    </div>
    <div className="col-3">
      <button className="mt-1" style={{ background: "none", border: "none" }}
        onClick={() => handleCountChange(product.id, "dec")}>
        <i className="bx bx-minus fs-2"></i>
      </button>
    </div>
        </div>

        <div className="row">
    <div className="col-8">
      <h5 className="text-center pt-3 pb-3">{product.review}</h5>
    </div>
    <div className="col-4">
      <button style={{
        backgroundColor: isLiked ? "red" : "transparent",
        color: isLiked ? "white" : "red",
        border: "2px solid red", borderRadius: "5px",
        padding: "5px 12px", transition: "0.3s ease"
      }}
        onClick={() => toggleItem(wishlist, setWishlist, "wishlist", product)}>
        {isLiked ? "♥ Liked" : "♡ Like"}
      </button>
    </div>
        </div>

        <div className="row p-2">
    <div className="col-4"><h3 className="text-center fs-5 fw-bold">{product.seats}</h3></div>
    <div className="col-4"><h3 className="text-center fs-5 fw-bold">{product.trans}</h3></div>
    <div className="col-4"><h3 className="text-center fs-5 fw-bold">{product.fuel}</h3></div>
        </div>
        <div className="row p-2">
    <div className="col-4"><h3 className="text-center fs-5 fw-bold">{product.year}</h3></div>
    <div className="col-4"><h3 className="text-center fs-5 fw-bold">{product.setting}</h3></div>
    <div className="col-4"><h3 className="text-center fs-5 fw-bold">{product.km}</h3></div>
        </div>

        <Link to="/checkout"
    className="btn btn-dark form-control mt-2 mb-3"
    onClick={() => toggleItem(booknow, setBooknow, "booknow", product)}>
    Book Now
        </Link>
      </div>
    </div>
    </div>
      );})}
        </div>
      </div>
    ))} </div>
    <div className="w-100 d-flex">
    <button className="carousel-control-prev" type="button" data-bs-target="#productCarousel"
         data-bs-slide="prev" style={{height:"0px",top:"48%"}}>
    <i className="bx bx-chevrons-left" style={{ color: "black", fontSize: "50px"}}></i>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#productCarousel"
         data-bs-slide="next"style={{height:"0px",top:"48%"}}>
    <i className="bx bx-chevrons-right" style={{ color: "black", fontSize: "50px"}}></i>
    </button>
    </div>
      </div>
    </div> 
    </>
  );
};

export default GetStart;
