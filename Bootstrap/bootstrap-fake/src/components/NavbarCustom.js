import React, { Component } from "react";
import './NavbarCustom.css'
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse,
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import 'mdbreact/dist/css/mdb.css';

import logoApp from '../img/logo.png'



class NavbarCoustom extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <Router>
        <MDBNavbar color=" blue-grey lighten-5" dark expand="lg">
          <MDBNavbarBrand>
            <span className="white-text"><img src={logoApp} alt="" /></span>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav left>
              <MDBNavItem active>
                <MDBNavLink className="black-text text-uppercase" to="/home">Home</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink className="black-text text-uppercase" to="/about">About</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink className="black-text text-uppercase" to="/serwices">Serwices</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>

              </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav left>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </Router>
    );
  }
}

export default NavbarCoustom;