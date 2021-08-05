import React from "react";
import Container from "../../containers/container";
import "./Category.css";
import datas from "../../data/data";
import { Redirect, useParams } from "react-router-dom";

function Category() {
  const { category } = useParams();

  const filteredData = datas.filter((i) => i.category === category);
  const data = filteredData.length > 0 ? filteredData[0].data : [];

  return (
    <Container>
      {data.length === 0 && <Redirect to="/page404" />}
      <div className="category container">
        {data.map((i, index) => (
          <div
            className="col-12 d-flex shadow my-3 category-content"
            key={index}
          >
            <img className="products" src={i.img} alt="pics" />
            <div className="category_right-side">
              <div className="d-flex category-title">
                <p className="category-title__title">{i.title}</p>
                <p className="fright">{i.price}</p>
              </div>
              <span className="location">{i.location}</span>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default Category;
