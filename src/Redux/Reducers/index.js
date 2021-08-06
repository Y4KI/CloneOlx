import Premium from "../../data/PremiumCategory";

const initialState = {
  search: "",
  premium: Premium,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_INPUT":
      return { ...state, ...action.payload };

    case "LIKE_IT":
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

export default reducer;
