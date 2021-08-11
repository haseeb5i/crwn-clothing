import "./App.css";
import HomePage from "./pages/homepage";
import { Route } from "react-router-dom";
import ShopPage from "./pages/shop";
import Header from "./components/header";
// import SignInAndSignUpPage from "./pages/sign-in-and-sign-up";
import SignIn from "./pages/sign-in";
import SignUp from "./pages/sign-up";
import { auth, createUser } from "./firebase/firebase.util";
import React from "react";
// import React, { useEffect, useRef, useState } from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await createUser(user);
        // why subscribing to to snapshot?
        userRef.onSnapshot((snapshot) => {
          this.setState({
            currentUser: { id: snapshot.id, ...snapshot.data() },
          });
        });
      } else {
        this.setState({ currentUser: null });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Route path="/" component={HomePage} exact />
        <Route path="/shop" component={ShopPage} exact />
        <Route
          path="/signin"
          component={(props) => (
            <SignIn {...props} currentUser={this.state.currentUser} />
          )}
          exact
        />
        <Route path="/signup" component={SignUp} exact />
      </div>
    );
  }
}

export default App;
