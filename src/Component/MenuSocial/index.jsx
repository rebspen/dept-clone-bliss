import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function MenuSocial() {
  return (
      <div className="homeSocial">
        <Link to="#"  style={{ textDecoration: 'none', color: "white" }}><p className="homeSocialLink">FACEBOOK</p></Link>
        <Link to="#"  style={{ textDecoration: 'none', color: "white" }}><p className="homeSocialLink">TWITTER</p></Link>
        <Link to="#"  style={{ textDecoration: 'none', color: "white" }}><p className="homeSocialLink">INSTAGRAM</p></Link>
        <Link to="#"  style={{ textDecoration: 'none', color: "white" }}><p className="homeSocialLink">LINKEDIN</p></Link>
      </div>

  );
}

export default MenuSocial;
