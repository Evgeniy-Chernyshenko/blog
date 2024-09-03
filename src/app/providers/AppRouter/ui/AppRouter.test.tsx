import { screen } from "@testing-library/react";
import { componentRender } from "@/shared/config/tests/componentRender";
import { appRoutes } from "@/shared/constants/appRoutes";
import { AppRouter } from "./AppRouter";

describe("app/providers/AppRouter", () => {
  test("Страница должна отрендериться", async () => {
    componentRender(<AppRouter />, { route: appRoutes.getAboutRoute() });

    const page = await screen.findByTestId("AboutPage");
    expect(page).toBeInTheDocument();
  });

  test("Рендеринся NotFoundPage если страница не найдена", async () => {
    componentRender(<AppRouter />, { route: "/non-existend-route" });

    const page = await screen.findByTestId("NotFoundPage");
    expect(page).toBeInTheDocument();
  });

  test("Редирект на главную страницу если пользователь неавторизован", async () => {
    componentRender(<AppRouter />, { route: appRoutes.getProfileRoute("1") });

    const page = await screen.findByTestId("HomePage");
    expect(page).toBeInTheDocument();
  });

  test("Предоставляется доступ к профилю авторизованному пользователю", async () => {
    componentRender(<AppRouter />, {
      route: appRoutes.getProfileRoute("1"),
      initialState: {
        user: {
          authData: { roles: ["user"] },
        },
      },
    });

    const page = await screen.findByTestId("ProfilePage");
    expect(page).toBeInTheDocument();
  });

  test("Предоставляется доступ к админ панели авторизованному пользователю", async () => {
    componentRender(<AppRouter />, {
      route: appRoutes.getAdminRoute(),
      initialState: {
        user: {
          authData: { roles: ["admin"] },
        },
      },
    });

    const page = await screen.findByTestId("AdminPanelPage");
    expect(page).toBeInTheDocument();
  });

  test("Не предоставляется доступ к админ панели если недостаточно прав", async () => {
    componentRender(<AppRouter />, {
      route: appRoutes.getAdminRoute(),
      initialState: {
        user: {
          authData: { roles: ["user"] },
        },
      },
    });

    const page = await screen.findByTestId("ForbiddenPage");
    expect(page).toBeInTheDocument();
  });
});
