import { useState } from "react";
import FormInput from "../components/form-input";
import CustomButton from "../components/custom-button";
import { signInWithGoogle } from "../firebase/firebase.util";
import "./sign-in.scss";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
  };

  const handleChange = (e) => {
    if (e.target.name === "username") setEmail(e.target.value);
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
          name="username"
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
        <CustomButton onClick={signInWithGoogle} isGoogleBtn>Sign in with Google</CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;