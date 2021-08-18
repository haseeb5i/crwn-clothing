const INITIAL_CART_STATE = {
  hidden: true,
  cartItems: {},
};

const cartReducer = (state = INITIAL_CART_STATE, action) => {
  switch (action.type) {
    case "TOGGLE_CART_HIDDEN":
      return {
        ...state,
        hidden: !state.hidden,
      };
    case "ADD_TO_CART":
      const itemId = action.payload.id;
      let tmp;
      if (state.cartItems[itemId] === undefined) {
        tmp = { ...action.payload, quantity: 1 };
      } else {
        tmp = state.cartItems[itemId];
        tmp.quantity += 1;
      }

      return {
        ...state,
        cartItems: { ...state.cartItems, ...{ [itemId]: tmp } },
      };
    default:
      return state;
  }
};

export default cartReducer;
