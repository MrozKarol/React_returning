import React from 'react';
import { Nav, Navbar,Alert } from 'react-bootstrap';
import styled from 'styled-components'


const Styles = styled.div`
    .navbar{
        background-color: #222;   
    }
    .navbar-brand, .navbrar-nav, .nav-link{
        color: orange;

        &:hover{
            color:white;
        }
    }   
`;

const NavigationBar = () => {
    return (
        <Styles>
            <Navbar expand="lg">
                <Navbar.Brand href="/">Code</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Alert.Link href="/">Home</Alert.Link>
                        <Alert.Link href="/about">About</Alert.Link>
                        <Alert.Link href="/contact">Contact</Alert.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Styles>
    );
}

export default NavigationBar;