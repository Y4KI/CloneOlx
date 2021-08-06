const initialState = {
  search: "hello",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_INPUT":
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

export default reducer;
