import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

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
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const createUser = async (userAuth, options) => {
  // maybe an unneccessary check
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const user = await userRef.get();
  if (!user.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({displayName, email, createdAt, ...options});
    } catch (error) {
      console.error("error creating user", error.message);
    }
  }
  return userRef;
};


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
