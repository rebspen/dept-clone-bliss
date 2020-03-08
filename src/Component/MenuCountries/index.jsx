import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function MenuCountries() {
  return (
    <div>
      <ul className="PrimaryNav">
       <li className="Nav-item">LANDEN</li>
        <li className="Nav-item">GLOBAL</li>
        <li className="Nav-item active">NEDERLAND &#9664;</li>
        <li className="Nav-item">UNITED STATES</li>
        <li className="Nav-item">IRELAND</li>
        <li className="Nav-item">UNITED KINGDOM</li>
        <li className="Nav-item">DEUTSCHLAND</li>
        <li className="Nav-item">SCHWEIZ</li>
      </ul>
    </div>
  );
}

export default MenuCountries;
