import { toast } from "react-toastify";
import FacebookIcon from "../../assets/icons/facebook-logo2.svg";
import GoogleIcon from "../../assets/icons/google-icon.svg";
import CustomButton from "../../components/CustomButton";
import style from "../pages/css/Login.module.css";
import { ConnectAudience } from "../../components/ConnectAudience/ConnectAudience";
import { Logo } from "../../components/Logo";
import { auth } from "../../firebase/firebaseConfig";
import React from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { GoogleLogin } from "@react-oauth/google";
import { Link } from "react-router-dom";

export function Login() {
  const [userCredentials, setUserCredentials] = React.useState();
  const [error, setError] = React.useState();
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  console.log(auth);

  const handleCredentials = (e) => {
    setUserCredentials({ ...userCredentials, [e.target.name]: e.target.value });
  };

  // Manual sign in with firebase
  const handleLogin = (e) => {
    setIsSubmitting(true);
    e.preventDefault();

    signInWithEmailAndPassword(
      auth,
      userCredentials.email,
      userCredentials.password
    )
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        const username = userCredentials.email;
        toast(`Signed in as ${username}`);
        setTimeout(() => {
          window.location.href = "/";
        }, 1000);
        // localStorage.setItem('user', )
        // ...
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
        <h2>Welcome back Zainab</h2>
        <div className={style["option-login-btn"]}>
          <CustomButton className={style["facebook-btn"]}>
            <img src={FacebookIcon} alt="" /> Facebook
          </CustomButton>

          <GoogleLogin
            onSuccess={(credentialResponse) => {
              console.log(credentialResponse);
              toast(`Signed in with Google `);
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
          <CustomButton
            onClick={handleLogin}
            type="submit"
            className={style["login-btn"]}
            children={"Login"}
            disabled={isSubmitting}
          />
          <a href="/forgot" className={style["forgot-password"]}>
            Forgot your password?
          </a>
        </form>
        <p className={style["sign-up-cta"]}>
          Don't have an account?{" "}
          <span>
            <Link className={style["signup"]} to="/signup">
              Sign Up
            </Link>
          </span>
        </p>
      </div>
      <div className={style["login-image"]}>
        <ConnectAudience className={style["connect-audience"]} />
      </div>
    </section>
  );
}
