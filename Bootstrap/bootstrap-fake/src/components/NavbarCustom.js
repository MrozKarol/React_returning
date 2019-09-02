import React, { Component } from "react";
import './NavbarCustom.css';
import { Nav,Navbar } from 'react-bootstrap';


import logoApp from '../img/logo.png'

class NavbarCoustom extends Component {


  render() {
    return (
      
        <Navbar collapseOnSelect expand="md" bg="light">
      <Navbar.Brand href="/"><img src={logoApp} alt=""/></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          
          <Nav.Link href="#features">Home</Nav.Link>
          <Nav.Link href="#pricing">Do About</Nav.Link>
          <Nav.Link href="#pricing">Services</Nav.Link>
          <Nav.Link href="#pricing">Team</Nav.Link>
          <Nav.Link href="#pricing">Connect</Nav.Link>
         
        </Nav>
  
      </Navbar.Collapse>
    </Navbar>
      
    );
  }
}

export default NavbarCoustom;