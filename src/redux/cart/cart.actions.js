export const toggleCartHidden = () => ({
  type: "TOGGLE_CART_HIDDEN",
});

export const addToCart = (item) => ({
  type: "ADD_TO_CART",
  payload: item,
});

export const removeFromCart = (item) => ({
  type: "REMOVE_FROM_CART",
  payload: item,
});

export const clearItemFromCart = (item) => ({
  type: "CLEAR_ITEM_FROM_CART",
  payload: item,
});
