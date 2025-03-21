import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'boxicons'
import CarNav from '../Component/CarNav'
import Carousel from '../Component/Carousel'
//Image Imports Start
import Car1 from '../Images/Car1.jpg'
import Car2 from '../Images/Car2.jpg'
import Car3 from '../Images/Car3.jpg'
import Car4 from '../Images/Car4.jpg'
import Car5 from '../Images/Car5.jpg'
import Car6 from '../Images/Car6.jpg'
import Car7 from '../Images/Car7.jpg'
import Car8 from '../Images/Car8.jpg'
import Car9 from '../Images/Car9.jpg'
//Image Imports End  

import React from 'react'

function GetStart (){
  return (
    <>
   <CarNav name="Our Cars" link1="Home" link2="About"
           pagename1="/" pagename2="/"/>
           <div className="text-center fs-3">
               <h1>Vehicle <span className="text-danger">Catagories</span></h1>
           </div>
           <div className="container mt-5 d-flex justify-content-center align-items-center">
    <div id="cardCarousel" className="carousel">
    {/* data-bs-ride="carousel */}
      <div className="carousel-inner">
        <div className="carousel-item active">
        <div className="row ">
        <Carousel image={Car1} head="Tesla Models S" review="3.5"/>
        <Carousel image={Car2} head="Tesla Models S" review="3.5"/>
        <Carousel image={Car3} head="Tesla Models S" review="3.5"/>
        </div>
        </div>
        <div className="carousel-item">
        <div className="row">
        <Carousel image={Car4} head="Tesla Models S" review="3.5"/>
        <Carousel image={Car5} head="Tesla Models S" review="3.5"/>
        <Carousel image={Car6} head="Tesla Models S" review="3.5"/>
        </div>
        </div>
        <div className="carousel-item">
        <div className="row">
        <Carousel image={Car7} head="Tesla Models S" review="3.5"/>
        <Carousel image={Car8} head="Tesla Models S" review="3.5"/>
        <Carousel image={Car9} head="Tesla Models S" review="3.5"/>
        </div>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-5">
        <button className="btn btn-dark me-2" type="button" data-bs-target="#cardCarousel" data-bs-slide="prev">Previous</button>
        <button className="btn btn-dark" type="button" data-bs-target="#cardCarousel" data-bs-slide="next">Next</button>
      </div>
    </div>
  </div>
    </>
  )
}
export default GetStart
