import React from 'react';
import {NavLink} from 'react-router-dom';
const Navigation = () => {
    return ( 
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Start</NavLink>
                </li>
                <li>
                    <NavLink to="products">Produkty</NavLink>
                </li>
                <li>
                    <NavLink to="contakt">Kontakt</NavLink>
                </li>
                <li>
                    <NavLink to="admin">Panel admina</NavLink>
                </li>
            </ul>
        </nav>
     );
}
 
export default Navigation;