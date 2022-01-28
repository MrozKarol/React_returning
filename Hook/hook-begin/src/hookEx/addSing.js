import React from "react";

const AddSing = () => {
  const [text, setText] = React.useState("");

  const handleClick = () => {
    const letter = "a";
    setText(text + letter);
  };

  return (
    <div>
      <button onClick={handleClick}>Add "a"</button>
      <h1>{text}</h1>
    </div>
  );
};

export default AddSing;
