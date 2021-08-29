import React, { useState, useEffect, useContext, createContext } from "react";
import firebase from "firebase/app";
import "firebase/auth";
// Add your Firebase credentials
const firebaseConfig = {
  apiKey: "AIzaSyAovH-D_0G3a7MkKWZuUy-nTBqo5Kwx1a8",
  authDomain: "crwn-db-cf288.firebaseapp.com",
  projectId: "crwn-db-cf288",
  storageBucket: "crwn-db-cf288.appspot.com",
  messagingSenderId: "447416358777",
  appId: "1:447416358777:web:8c90d083454c03013301a8",
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}
const authContext = createContext();
// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}
// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
  return useContext(authContext);
};
// Provider hook that creates auth object and handles state
function useProvideAuth() {
  const [user, setUser] = useState(null);
  // Wrap any Firebase methods we want to use making sure ...
  // ... to save the user to state.
  const signin = async (email, password) => {
    const response = await firebase
          .auth()
          .signInWithEmailAndPassword(email, password);
      setUser(response.user);
      return response.user;
  };
  const signup = async (email, password) => {
    const response = await firebase
          .auth()
          .createUserWithEmailAndPassword(email, password);
      setUser(response.user);
      return response.user;
  };
  const signout = async () => {
    await firebase
          .auth()
          .signOut();
      setUser(false);
  };
  const sendPasswordResetEmail = async (email) => {
    await firebase
          .auth()
          .sendPasswordResetEmail(email);
      return true;
  };
  const confirmPasswordReset = async (code, password) => {
    await firebase
          .auth()
          .confirmPasswordReset(code, password);
      return true;
  };
  // Subscribe to user on mount
  // Because this sets state in the callback it will cause any ...
  // ... component that utilizes this hook to re-render with the ...
  // ... latest auth object.
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(false);
      }
    });
    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);
  // Return the user object and auth methods
  return {
    user,
    signin,
    signup,
    signout,
    sendPasswordResetEmail,
    confirmPasswordReset,
  };
}