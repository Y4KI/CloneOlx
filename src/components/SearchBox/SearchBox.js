import React from "react";
import { BsSearch } from "react-icons/bs";
import "./SearchBox.css";

function SearchBox() {
  return (
    <div className="SearchBox-wrapper">
      <div className="SearchBox container py-5">
        <form className="row">
          <input
            type="text"
            placeholder="Поиск..."
            className="col-6 col-md-7 py-3"
          />
          <div className="col-6 col-md-5 row">
            <input
              type="text"
              placeholder="Весь Узбекистан"
              className="col-12"
            />
            <button className="col-6 col-md-4">
              Найти <BsSearch />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SearchBox;
