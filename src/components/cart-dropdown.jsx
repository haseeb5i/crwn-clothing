import CustomButton from "./custom-button";
import { selectCartItems } from "../redux/cart/cart.selectors";
import "./cart-dropdown.scss";
import { connect } from "react-redux";
import CartItem from "./cart-item";
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from "../redux/cart/cart.actions";

const CartDropdown = ({ cartItems, history, dispatch }) => {
  const handleClick = () => {
    history.push("/checkout");
    dispatch(toggleCartHidden())
  }
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {Object.keys(cartItems).length ? (
          Object.keys(cartItems).map((cartItemKey) => (
            <CartItem
              key={cartItems[cartItemKey].id}
              item={cartItems[cartItemKey]}
            />
          ))
        ) : (
          <span className="empty-message">your cart is empty</span>
        )}
      </div>
      <CustomButton onClick={handleClick} >Go to checkout</CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});


export default withRouter(connect(mapStateToProps)(CartDropdown)) ;
