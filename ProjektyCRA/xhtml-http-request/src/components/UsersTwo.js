import React from 'react';
import './UsesTwo.css'

const UsersTwo = (props) => {
    return ( 
        <div>
            <h4>{props.userName}</h4>
            <p>{props.userAddress} <span><i>{props.userCity}</i></span></p>
       
        </div>
     );
}
 
export default UsersTwo;