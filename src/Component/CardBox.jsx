import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'boxicons'
function CardBox(props){
    return(
        <> 
          <div className="container justify-content-center align-items-center">
            <div className="card text-center bg-light fs-6 fw-bold pt-1 pb-3" style={{width:"100%",boxShadow:"5px 6px rgba(0,0,0,0.3)",border:"none"}}>
                <p className="text-black pt-2"style={{padding:"13px", borderRadius:"50%",}}>{props.icon}</p>
                    <h1 className='fs-5 fw-bold pt-2'>{props.head} <span>{props.subimp}</span></h1>
                <p>{props.sub}</p>
            </div>
            </div>
        </>

    );
}

export function CardBox1(props){
    return(
        <div>
            <div className="col">
                <div className="card mb-3 text-center bg-light">
                    <div className="row row row-cols-1 row-cols-md-2">
                        <div className="col">
                        <img src={props.oldlady} className="w-75 rounded" alt="Card Image"/>
                        </div>
                        <div className="col pt-3 text-center">
                        <h1 className='fs-4 fw-bold'>{props.personname}</h1>
                        <h2 className='fs-5 fw-Light'>{props.profession}</h2>
                        <div className="d-inline-flex">
                            <p >{props.star1}</p>
                            <p>{props.star2}</p>
                            <p>{props.star3}</p>
                        </div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    );
}
export default CardBox


