import React, { Component } from 'react';
import { Navbar, Nav, NavLink} from 'react-bootstrap';
import { Link } from 'react-router-dom';

class NavbarCustom extends Component {
    state = {}
    render() {
        return (
           
            <Navbar default collapseOnSelect>
                <Navbar.Brand ><Link to="/">Bootstrap</Link></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav pullRight>
                        <Nav.Link eventKey={1} componentClass={Link} href="/" to="/">Home</Nav.Link>
                        <Nav.Link eventKey={2} componentClass={Link} href="/about" to="/about">Abaut</Nav.Link>
                        <Nav.Link eventKey={3} componentClass={Link} href="/news" to="/news">News</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavbarCustom;