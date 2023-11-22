import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // 부트스트랩 CSS를 import
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const CustomNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">
        커스텀 훅 연습
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/" activeClassName="active">
            Non-Hook
          </Nav.Link>
          <Nav.Link as={Link} to="/v2" activeClassName="active">
            Simple-Custom-Hook
          </Nav.Link>
          <Nav.Link as={Link} to="/v3" activeClassName="active">
            Complex-Custom-Hook
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
