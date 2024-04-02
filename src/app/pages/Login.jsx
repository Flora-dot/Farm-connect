import { toast } from "react-toastify";
import FacebookIcon from "../../assets/icons/facebook-logo2.svg";
import GoogleIcon from "../../assets/icons/google-icon.svg";
import CustomButton from "../../components/CustomButton";
import style from "../pages/Login.module.css";
import { ConnectAudience } from "../../components/ConnectAudience/ConnectAudience";
import { Logo } from "../../components/Logo";

export function Login() {
  return (
    <section className={style['login-section']}>
      <div className={style["login-details"]}>
        <Logo />
        <h2>Welcome back Zainab</h2>
        <div className={style['option-login-btn']}>
        <CustomButton className={style["facebook-btn"]}>
          <img src={FacebookIcon} alt="" /> Facebook
        </CustomButton>
        <CustomButton className={style["google-btn"]}>
          <img src={GoogleIcon} alt="" /> Google
        </CustomButton>
        </div>
          <p className={style.or}>Or</p>
        <form action="">
          <label htmlFor="email">Email</label>
          <input
            // onChange={handleEmail}
            type="email"
            id="email"
            name="email"
            placeholder="Email address or username"
            required
          />

          <label htmlFor="password">Password</label>
          <input
            // onChange={handlePassword}
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            required
          />
          <CustomButton
            //   onClick={loginUser}
            type="submit"
            className={style["login-btn"]}
            children={"Login"}
            //   disabled={isSubmitting}
          />
          <a href="/forgot" className={style["forgot-password"]}>
            Forgot your password?
          </a>
        </form>
        <p className={style['sign-up-cta']}>Don't have an account?  <span>Sign Up</span></p>
      </div>
     <div className={style['login-image']}>
     <ConnectAudience className={style['connect-audience']} />
     </div>
    </section>
  );
}
