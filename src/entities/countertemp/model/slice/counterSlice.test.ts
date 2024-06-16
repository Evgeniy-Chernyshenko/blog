import { CounterSchema } from "../..";
import { counterActions, counterReducer } from "./counterSlice";

describe("counterSlice", () => {
  test("Корректно отрабатывает increment", () => {
    const state: CounterSchema = { value: 10 };

    expect(counterReducer(state, counterActions.increment())).toEqual({
      value: 11,
    });
  });

  test("Корректно отрабатывает decrement", () => {
    const state: CounterSchema = { value: 10 };

    expect(counterReducer(state, counterActions.decrement())).toEqual({
      value: 9,
    });
  });

  test("Корректно работает при пустом стейте", () => {
    expect(counterReducer(undefined, counterActions.increment())).toEqual({
      value: 1,
    });

    expect(counterReducer(undefined, counterActions.decrement())).toEqual({
      value: -1,
    });
  });
});
