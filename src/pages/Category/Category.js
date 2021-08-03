import React from "react";
import Container from "../../containers/container";
import "./Category.css";
import datas from "../../data/data";
import { useParams } from "react-router-dom";

function Category() {
  const { category } = useParams();
  const data = datas.filter((i) => i.category === category)[0].data;

  return (
    <Container>
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
