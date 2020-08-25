import React from 'react';
const UserOuput = (props) => {
    const style = {
        color: "red"
    }
    return ( <div className="UserOutput">
        <p>Paased name: {props.name}</p>
        <input style={style} onChange={props.changed} type="text" value={props.name}></input>
    </div> );
}
 
export default UserOuput;