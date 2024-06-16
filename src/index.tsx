import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { App } from "./app/ui/App/App";
import "./app/styles/index.scss";
import { ThemeProvider } from "./app/providers/themeProvidertemp/ui/ThemeProvider";
import "@/app/config/i18n/i18n";
import { ErrorBoundary } from "./app/providers/errorBoundarytemp";
import { StoreProvider } from "./app/providers/storeProvidertemp";

render(
  <StoreProvider>
    <ErrorBoundary>
      <BrowserRouter>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </ErrorBoundary>
  </StoreProvider>,
  document.getElementById("root"),
);
