import React, { useContext } from "react";
import "./Container.css";
import Header from "../Header";
import Footer from "../Footer";
import ThemeContext from "../../ThemeContext";

function Container(props) {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Header />
      <div
        className={
          theme === "light"
            ? "light container-content"
            : "dark container-content"
        }
      >
        {props.children}
      </div>
      <Footer />
    </>
  );
}

export default Container;
