const INITIAL_CART_STATE = {
  hidden: true,
  cartItems: {},
};

const cartReducer = (state = INITIAL_CART_STATE, action) => {
  let itemId, itemCopy;
  switch (action.type) {
    case "TOGGLE_CART_HIDDEN":
      return {
        ...state,
        hidden: !state.hidden,
      };
    case "ADD_TO_CART":
      itemId = action.payload.id;
      if (state.cartItems[itemId] === undefined) {
        itemCopy = { ...action.payload, quantity: 1 };
      } else {
        itemCopy = {...state.cartItems[itemId]};
        itemCopy.quantity += 1;
      }
      return {
        ...state,
        cartItems: { ...state.cartItems, ...{ [itemId]: itemCopy } },
      };
    case "CLEAR_ITEM_FROM_CART":
      itemId = action.payload.id;
      const cartItemsCopy = state.cartItems;
      delete cartItemsCopy[itemId];
      return {
        ...state,
        cartItems: { ...cartItemsCopy },
      };
    case "REMOVE_FROM_CART":
      itemId = action.payload.id;
      // dont do this, it will not change the state, as object is same odl
      // itemCopy = state.cartItems[itemId];
      itemCopy = {...state.cartItems[itemId]};
      if (itemCopy.quantity > 1) 
        itemCopy.quantity -= 1;
      return {
        ...state,
        cartItems: { ...state.cartItems, ...{ [itemId]: itemCopy } },
      };

    default:
      return state;
  }
};

export default cartReducer;
