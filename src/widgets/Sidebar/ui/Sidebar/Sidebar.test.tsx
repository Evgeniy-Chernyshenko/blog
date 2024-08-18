import { fireEvent, screen } from "@testing-library/react";
import { Sidebar } from "./Sidebar";
import { componentRender } from "@/shared/config/tests/componentRender";

describe("Sidebar", () => {
  test("Сайдбар рендерится", () => {
    componentRender(<Sidebar />);

    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });

  test("Сайдбар сворачивается", () => {
    componentRender(<Sidebar />);

    expect(screen.getByTestId("sidebar")).toBeInTheDocument();

    const toggleBtn = screen.getByTestId("sidebar-toggle");
    fireEvent.click(toggleBtn);

    expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
  });
});
