import "./cart-icon.scss";
import shoppingIcon from "../assets/shopping-bag.svg";
import { toggleCartHidden } from "../redux/cart/cart.actions";
import { connect } from "react-redux";

const CartIcon = ({toggleCartHidden}) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <img
        src={shoppingIcon}
        className="shopping-icon"
        alt="A shopping bag icon for cart"
      />
      <span className="item-count">0</span>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})


export default connect(null, mapDispatchToProps)(CartIcon) ;