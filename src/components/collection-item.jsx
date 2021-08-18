import "./collection-item.scss";
import CustomButton from "./custom-button";
import { addToCart } from "../redux/cart/cart.actions";
import { connect } from "react-redux";

const CollectionItem = ({ item, addToCart }) => {
    const {imageUrl, name, price} = item
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <div className="name">{name}</div>
        <div className="price">{price}</div>
      </div>
      <CustomButton onClick={() => addToCart(item)} inverted>
        Add to cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addToCart: (item) => dispatch(addToCart(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
