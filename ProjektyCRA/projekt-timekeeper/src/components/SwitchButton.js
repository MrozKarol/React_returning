import React from 'react';
const SwitchButton = (props) => (
    <button onClick={props.onClick}
        style={!props.active ? { color: "green" } : { color: "red" }}
    >{props.active ? "Stop" : "Start"}</button>
)

export default SwitchButton