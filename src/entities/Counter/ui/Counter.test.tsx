import { screen, fireEvent } from "@testing-library/react";
import { componentRender } from "@/app/config/tests/componentRender";
import { Counter } from "..";

describe("Counter", () => {
  beforeEach(() => {
    componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
  });

  test("Значение счетчика отображается", () => {
    expect(screen.getByTestId("counter-value")).toHaveTextContent("10");
  });

  test("Значение счетчика увеличивается", () => {
    fireEvent.click(screen.getByTestId("counter-increment"));

    expect(screen.getByTestId("counter-value")).toHaveTextContent("11");
  });

  test("Значение счетчика уменьшается", () => {
    fireEvent.click(screen.getByTestId("counter-decrement"));

    expect(screen.getByTestId("counter-value")).toHaveTextContent("9");
  });
});
