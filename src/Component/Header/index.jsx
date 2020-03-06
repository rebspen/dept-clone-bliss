import React from "react";
import { Jumbotron, Button, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";

function Header(props) {
  return (
    <div class="header">
      <nav className="navbar bg-none navbar-light">
        <a className="navbar-brand" href="#">
          DEPT
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsingNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse z" id="collapsingNavbar">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">Home</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="//codeply.com">
                Codeply
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#myAlert" data-toggle="collapse">
                Wow
              </a>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a
                className="nav-link"
                href=""
                data-target="#myModal"
                data-toggle="modal"
              >
                About
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="content">
        <h1 className="title">WORK</h1>
        <button type="button" className="btn btn-dark hd">
          See Case
        </button>
      </div>
    </div>
  );
}

export default Header;
