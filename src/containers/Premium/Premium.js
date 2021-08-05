import React from "react";
import PremiumWrapper from "./PremiumWrapper";
import premium from "../../data/PremiumCategory";

function Premium() {
  return (
    <PremiumWrapper>
      <div className="premium container">
        <h1 className="text-center py-5">Премиум объявления</h1>
        <div className="premium-content row">
          {premium.map((i, index) => (
            <div key={index} className="premium-content__box">
              <div className="premium-content__img w-50">
                <img src={i.img} alt="premium-content" />
              </div>
              <h4 className="my-2">{i.title}</h4>
              <p>{i.location}</p>
              <p className="premium-content__price">{i.price}</p>
            </div>
          ))}
        </div>
      </div>
    </PremiumWrapper>
  );
}

export default Premium;
