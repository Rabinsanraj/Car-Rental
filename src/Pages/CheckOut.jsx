import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'boxicons'
import CarNav from '../Component/CarNav';

function CheckOut(){
    return(
        <>
        <CarNav name="Checkout" pagename1="Home" pagename2="About" pagename3="Contact" link1="/" link2="/" link3="/"/>
        </>
    );
}
export default CheckOut