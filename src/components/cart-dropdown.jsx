import CustomButton from "./custom-button";
import { selectCartItems } from "../redux/cart/cart.selectors";
import "./cart-dropdown.scss";
import { connect } from "react-redux";
import CartItem from "./cart-item";

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {Object.keys(cartItems).map((cartItemKey) => (
          <CartItem
            key={cartItems[cartItemKey].id}
            item={cartItems[cartItemKey]}
          />
        ))}
      </div>
      <CustomButton>Go to checkout</CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropdown);
