import React, { useEffect, useState } from "react";

const UseEfect_1 = () => {
  const [counter, setCounter] = useState(0);
  const [isActive, setIsAcitve] = useState(true);

  const handler = () => setCounter((prevValue) => prevValue + 1);
  const toggleVisibilityCounter = () => setIsAcitve((prevValue) => !prevValue);
  const counterComponent = isActive ? (
    <Counter rerenderCounter={counter} />
  ) : null;
  // useEffect(() => {
  //   alert("Uwaga");
  // }, []);

  return (
    <div onClick={handler}>
      <button onClick={toggleVisibilityCounter}>Show/hide component</button>
      {counterComponent}
      <button onClick={handler}>Rerender Component</button>
    </div>
  );
};

const Counter = ({ rerenderCounter }) => {
  const [counter, setCounter] = useState(0);

  const handleMouseMove = (e) => setCounter(e.clientX);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [rerenderCounter]);
  return (
    <div>
      <p>{counter}</p>
      <p>{rerenderCounter}</p>
    </div>
  );
};

export default UseEfect_1;
