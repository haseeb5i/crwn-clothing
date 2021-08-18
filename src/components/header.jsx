import "./header.scss";
import { Link } from "react-router-dom";
import { auth } from "../firebase/firebase.util";
import { connect } from "react-redux";

import logo from "../assets/crown.svg";
import CartIcon from "./cart-icon";
import CartDropdown from "./cart-dropdown";

const Header = ({ currentUser, hidden }) => {
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
          <div className="option" onClick={() => auth.signOut()}>
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

// this will help us to access the state from store/state
const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden,
});

export default connect(mapStateToProps)(Header);
