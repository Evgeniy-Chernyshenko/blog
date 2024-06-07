import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  test("Кнопка рендерится с нужным текстом", () => {
    render(<Button>Button text</Button>);

    expect(screen.getByText("Button text")).toBeInTheDocument();
  });

  test("Кнопка рендерится с нужной темой", () => {
    render(<Button theme="clear">Button text</Button>);

    expect(screen.getByText("Button text")).toHaveClass("clear");
  });
});
