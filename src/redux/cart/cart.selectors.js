import { createSelector } from "reselect";

// initial input selector, which will compose larger selectors
const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

// two above selectors are called in turn, so this will require state argument
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    Object.keys(cartItems).reduce(
      (accumulator, currentKey) => accumulator + cartItems[currentKey].quantity,
      0
    )
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  Object.keys(cartItems).reduce(
    (accumulator, currentKey) =>
      accumulator +
      cartItems[currentKey].quantity * cartItems[currentKey].price,
    0
  )
);
