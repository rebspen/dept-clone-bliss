import React from "react";
import { Jumbotron, Button, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";

function Header(props) {
  return (
    <div>
    {/* header on mobile */}
    <div class="headermobile" >
    <nav className="navbar bg-none navbar-light">
        <a className="navbar-brand" href="#" style ={{fontSize: "40px"}}>
          DEPT
        </a>
        <button
          className="navbar-toggler positionBtn"
          type="button"
          data-toggle="collapse"
          data-target="#collapsingNavbar"
        >
        <p className="navbar-brand menu">menu</p>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse z" id="collapsingNavbar">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
               one
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/" data-toggle="collapse">
              two
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="d-flex flex-column justify-content-between align-items-center">
      <div className="content">
        <h1 className="title">WORK</h1>
      </div>
      <button type="button" className="hdmobile">
          <Link to ="#"> <p className="linkbtn">VIEW CASE</p></Link>
        </button>
      </div>
    </div>


{/* header on desktop */}
    <div class="header pt-1">
      <nav className="navbar bg-none navbar-light">
        <a className="navbar-brand" href="#" style ={{fontSize: "40px"}}>
          DEPT
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsingNavbar"
        >
        <p className="navbar-brand menu">menu</p>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse z" id="collapsingNavbar">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
              one
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/" data-toggle="collapse">
                two
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="content">
        <h1 className="title">WORK</h1>
        <button type="button" className="hd">
        <Link to ="#"><p className="linkbtn">VIEW CASE</p></Link>
        </button>
      </div>
    </div>
    </div>
  );
}

export default Header;
