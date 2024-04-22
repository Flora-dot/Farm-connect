import { toast } from "react-toastify";
import FacebookIcon from "../../assets/icons/facebook-logo2.svg";
import CustomButton from "../../components/CustomButton";
import style from "../pages/css/Login.module.css";
import { ConnectAudience } from "../../components/ConnectAudience/ConnectAudience";
import { Logo } from "../../components/Logo/Logo";
import { auth} from "../../firebase/firebaseConfig";
import React from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { GoogleLogin } from "@react-oauth/google";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Header from "../../components/Header/Header";
import { Footer } from "../../components/Footer";

export function SignUp() {
  // Managae manual sign up
  const [userCredentials, setUserCredentials] = React.useState();
  const [error, setError] = React.useState();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = React.useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  }

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  }

  console.log(auth);

  const handleCredentials = (e) => {
    setUserCredentials(prevState => {
      const updatedState = { ...prevState, [e.target.name]: e.target.value };
      console.log(updatedState);
      return updatedState;
    });
  };
  

  const handleSignUp = (e) => {
    setIsSubmitting(true);
    e.preventDefault();

    // compare password and confirm password
    if (userCredentials.password !== userCredentials.confirmpassword) {
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
        const { fullname } = userCredentials; // Destructure name from userCredentials
        updateProfile(user, { displayName: fullname });
        console.log(user);
        toast("Account created successfully");
        setTimeout(() => {
          window.location.href = "/";
        }, 1000);
        
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
    <>
    <Header />
    <section className={style["login-section"]}>
      <div className={style["login-details"]}>
        <Logo />
        <h2>Create an Account</h2>
        <div className={style["option-login-btn"]}>
          <CustomButton className={style["facebook-btn"]}>
            <img src={FacebookIcon} alt="" /> Facebook
          </CustomButton>
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              console.log(credentialResponse);
              toast(`Signed up with Google `);
              setTimeout(() => {
                window.location.href = "/";
              }, 1000);
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
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
          <div className={style['password-input-container']}>
          <input
            onChange={handleCredentials}
            type={passwordVisible ? 'text' : 'password'}
            id="password"
            name="password"
            placeholder="Password"
            required
          />
          <button type="button" className={style["toggle-password-button"]} onClick={togglePasswordVisibility}>
        {passwordVisible ? <FaEyeSlash /> : <FaEye />}
      </button>
          </div>
          <label htmlFor="category">Confirm Password</label>
          <div className={style['password-input-container']}>
          <input
            onChange={handleCredentials}
            type={confirmPasswordVisible ? 'text' : 'password'}
            id="confirm-password"
            name="confirmpassword"
            placeholder="Confirm Password"
            required
          />
          <button type="button" className={style["toggle-password-button"]} onClick={toggleConfirmPasswordVisibility}>
        {confirmPasswordVisible ? <FaEyeSlash /> : <FaEye />}
      </button>
          </div>
          <CustomButton
            onClick={handleSignUp}
            type="submit"
            className={style["signup-btn"]}
            children={"Create Account"}
            disabled={isSubmitting}
          />
        </form>
        <p className={style["sign-up-cta"]}>
          Already have an account?{" "}
          <span>
            <Link className={style['signup']} to="/login">Login</Link>
          </span>
        </p>
      </div>
      <div className={style["login-image"]}>
        <ConnectAudience
          className={style["connect-audience"]}
          id="connect-audience-signup"
        ></ConnectAudience>
      </div>
    </section>
    <Footer />
    </>
  );
}
