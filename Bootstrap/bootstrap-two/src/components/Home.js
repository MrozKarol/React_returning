import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {Jumbotron, Container, Row, Col, Image, Button} from "react-bootstrap";
import './Home.css'

class Home extends Component {
    state = {  }
    render() { 
        return (
            
                <Container>
                <Jumbotron>
                    <h2>Welcom to second Bootstrap Page</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet sapiente id illo at assumenda! Maxime.</p>
                </Jumbotron>
                <Link to="/about">
                    <Button bsStyle="primary">About</Button>
                </Link>
            </Container>
           
            
         );
    }
}
 
export default Home;