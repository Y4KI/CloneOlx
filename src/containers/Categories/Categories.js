import React from "react";
import { Link } from "react-router-dom";
import "./Categories.css";
import category from "../../data/Categories";

function Categories() {
  return (
    <div className="category mt-5">
      <div className="text-center row">
        {category.map((i, index) => (
          <Link to={i.to} key={index} className="col-3 col-sm-2 col-md-1">
            <div className="category-box">
              <img
                src={i.icon}
                alt="pics"
                className="category__icon w-100"
                style={{ backgroundColor: i.bgColor }}
              />
              <p>{i.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Categories;
