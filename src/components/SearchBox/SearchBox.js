import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { changeInput } from "../../Redux/Actions";
import "./SearchBox.css";

function SearchBox() {
  const Search = useSelector((state) => state);

  const [inp, setinp] = useState("");

  const dispatch = useDispatch();
  const changeInpValue = (e) => {
    setinp(e.target.value);
    let newSearch = { ...Search, search: e.target.value };
    dispatch(changeInput(newSearch));
  };

  return (
    <div className="SearchBox-wrapper">
      <div className="SearchBox container py-5 p-0">
        <form className="row px-4 px-md-0">
          <input
            type="text"
            placeholder="Поиск..."
            className="col-4 col-sm-6"
            value={Search.search}
            onChange={changeInpValue}
          />
          <input
            type="text"
            placeholder="Весь Узбекистан"
            className="col-8 col-sm-6"
          />
          <button className="col-4 col-sm-2">
            Найти <BsSearch />
          </button>
        </form>
      </div>
    </div>
  );
}

export default SearchBox;
