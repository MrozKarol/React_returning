import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {Jumbotron, Container, Row, Col, Button} from "react-bootstrap";
import Image from 'react-bootstrap/Image'
import './Home.css'


import Janusz from '../assets/person-1.jpg'
import Irenka from '../assets/person-2.jpg'
import Stefan from  '../assets/person-3.jpg'

class Home extends Component {
    state = {  }
    render() { 
        return (
            
                <Container>
                <Jumbotron>
                    <h2>Welcom to second Bootstrap Page</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet sapiente id illo at assumenda! Maxime.</p>
                <Link to="/about">
                    <Button bsStyle="primary">About</Button>
                </Link>
                </Jumbotron>
                <Row className="show-grid text-center">
                    <Col xs={12} sm={4} lg={4} className="person-wrapper">
                        <Image src={Janusz}  roundedCircle className="profile-pic"/>
                        <h1>Janusz</h1>
                    </Col>
                    <Col xs={12} sm={4} lg={4} className="person-wrapper">
                        <Image src={Irenka}  roundedCircle className="profile-pic"/>
                        <h1>Irenka</h1>
                    </Col>
                    <Col xs={12} sm={4} lg={4} className="person-wrapper">
                        <Image src={Stefan}  roundedCircle className="profile-pic"/>
                        <h1>Stefan</h1>
                    </Col>
                </Row>
                
            </Container>
           
            
         );
    }
}
 
export default Home;