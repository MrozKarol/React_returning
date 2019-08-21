import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import gdaImage from '../assets/gda.jpg';

const Styles = styled.div`
 .jumbo{
    background: url(${gdaImage}) no-repeat fixed bottom;
    background-size: cover;
    position:relative;
    z-index: -2;
    color: #efefef
 }
.overlay{
    background-color: #000;
    opacity: 0.4;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
}
`;


const Jumbotron = () => {
    return (
        <Styles>
            <Jumbo fluid={true} className="jumbo">
                <div className="overlay"></div>
                <Container>
                    <h1>Hej Hej</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At soluta ullam in, quo, temporibus eum necessitatibus error iste, quam quod dolore doloremque tenetur? Modi saepe eveniet suscipit repudiandae quas qui?</p>

                </Container>
            </Jumbo>
        </Styles>

    );
}

export default Jumbotron;

