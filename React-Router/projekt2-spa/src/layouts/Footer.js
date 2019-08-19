import React from 'react';
import { Route } from 'react-router-dom';
import "../styles/Footer.css"
const Footer = () => {
    return (
        <div>
            <h2>Stopka</h2>
            <Route path="/" exact render={(props) => {
                console.log(props);
                return (
                    <p>Jesteś na stronie głownej</p>
                )
            }} />
        </div>
    );
}

export default Footer;