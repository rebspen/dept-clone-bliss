import React from "react";
import { Link } from "react-router-dom";
import "./style.css"

function CaseLargeLeft(props) {
  return (
    <div className="topcaseleft">

    {/* on mobile */}
    <div className="caseLargeMobile">

    <Link className="link" to = "/">
    <div className="card mt-3 mb-3 pb-1" style={{width: "100%", border:"none", borderRadius: "0px",  borderTop: "1px solid #a3a3a3"}}>
      <div className="card-body">
        <h5 className="card-title">{props.val.client2}</h5>
        <p className="card-text" style={{ fontSize: "24px"}}>
        {props.val.title2}
        </p>
      
      </div>
    </div>
    </Link>

    <Link className="link" to = "/"> 
    <div className="card mt-3 mb-3 pb-4" style={{width: "100%", border:"none", borderRadius: "0px", borderTop: "1px solid #a3a3a3", borderBottom: "1px solid #a3a3a3" }}>
      <div className="card-body">
        <h5 className="card-title">{props.val.client3}</h5>
        <p className="card-text" style={{ fontSize: "24px"}}> 
        {props.val.title3}
        </p>
      </div>
    </div>
    </Link>

    <Link className="link" to = "/"> 
    <div className="card" style={{width: "100%", border:"none", borderRadius: "0px"}}>
      <img src= {props.val.image} className="card-img-top imglrg" alt="..." />
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
<div className="caseLargeDesktop">
    <div className="caseLarge mt-3 mb-3" style={{width: "100%"}}>

    <div className="card" style={{width: "60%", border:"none", borderRadius: "0px"}}>
      <img src={props.val.image} className="card-img-top imglrg" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.val.client}</h5>
        <p className="card-text">
        {props.val.title}
        </p>
        <Link className="link" to = "/"> &#9658; VIEW CASE</Link>
      </div>
    </div>


    <div className="mt-3" style={{width: "30%", border:"none", borderRadius: "0px"}}>

    <div className="card mt-3 mb-3" style={{width: "100%", border:"none", borderRadius: "0px",  borderTop: "1px solid #a3a3a3"}}>
      <div className="card-body">
        <h5 className="card-title">{props.val.client2}</h5>
        <p className="card-text" style={{ fontSize: "24px"}}>
        {props.val.title2}
        </p>
        <Link className="link" to = "/"> &#9658; VIEW CASE</Link>
      </div>
    </div>


    <div className="card mt-3 mb-3" style={{width: "100%", border:"none", borderRadius: "0px", borderTop: "1px solid #a3a3a3", borderBottom: "1px solid #a3a3a3" }}>
      <div className="card-body">
        <h5 className="card-title">{props.val.client3}</h5>
        <p className="card-text" style={{ fontSize: "24px"}}> 
        {props.val.title3}
        </p>
        <Link className="link" to = "/"> &#9658; VIEW CASE</Link>
      </div>
    </div>

    </div>

    </div>
    </div>
</div>
  );
}

export default CaseLargeLeft;
