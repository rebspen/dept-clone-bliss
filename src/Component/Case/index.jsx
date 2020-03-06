import React from "react";
import { Link } from "react-router-dom";
import "./style.css"

function Case() {
  return (
    <div className="card" style={{width: "47%", border:"none", borderRadius: "0px"}}>
      <img src="/images/tui.png" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Arla</h5>
        <p className="card-text">
          Swipe to find your next holiday destination
        </p>
        <Link className="link" to = "/"> &#9658; VIEW CASE</Link>
      </div>
    </div>
  );
}

export default Case;
