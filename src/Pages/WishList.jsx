import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'boxicons'
import CarNav from '../Component/CarNav'
import { WishListComp } from '../Component/Dashboardcard'

function WishList(){
    return(
        <>
         <CarNav name="User Dashboard" pagename1="Home" pagename2="About" link1="/" link2="/"/>

         <div className="container">
            <h1 className='display-4 fw-bold text-danger'>User Wishlist's</h1>
         </div>
        <div className="container-fluid pt-5">
           <WishListComp/>
           <WishListComp/>
        </div>
        </>
    );
}
export default WishList