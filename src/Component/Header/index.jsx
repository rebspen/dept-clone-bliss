import React from "react";
import { Jumbotron, Button, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";

function Header(props) {
  return (
    <Jumbotron>
      <Navbar expand="">
        <Navbar.Brand href="#home">DEPT</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <h1>WORK</h1>
      <Link to="/">
        <Button variant="primary">View Case</Button>
      </Link>
    </Jumbotron>
  );
}

export default Header;
