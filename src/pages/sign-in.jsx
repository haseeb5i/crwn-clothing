import { useState } from "react";
import FormInput from "../components/form-input";
import CustomButton from "../components/custom-button";
// import { auth, signInWithGoogle } from "../firebase/firebase.util";
import { useAuth } from "../utils/use-auth";
import "./sign-in.scss";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // try {
    //   await auth.signInWithEmailAndPassword(email, password)
    // }
    // catch (error) {
    //   console.error(error);
    // }
    auth.signin(email, password);
    setEmail("");
    setPassword("");
  };

  const handleChange = (e) => {
    if (e.target.name === "email") setEmail(e.target.value);
    if (e.target.name === "password") setPassword(e.target.value);
  };

  return (
    <div className="sign-in">
      <h2 className="title">I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form action="#" onSubmit={handleSubmit} className="sign-in-form">
        <FormInput
          handleChange={handleChange}
          label="Email"
          type="email"
          name="email"
          value={email}
          required
        />
        <FormInput
          handleChange={handleChange}
          label="Password"
          type="password"
          name="password"
          value={password}
          required
        />
        <div className="buttons">
          <CustomButton type="submit">sign in</CustomButton>
          {/* <CustomButton onClick={signInWithGoogle} isGoogleBtn>
            Sign in with Google
          </CustomButton> */}
        </div>
      </form>
    </div>
  );
};

export default SignIn;
