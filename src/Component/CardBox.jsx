import React from "react";

function CardBox({ icon, head, subimp, sub }) {
  return (
    <div className="container justify-content-center align-items-center">
      <div
        className="card text-center bg-light fs-6 fw-bold pt-1 pb-3"
        style={{width: "100%",boxShadow: "5px 6px 10px rgba(0,0,0,0.5)",border: "none",}}>
        <p className="text-black pt-2" style={{ padding: "13px", borderRadius: "50%" }}>
          {icon}
        </p>
        <h1 className="fs-5 fw-bold pt-2">
          {head} <span>{subimp}</span>
        </h1>
        <p>{sub}</p>
      </div>
    </div>
  );
}

export function CardBox1({ oldlady, personname, profession, star1, star2, star3 }) {
  return (
    <div className="col">
      <div className="card mb-3 text-center bg-light">
        <div className="row row-cols-1 row-cols-md-2">
          <div className="col">
            <img src={oldlady} className="w-75 rounded" alt="Card Image" />
          </div>
          <div className="col pt-3 text-center">
            <h1 className="fs-4 fw-bold">{personname}</h1>
            <h2 className="fs-5 fw-light">{profession}</h2>
            <div className="d-inline-flex">
              <p>{star1}</p>
              <p>{star2}</p>
              <p>{star3}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardBox;
