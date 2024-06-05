import { Link } from "react-router-dom";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useTheme } from "@/app/providers/ThemeProvider";
import { AppRouter } from "./providers/AppRouter";

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", [theme])}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <button onClick={toggleTheme}>toggle theme</button>

      <AppRouter />
    </div>
  );
};
