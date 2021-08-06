const changeInput = (obj) => {
  return {
    type: "CHANGE_INPUT",
    payload: obj,
  };
};
const likeIt = (obj) => {
  return {
    type: "LIKE_IT",
    payload: obj,
  };
};
export { changeInput, likeIt };
