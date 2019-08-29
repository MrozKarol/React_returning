import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Button, Image } from "react-bootstrap";
import './About.css'
import coffe from "../assets/coffie-heade.jpg"
import Janusz from '../assets/person-1.jpg'

class About extends Component {
    state = {}
    render() {
        return (
            <div>
                <Container fluid>

                    <Col lg={12} className="header-image" >
                    </Col>
                    <Container >
                        <Col xs={12} sm={8} lg={4} smOffset={2}>
                           
                            <Image src={Janusz} className="about-person-pic" fluid />
                            
                            <h3>Janusz Janusz</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, ad!</p>
                        </Col>
                    </Container>
                </Container>
            </div>
        );
    }
}

export default About;