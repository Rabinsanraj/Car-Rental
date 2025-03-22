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
   <CarNav name="Our Cars" link1="/" link2="/"
           pagename1="Home" pagename2="About"/>
           <div className="text-center fs-3">
               <h1>Vehicle <span className="text-danger">Catagories</span></h1>
           </div>
           <div className="container caro-usel">
  <div id="carouselExample" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000" 
  style={{overflowX: "hidden"}}>
    <div className="carousel-inner d-flex" style={{overflowX: "hidden"}}>
      <div className="carousel-item active" style={{flex: "0 0 100%", transition: "transform 0.5s ease"}}>
        <div className="row row-cols-12 justify-content-center">
          <Carousel image={Car1} head="Tesla Models S" review="3.5"/>
          <Carousel image={Car2} head="Tesla Models S" review="3.5"/>
          <Carousel image={Car3} head="Tesla Models S" review="3.5"/>
        </div>
      </div>
      <div className="carousel-item" style={{flex: "0 0 100%", transition: "transform 0.5s ease"}}>
        <div className="row justify-content-center">
          <Carousel image={Car4} head="Tesla Models S" review="3.5"/>
          <Carousel image={Car5} head="Tesla Models S" review="3.5"/>
          <Carousel image={Car6} head="Tesla Models S" review="3.5"/>
        </div>
      </div>
      <div className="carousel-item" style={{flex: "0 0 100%", transition: "transform 0.5s ease"}}>
        <div className="row justify-content-center">
          <Carousel image={Car7} head="Tesla Models S" review="3.5"/>
          <Carousel image={Car8} head="Tesla Models S" review="3.5"/>
          <Carousel image={Car9} head="Tesla Models S" review="3.5"/>
        </div>
      </div>
    </div>
  </div>

  {/* Previous button (on the left side) */}
  <div className="container position-sticky bottom-50">
  <button className="carousel-control-prev  start-0 translate-middle-y" type="button"
  data-bs-target="#carouselExample" data-bs-slide="prev">
    <box-icon name='chevron-left-circle' aria-hidden="true" size="60px"></box-icon>
  </button>
  </div>
  
<div className="container position-sticky bottom-50 ">
<button className="carousel-control-next   end-0 translate-middle-y" type="button" 
data-bs-target="#carouselExample" data-bs-slide="next">
    <box-icon name='chevron-right-circle' aria-hidden="true" size="60px"></box-icon>
  </button>
</div>
</div>
    </>
  )
}
export default GetStart
