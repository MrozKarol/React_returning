import React from "react";
const UserOuput = (props) => {
  const colorRed = {
    color: "red",
  };
  const colorGreen= {
    color: "green",
  };

  return (
    <div className="UserOutput">
      <p style={props.name2.length <= 0 ? colorRed : colorGreen}>Some name:{props.name2}</p>
    </div>
  );
};

export default UserOuput;
