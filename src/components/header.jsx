import "./header.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import logo from "../assets/crown.svg";
import CartIcon from "./cart-icon";
import CartDropdown from "./cart-dropdown";
import { selectCartHidden } from "../redux/cart/cart.selectors";
import { selectCurrentUser } from "../redux/user/user.selector";
import { useAuth } from "../utils/use-auth";

const Header = ({ currentUser, hidden }) => {
  const auth = useAuth
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <img src={logo} className="logo" alt="brand logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signout()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        {currentUser ? null : (
          <Link className="option" to="/signup">
            SIGN UP
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

// createStructuredSelector will automatically pass state to all selector
const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden 
});

export default connect(mapStateToProps)(Header);
