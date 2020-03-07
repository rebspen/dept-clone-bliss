import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function HomeSocial() {
  return (
      <div className="homeSocial">
        <Link to="#"><p className="homeSocialLink">FACEBOOK</p></Link>
        <Link to="#"><p className="homeSocialLink">TWITTER</p></Link>
        <Link to="#"><p className="homeSocialLink">INSTAGRAM</p></Link>
        <Link to="#"><p className="homeSocialLink">LINKEDIN</p></Link>
      </div>

  );
}

export default HomeSocial;
