import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { App } from "./app/ui/App/App";
import "./app/styles/index.scss";
import { ThemeProvider } from "./app/providers/ThemeProvider/ui/ThemeProvider";
import "@/app/config/i18n/i18n";
import { ErrorBoundary } from "./app/providers/ErrorBoundary";

render(
  <ErrorBoundary>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </ErrorBoundary>,
  document.getElementById("root"),
);
