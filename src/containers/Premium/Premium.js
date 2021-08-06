import React from "react";
import PremiumWrapper from "./PremiumWrapper";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { likeIt } from "../../Redux/Actions";

function Premium() {
  const state = useSelector((state) => state);
  const premium = state.premium;
  const dispatch = useDispatch();

  const likeit = (index) => {
    premium[index].like = !premium[index].like;
    let newPremium = { ...state, ...premium };
    dispatch(likeIt(newPremium));
  };

  return (
    <PremiumWrapper>
      <div className="premium container">
        <h1 className="text-center py-5">Премиум объявления</h1>
        <div className="premium-content row">
          {premium.map((i, index) => (
            <div key={index} className="premium-content__box w-100">
              <div className="premium-content__img d-flex justify-content-center">
                <img src={i.img} alt="premium-content" />
              </div>
              <h4 className="my-2">{i.title}</h4>
              <p>{i.location}</p>
              <div className="d-flex justify-content-between">
                <span className="premium-content__price">
                  {i.price === "" ? "договорная" : i.price}
                </span>
                <span className="text-danger" onClick={() => likeit(index)}>
                  {i.like ? <AiFillHeart /> : <AiOutlineHeart />}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PremiumWrapper>
  );
}

export default Premium;
