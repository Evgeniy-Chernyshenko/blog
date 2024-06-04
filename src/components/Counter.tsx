import { useState } from "react";
import s from "./Counter.module.scss";

export const Counter = () => {
  const [value, setValue] = useState(0);

  const handleIncrement = () => {
    setValue((prev) => prev + 1);
  };

  return (
    <>
      <h1>{value}</h1>
      <button className={s.button} onClick={handleIncrement}>
        increment
      </button>
    </>
  );
};
