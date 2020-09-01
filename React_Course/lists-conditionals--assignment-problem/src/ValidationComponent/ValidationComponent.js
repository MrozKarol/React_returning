import React from 'react';
const ValidationComponent = (props) => {
    let howLong = props.textLength;
    console.log(howLong)
    const red = {color:'red'}
    const green = {color:'green'}
    return ( 
        
        <div>
            <p>How long is text: {howLong < 5 ?<span style={red}>Text too short</span> : <span style={green}>Text long enough</span> }</p>
        </div>
     );
}
 
export default ValidationComponent; 
