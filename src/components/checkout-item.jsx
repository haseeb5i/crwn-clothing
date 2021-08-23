import { connect } from "react-redux";
import { addToCart, clearItemFromCart, removeFromCart } from "../redux/cart/cart.actions";
import "./checkout-item.scss";

const CheckoutItem = ({ cartItem, dispatch }) => {
  const {name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <span className="arrow" onClick={() => dispatch(removeFromCart(cartItem))}>&#10094;</span>
        <span className="value">{quantity}</span>
        <span className="arrow" onClick={() => dispatch(addToCart(cartItem))} >&#10095;</span>
      </span>
      <span className="price">{price}</span>
      <div
        className="remove-button"
        onClick={() => dispatch(clearItemFromCart(cartItem))}
      >
        &#10005;
      </div>
    </div>
  );
};



export default connect()(CheckoutItem);
