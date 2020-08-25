import React from 'react';
const ImputCOmponent = (props) => {
    return ( 
        <div>
            <input onChange={props.change} type="text" value={props.value}></input>
            <br></br>
            <p>{props.value.length}</p>
        </div>
     );
}
 
export default ImputCOmponent;