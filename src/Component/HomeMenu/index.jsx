import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function HomeMenu() {
  return (
    <div>
      <ul className="menuNav">
       <li className="menu-item ">HOME</li>
       <li className="menu-item"><Link to="/work" style={{ textDecoration: 'none', color: "white" }}>WERK</Link></li>
        <li className="menu-item">OVER</li>
        <li className="menu-item">DIENSTEN</li>
        <li className="menu-item">PARTNERS</li>
        <li className="menu-item">STORIES</li>
        <li className="menu-item">VACATURES</li>
        <li className="menu-item">EVENTS</li>
        <li className="menu-item" style={{border:"none"}}>CONTACT</li>
      </ul>
    </div>
  );
}

export default HomeMenu;
