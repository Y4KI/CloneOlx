import React from "react";
import AddsWrapper from "./AddsWrapper";

function Adds() {
  return (
    <AddsWrapper>
      <>
        <div className="Add">
          <div className="container">
            <div className="add-content row d-flex justify-content-around align-items-center">
              <img
                src="https://static.olx.uz/static/olxuz/packed/font/2fbd23c39bff0aee6c0c84aaf60e66347d.svg"
                alt="static"
                className="col-12 col-sm-6 col-md-4 Add-icon"
              />
              <h1 className="col-12 col-sm-6 col-md-4 text-center my-3 mb-5 mb-sm-0">
                Начните бизнес в интернете с OLX!
              </h1>
              <button className="col-12 col-sm-6 col-md-4 Add-btn mb-5 mb-md-0">
                Подробнее
              </button>
            </div>
          </div>
        </div>
        <div className="infoadd d-flex justify-content-center">
          <div className="infoadd-content row text-center container justify-content-center d-flex">
            <div className="infoadd-content-centered py-5 col-lg-7 col-md-9 col-11">
              <img
                src="https://static.olx.uz/static/olxuz/packed/font/2f245edf8d709c906bd6c4b03d1623d647.svg"
                alt="Logo"
              />
              <p>
                Cервис объявлений № 1 в Узбекистане Частные объявления
                Узбекистана на OLX (бывший torg.uz) - здесь вы найдете то, что
                искали. Нажав на кнопку "Подать объявление", вы сможете
                разместить онлайн-объявление на любую необходимую тематику -
                поиск работы, услуги, продажа автомобилей, недвижимости,
                электроники и многое другое. С помощью сервиса OLX в Узбекистане
                вы можете найти, продать или купить практически все, что угодно.
                Воспользовавшись функцией поиска, вы без труда найдете уже
                опубликованные объявления интересующей вас тематики. OLX в
                Узбекистане - ваш надежный и незаменимый помощник.
              </p>
            </div>
          </div>
        </div>
        <div className="addblank">
          <div className="addblank-content container">
            <img
              src="https://static.olx.uz/static/olxuz/packed/font/2fc1ef4e9c6a6dc640b6feb727836fabc7.svg"
              alt="Blank"
            />
            <p>
              <span>Разделы на сервисе OLX: </span> Детский мир, Недвижимость,
              Транспорт, Работа, Животные, Дом и сад, Электроника, Бизнес и
              услуги, Мода и стиль, Хобби, отдых и спорт, Отдам даром, Обмен
            </p>
          </div>
        </div>
      </>
    </AddsWrapper>
  );
}

export default Adds;
