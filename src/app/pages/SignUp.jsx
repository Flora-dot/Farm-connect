import { toast } from "react-toastify";
import FacebookIcon from "../../assets/icons/facebook-logo2.svg";
import GoogleIcon from "../../assets/icons/google-icon.svg";
import CustomButton from "../../components/CustomButton";
import style from "../pages/css/Login.module.css";
import { ConnectAudience } from "../../components/ConnectAudience/ConnectAudience";
import { Logo } from "../../components/Logo";
import { auth, provider } from "../../firebase/firebaseConfig";
import React from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";

export function SignUp() {
  // Managae manual sign up
  const [userCredentials, setUserCredentials] = React.useState();
  const [error, setError] = React.useState();
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  console.log(auth);

  const handleCredentials = (e) => {
    setUserCredentials({ ...userCredentials, [e.target.name]: e.target.value });
    console.log(userCredentials);
  };

  const handleSignUp = (e) => {
    setIsSubmitting(true);
    e.preventDefault();

    // compare password and confirm password
    if (userCredentials.password === userCredentials.confirmpassword) {
      toast("Passwords don't match");
      return setError("Passwords don't match");
    }
    createUserWithEmailAndPassword(
      auth,
      userCredentials.email,
      userCredentials.password
    )
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
        toast("Account created successfully");
        setTimeout(() => {
            window.location.href="/"
        }, 1000)
      })
      .catch((error) => {
        setError(error.message);
        toast(error.message);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section className={style["login-section"]}>
      <div className={style["login-details"]}>
        <Logo />
        <h2>Create an Account</h2>
        <div className={style["option-login-btn"]}>
          <CustomButton className={style["facebook-btn"]}>
            <img src={FacebookIcon} alt="" /> Facebook
          </CustomButton>
          <CustomButton className={style["google-btn"]}>
            <img src={GoogleIcon} alt="" />
            Sign up with Google
          </CustomButton>
        </div>
        <p className={style.or}>Or</p>
        <form action="">
          <label htmlFor="fullname">Enter your name</label>
          <input
            onChange={handleCredentials}
            type="text"
            id="fullname"
            name="fullname"
            placeholder="Email your full name"
            required
          />
          <label htmlFor="email">Email</label>
          <input
            onChange={handleCredentials}
            type="email"
            id="email"
            name="email"
            placeholder="Email address or username"
            required
          />

          <label htmlFor="password">Password</label>
          <input
            onChange={handleCredentials}
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            required
          />
          <label htmlFor="category">Confirm Password</label>
          <input
            onChange={handleCredentials}
            type="password"
            id="confirm-password"
            name="confirmpassword"
            placeholder="Confirm Password"
            required
          />
          <CustomButton
            onClick={handleSignUp}
            type="submit"
            className={style["signup-btn"]}
            children={"Create Account"}
            disabled={isSubmitting}
          />
        </form>
        <p className={style["sign-up-cta"]}>
          Already have an account? <span><Link to="/login">Login</Link></span>
        </p>
      </div>
      <div className={style["login-image"]}>
        <ConnectAudience
          className={style["connect-audience"]}
          id="connect-audience-signup"
        ></ConnectAudience>
      </div>
    </section>
  );
}
