import { Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Category from "./pages/Category";
import ThemeContext from "./ThemeContext";
import { useState } from "react";

let pages = [
  { path: "/", component: <Home />, exact: true },
  { path: "/about", component: <About /> },
  { path: "/dashboard", component: <Dashboard /> },
  { path: "/:category", component: <Category /> },
];

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="app">
        <Switch>
          {pages.map((i) => (
            <Route key={i} path={i.path} exact={i.exact}>
              {i.component}
            </Route>
          ))}
        </Switch>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
