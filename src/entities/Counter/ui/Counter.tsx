import { useCounterValue } from "../model/selectors/getCounterValue/getCounterValue";
import { useCounterActions } from "../model/slice/counterSlice";

export const Counter = () => {
  const { increment, decrement, add } = useCounterActions();
  const counterValue = useCounterValue();

  const handleAddFive = () => {
    add(5);
  };

  return (
    <>
      <h1 data-testid="counter-value">{counterValue}</h1>

      <button data-testid="counter-increment" onClick={() => increment()}>
        +
      </button>
      <button data-testid="counter-decrement" onClick={() => decrement()}>
        -
      </button>
      <button data-testid="counter-add-five" onClick={() => handleAddFive()}>
        +++++
      </button>
    </>
  );
};
