import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'boxicons'

function CardBox(props){
    return(
        <> 
          <div className="container d-flex justify-content-center">
            <div className="card text-center fs-6 fw-bold pt-1 pb-3" style={{width:"100%"}}>
                <p className="text-black pt-2"style={{padding:"13px", borderRadius:"50%"}}>{props.icon}</p>
                    <h1 className='fs-5 fw-bold pt-2'>{props.head} <span>{props.subimp}</span></h1>
                    <p>{props.sub}</p>
            </div>
            </div>
        </>
    );
}
export default CardBox 
//  "cat": "git add . && git commit -m 'mod' && git push origin main && npm run build"