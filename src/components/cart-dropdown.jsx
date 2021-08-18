import CustomButton from "./custom-button";
import "./cart-dropdown.scss";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      <CustomButton>Go to checkout</CustomButton>
    </div>
  );
};

export default CartDropdown;
