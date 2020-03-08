import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Header(props) {


  const handleMenu = () => {
    props.operateMenu()
  }


  return (
    <div>
      {/* header on mobile */}
      <div class="headermobile">
        <nav className="navbar bg-none navbar-light">
          <Link className="navbar-brand" to="/" style={{ fontSize: "40px" }}>
            DEPT
          </Link>
          <div className="d-flex flex-direction-row">
            <p className="navbar-brand menu">menu</p>
            <div> 
            <button className="menuToggle" to = "#" onClick={() => handleMenu()}>
            <div className="toggle"></div>
            <div className="toggle"></div>
            <div className="toggle"></div>
            </button>
            </div>
            </div>
        </nav>
        <div className="">
          <div className="content">
            <h1 className="title">WORK</h1>
          </div>
          <button type="button" className="hdmobile">
            <Link to="#" style={{ textDecoration: "none", color: "white" }}>
              {" "}
              <p className="linkbtn">VIEW CASE</p>
            </Link>
          </button>
        </div>
      </div>

      {/* header on desktop */}
      <div>
        <div class="header pt-1">
          <nav className="navbar bg-none navbar-light">
            <Link
              className="navbar-brand"
              href="#"
              style={{ fontSize: "40px" }}
            >
              DEPT
            </Link>
            <div className="d-flex flex-direction-row">
            <p className="navbar-brand menu">menu</p>
            <div> 
            <button className="menuToggle" to = "#" onClick={(e) => handleMenu(e,props)}>
            <div className="toggle"></div>
            <div className="toggle"></div>
            <div className="toggle"></div>
            </button>
            </div>
            </div>

           
          </nav>
          <div className="content">
            <h1 className="title">WORK</h1>
          </div>
        </div>
        <button type="button" className="btntop">
          <Link to="#" style={{ textDecoration: "none", color: "white" }}>
            <p className="linkbtn">VIEW CASE</p>
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Header;
