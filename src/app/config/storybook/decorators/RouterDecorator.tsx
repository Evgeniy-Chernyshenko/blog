import { Story } from "@storybook/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";

export const RouterDecorator =
  (params?: Record<string, string>) => (StoryComponent: Story) => {
    if (params) {
      const currentPath = `/${Object.values(params).join("/")}`;
      const routePath = `/${Object.keys(params)
        .map((param) => `:${param}`)
        .join("/")}`;

      return (
        <MemoryRouter initialEntries={[currentPath]}>
          <Routes>
            <Route path={routePath} element={<StoryComponent />} />
          </Routes>
        </MemoryRouter>
      );
    }

    return (
      <MemoryRouter>
        <StoryComponent />
      </MemoryRouter>
    );
  };
