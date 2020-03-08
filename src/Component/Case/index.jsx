import React from "react";
import { Link } from "react-router-dom";
import "./style.css"

function Case(props) {
  return (
    <div className="topcase">
    {/* on mobile */}
    <div className="casemobile">
    <Link className="link" to = "/"> 
    <div className="card" style={{maxWidth: "100%", width: "100%", border:"none", borderRadius: "0px"}}>
      <img src={props.val.image} className="card-img-top" alt="..."  style ={{width: "100%"}}/>
      <div className="card-body">
        <h5 className="card-title">{props.val.client}</h5>
        <p className="card-text">
        {props.val.title}
        </p>
      </div>
    </div>
    </Link>
    </div>

{/* on desktop */}
    <div className="casedesktop">
    <div className="card" style={{maxWidth: "100%", border:"none", borderRadius: "0px"}}>
      <img src={props.val.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.val.client}</h5>
        <p className="card-text">
        {props.val.title}
        </p>
        <Link className="link" to = "/" style={{textDecoration:"none"}}> &#9658; VIEW CASE</Link>
      </div>
    </div>
    </div>

    </div>
  );
}

export default Case;
