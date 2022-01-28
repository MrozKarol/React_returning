import React from "react";

const DisplayText = () => {
  const [value, setValue] = React.useState("");

  const handleOnChange = (e) => {
    setValue(e.target.value);
  };
  const handeOnClick = () => {
    setValue("");
  };
  return (
    <div>
      <input
        value={value}
        placeholder="write sometching"
        type="text"
        onChange={handleOnChange}
      ></input>
      <button onClick={handeOnClick}>Reset</button>
      <h1>{value.toUpperCase()}</h1>
    </div>
  );
};

export default DisplayText;
