import React from "react";
const UserInput = (props) => {
  const style = {
    color: "gray",
  };
  return (
    <div className="UserName">
      <h3>Component UserInputs</h3>
      <input onChange={props.changed2} style={style} type="text" value={props.value}></input>
    </div>
  );
};

export default UserInput;
