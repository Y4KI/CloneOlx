import React from "react";
import "./Container.css";
import Header from "../Header";
import Footer from "../Footer";

function Container(props) {
  return (
    <>
      <Header />
      <div className="container-content">{props.children}</div>
      <Footer />
    </>
  );
}

export default Container;
