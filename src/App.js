import "./App.css";
import HomePage from "./pages/homepage";
import { Redirect, Route } from "react-router-dom";
import ShopPage from "./pages/shop";
import Header from "./components/header";
import SignIn from "./pages/sign-in";
import SignUp from "./pages/sign-up";
import CheckoutPage from "./pages/checkout";
// import { auth, createUser } from "./firebase/firebase.util";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selector";
import { useAuth } from "./utils/use-auth";
import React, { useEffect } from "react";

const App = ({ setCurrentUser }) => {
  const auth = useAuth();

  useEffect(() => {
    setCurrentUser(auth.user);
  }, [setCurrentUser, auth]);

  return (
    <div className="App">
      <Header />
      <Route path="/" component={HomePage} exact />
      <Route path="/shop" component={ShopPage} />
      <Route path="/checkout" component={CheckoutPage} exact />
      <Route
        path="/signin"
        render={() => (auth.user ? <Redirect to="/" /> : <SignIn />)}
        exact
      />
      <Route path="/signup" component={SignUp} exact />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  };
};

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
