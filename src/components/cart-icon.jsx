import "./cart-icon.scss";
import shoppingIcon from "../assets/shopping-bag.svg";
import { toggleCartHidden } from "../redux/cart/cart.actions";
import { connect } from "react-redux";
import { selectCartItemsCount } from "../redux/cart/cart.selectors";

const CartIcon = ({ itemCount, toggleCartHidden }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <img
        src={shoppingIcon}
        className="shopping-icon"
        alt="A shopping bag icon for cart"
      />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});



const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
