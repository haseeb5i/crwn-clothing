import SHOT_DATA from "./shop.data";

const INITIAL_STATE = {
  collections: SHOT_DATA,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;
