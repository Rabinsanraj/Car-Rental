import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'boxicons'
import CarNav from '../Component/CarNav';
import Dashboardcard from '../Component/Dashboardcard';

function Dashboard(){
    return(
        <>
        <CarNav name="User Dashboard" pagename1="Home" pagename2="About" link1="/" link2="/"/>

        <div className="container-fluid">
            <h1 className='display-3 text-black fw-bold'>Dashboard</h1>
        </div>
        <div className="container-fluid">
        <div className="row border border-dark">
            <Dashboardcard name="" count="" icon="" view="" viewicon=""/>
            <Dashboardcard name="" count="" icon="" view="" viewicon=""/>
            <Dashboardcard name="" count="" icon="" view="" viewicon=""/>
        </div>
        </div>
        </>
    );
}
export default Dashboard