import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components'


const Styled = styled.div`
    .navbar{
        bacground-color: #222;   
    }
    .navbar-brand, .navbrar-nav . nav-link{
        color: #bbb
    }
    .navbar-brand, .navbrar-nav . nav-link:hover{
        color: red
    }
`;

const NavigationBar = () => {
    return (
        <Styled>
            <Navbar expand="lg">
                <Navbar.Brand href="/">Code</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Styled>
    );
}

export default NavigationBar;