import { Redirect, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Category from "./pages/Category";
import ThemeContext from "./ThemeContext";
import Page404 from "./pages/page404";
import { useState } from "react";
import { Provider } from "react-redux";
import store from "./Redux/store";

let pages = [
  { path: "/", component: <Home />, exact: true },
  { path: "/about", component: <About /> },
  { path: "/dashboard", component: <Dashboard /> },
  { path: "/:category", component: <Category /> },
  { path: "/404", component: <Page404 /> },
  { component: <Redirect to="/pages" /> },
];

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
