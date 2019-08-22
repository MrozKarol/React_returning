import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';


const Contact = () => {
    return (
        <Container>
            <Row>
                <Col className="coll"sm={8}><Alert variant="success">8</Alert></Col>
                <Col className="coll"sm={4}><Alert variant="success">8</Alert></Col>
            </Row>
            <Row>
                <Col className="coll"sm>sm=true</Col>
                <Col className="coll"sm>sm=true</Col>
                <Col className="coll"sm>sm=true</Col>
            </Row>
        </Container>
    );
}

export default Contact;