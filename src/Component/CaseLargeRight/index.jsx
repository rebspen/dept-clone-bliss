import React from "react";
import { Link } from "react-router-dom";
import "./style.css"

function CaseLargeRight() {
  return (
    <div>
    {/* on mobile */}
    <div className="caseLargeMobileRight">

    <Link className="link" to = "/">
    <div className="card mt-3 mb-3 pb-1" style={{width: "100%", border:"none", borderRadius: "0px",  borderTop: "1px solid #a3a3a3"}}>
      <div className="card-body">
        <h5 className="card-title">Arla</h5>
        <p className="card-text" style={{ fontSize: "24px"}}>
          Swipe to find your next holiday destination
        </p>
      
      </div>
    </div>
    </Link>

    <Link className="link" to = "/"> 
    <div className="card mt-3 mb-3 pb-4" style={{width: "100%", border:"none", borderRadius: "0px", borderTop: "1px solid #a3a3a3", borderBottom: "1px solid #a3a3a3" }}>
      <div className="card-body">
        <h5 className="card-title">Arla</h5>
        <p className="card-text" style={{ fontSize: "24px"}}> 
          Swipe to find your next holiday destination
        </p>
      </div>
    </div>
    </Link>

</div>


{/* on desktop */}

    <div className= "caseLargeDesktopRight">
    <div className="caseLarge mt-3" style={{width: "100%"}}>
    <div className="mt-3" style={{width: "30%", border:"none", borderRadius: "0px"}}>

    <div className="card mt-3 mb-3 mr-1" style={{width: "100%", border:"none", borderRadius: "0px",  borderTop: "1px solid #a3a3a3"}}>
      <div className="card-body">
        <h5 className="card-title">Arla</h5>
        <p className="card-text" style={{ fontSize: "24px"}}>
          Swipe to find your next holiday destination
        </p>
        <Link className="link" to = "/"> &#9658; VIEW CASE</Link>
      </div>
    </div>


    <div className="card mt-3 mb-3" style={{width: "100%", border:"none", borderRadius: "0px", borderTop: "1px solid #a3a3a3", borderBottom: "1px solid #a3a3a3" }}>
      <div className="card-body">
        <h5 className="card-title">Arla</h5>
        <p className="card-text" style={{ fontSize: "24px"}}> 
          Swipe to find your next holiday destination
        </p>
        <Link className="link" to = "/"> &#9658; VIEW CASE</Link>
      </div>
    </div>

    </div>
    <div className="card" style={{width: "60%", border:"none", borderRadius: "0px"}}>
      <img src="/images/florensis.png" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Arla</h5>
        <p className="card-text">
          Swipe to find your next holiday destination
        </p>
        <Link className="link" to = "/"> &#9658; VIEW CASE</Link>
      </div>
    </div>

    </div>
    </div>
    </div>
  );
}

export default CaseLargeRight;
