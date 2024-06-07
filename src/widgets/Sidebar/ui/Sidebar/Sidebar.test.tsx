import { fireEvent, screen } from "@testing-library/react";
import { renderWithTranslation } from "@/shared/lib/tests/renderWithTranslation";
import { Sidebar } from "./Sidebar";

describe("Sidebar", () => {
  test("Сайдбар рендерится", () => {
    renderWithTranslation(<Sidebar />);

    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });

  test("Сайдбар сворачивается", () => {
    renderWithTranslation(<Sidebar />);

    expect(screen.getByTestId("sidebar")).toBeInTheDocument();

    const toggleBtn = screen.getByTestId("sidebar-toggle");
    fireEvent.click(toggleBtn);

    expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
  });
});
