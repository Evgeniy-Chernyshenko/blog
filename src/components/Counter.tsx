import { useState } from "react";
import "./Counter.scss";

export const Counter = () => {
  const [value, setValue] = useState(0);

  const handleIncrement = () => {
    setValue((prev) => prev + 1);
  };

  return (
    <>
      <h1>{value}</h1>
      <button onClick={handleIncrement}>increment</button>
    </>
  );
};
