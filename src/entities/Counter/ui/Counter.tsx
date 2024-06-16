import { useSelector } from "react-redux";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue";
import { counterActions } from "../model/slice/counterSlice";

export const Counter = () => {
  const dispatch = useAppDispatch();
  const counterValue = useSelector(getCounterValue);

  const handleIncrement = () => {
    dispatch(counterActions.increment());
  };

  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <>
      <h1 data-testid="counter-value">{counterValue}</h1>

      <button data-testid="counter-increment" onClick={handleIncrement}>
        +
      </button>
      <button data-testid="counter-decrement" onClick={handleDecrement}>
        -
      </button>
    </>
  );
};
