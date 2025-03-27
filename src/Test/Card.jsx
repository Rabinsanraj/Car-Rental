// import React from 'react';

// const Card = ({ carData, onAddToWishlist}) => {
//   return (
//     <>
//     <div className="col-md-4">
//                <div className="card mb-3" >                
//                 <div className="container" style={{backgroundImage: `url(${carData[0].image})`, backgroundColor:"#e4e4e4",
//               backgroundSize:"420px",backgroundPosition:"center",backgroundRepeat:"no-repeat",
//               width: "100%",minHeight:"300px"}}>
//                 </div>
//                 <div className="card-body mt-2 mb-2" style={{backgroundColor:"#dfdfdf"}}>
//                   <h3 className="card-title text-center">{car.name}</h3>
//                   <h4 className="card-title text-center">{car.model}</h4>
                  
//                   <div className="row m-3 p-1 bg-white rounded-pill" style={{boxShadow:"inset 5px 5px 5px rgba(0,0,0,2)"}}>
//                     <div className="col-3">
//                     <button className='mt-1' type='button' style={{background:"none", border:"none"}}>
//                       <box-icon name='plus'size="30px" onClick={Increase} ></box-icon></button>
//                     </div>
//                     <div className="col">
//                         <h3 className='text-danger fs-4 text-center mt-1' id="count">{count}/day</h3>
//                     </div>
//                     <div className="col-3">
//                     <button className='mt-1' type='button'style={{background:"none", border:"none"}}>
//                       <box-icon name='minus' size="30px" onClick={Decrease}></box-icon></button>
//                     </div>
//                   </div>
//                   <div className="row">
//                     <div className="col-8"><h5 className='text-center pt-3 pb-3'>{props.review}</h5></div>
//                     <div className="col-4"> 
//                     <a href="#"><box-icon name='heart'size="35px"  className={liked ? 'btn bg-danger' :''} 
//                      onClick={CarLike} onClick={() => onAddToWishlist(car)}></box-icon></a>
//                     </div>
//                   </div>
//                   <div className="row p-2">
//                     <div className="col-4">
//                       <h3 className='text-center fs-5 fw-bold'>{car.seat}</h3>
//                     </div>
//                     <div className="col-4">
//                      <h3 className='text-center fs-5 fw-bold'>{car.transition}</h3>
//                     </div>
//                     <div className="col-4">
//                       <h3 className='text-center fs-5 fw-bold'>{car.fuel}</h3>
//                     </div>
//                   </div>
//                   <div className="row p-2">
//                     <div className="col-4">
//                       <h3 className='text-center fs-5 fw-bold'>{car.year}</h3>
//                     </div>
//                     <div className="col-4">
//                       <h3 className='text-center fs-5 fw-bold'>{car.setting}</h3>
//                     </div>
//                     <div className="col-4">
//                       <h3 className='text-center fs-5 fw-bold'>{car.km}</h3>
//                     </div>
//                   </div>
//                   <Link className='btn btn-dark form-control mt-2 mb-3' type="button" to="checkout">Book Now</Link>
//                 </div>
//               </div>
//             </div>

//     {/* <div className="card" style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
//     <img src={car.image}/>
//       <h3>{car.name}</h3>
//       <p>Model: {car.model}</p>
//       <p>Price: ${car.seat}</p>
//       <button onClick={() => onAddToWishlist(car)}>Add to Wishlist</button>
//     </div> */}
    
//     {/* <div className="col-md-4">
// //               <div className="card mb-3" >
// //                 <div className="container" style={{backgroundImage: `url(${{car.image}})`, backgroundColor:"#e4e4e4",
// //               backgroundSize:"420px",backgroundPosition:"center",backgroundRepeat:"no-repeat",
// //               width: "100%",minHeight:"300px"}}>
// //                 </div>
// //                 <div className="card-body mt-2 mb-2" style={{backgroundColor:"#dfdfdf"}}>
// //                   <h3 className="card-title text-center">{car.name}</h3>
                  
// //                   <div className="row m-3 p-1 bg-white rounded-pill" style={{boxShadow:"inset 5px 5px 5px rgba(0,0,0,2)"}}>
// //                     <div className="col-3">
// //                     <button className='mt-1' type='button' style={{background:"none", border:"none"}}>
// //                       <box-icon name='plus'size="30px" onClick={Increase} ></box-icon></button>
// //                     </div>
// //                     <div className="col">
// //                         <h3 className='text-danger fs-4 text-center mt-1' id="count">{count}/day</h3>
// //                     </div>
// //                     <div className="col-3">
// //                     <button className='mt-1' type='button'style={{background:"none", border:"none"}}>
// //                       <box-icon name='minus' size="30px" onClick={Decrease}></box-icon></button>
// //                     </div>
// //                   </div>
// //                   <div className="row">
// //                     <div className="col-8"><h5 className='text-center pt-3 pb-3'>{props.review}</h5></div>
// //                     <div className="col-4"> 
// //                     <a href="#"><box-icon name='heart'size="35px"  className={liked ? 'btn bg-danger' :''} 
// //                      onClick={CarLike} onClick={() => onAddToWishlist(car)}></box-icon></a>
// //                     </div>
// //                   </div>
// //                   <div className="row p-2">
// //                     <div className="col-4">
// //                       <h3 className='text-center fs-5 fw-bold'>4 Seats</h3>
// //                     </div>
// //                     <div className="col-4">
// //                      <h3 className='text-center fs-5 fw-bold'>AT/MT</h3>
// //                     </div>
// //                     <div className="col-4">
// //                       <h3 className='text-center fs-5 fw-bold'>Petrol</h3>
// //                     </div>
// //                   </div>
// //                   <div className="row p-2">
// //                     <div className="col-4">
// //                       <h3 className='text-center fs-5 fw-bold'>2015</h3>
// //                     </div>
// //                     <div className="col-4">
// //                       <h3 className='text-center fs-5 fw-bold'>Settings</h3>
// //                     </div>
// //                     <div className="col-4">
// //                       <h3 className='text-center fs-5 fw-bold'>27 K</h3>
// //                     </div>
// //                   </div>
// //                   <Link className='btn btn-dark form-control mt-2 mb-3' type="button" to="checkout">Book Now</Link>
// //                 </div>
// //               </div>
// //             </div> */}

//     </>
//   );
// };

// export default Card;


