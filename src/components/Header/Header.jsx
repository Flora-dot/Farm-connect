import { Logo } from "../Logo/Logo";
import { Link } from "react-router-dom";
import { HeaderMenu } from "./HeaderMenu";
import FilterIcon from "../../assets/icons/filter-icon.svg";
import ArrowDownIcon from "../../assets/icons/arrow-down-icon.svg";
import ShoppingBagIcon from "../../assets/icons/shopping-bag-icon.svg";
import TruckIcon from "../../assets/icons/truck-icon.svg";
import SearchIcon from "../../assets/icons/search-icon.svg";
import { useState, useEffect } from "react";
import style from "./Header.module.css";
import { ReactComponent as MenuIcon } from "../../assets/icons/menu-icon.svg";
import { auth } from "../../firebase/firebaseConfig";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const user = localStorage.getItem("user");

  useEffect(() => {
    const checkSignIn = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in
        setIsLoggedIn(true);
      } else {
        // User is signed out
        setIsLoggedIn(false);
      }
    });

    return () => {
      checkSignIn();
    };
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  };

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className={style.header}>
      <div className={style.logo}>
        <Logo />
        <Link to="/" className={style["logo-text"]}>
          FARM CONNECT
        </Link>
      </div>
      <div className={style["header-navigation"]}>
        <div className={style["header-details"]}>
          <div className={style["search-wrapper"]}>
            <div className={style["search"]}>
              <img src={SearchIcon} alt="" />
              <input
                type="search"
                id="search"
                placeholder="What are you looking for?"
              />
            </div>
            <div className={style.filter}>
              <img src={FilterIcon} alt="" />
            </div>
          </div>
          <div className={style.account}>
            {isLoggedIn ? (
              <div className={style["dropdown-container"]}>
                <button
                  className={style["dropdown-btn"]}
                  onClick={toggleDropDown}
                >
                  {` Welcome ${user.email}`}
                  <img src={ArrowDownIcon} alt="" />
                </button>
                {isOpen && (
                  <ul className={style["dropdown-menu"]}>
                    <li>
                      <Link
                        className={style["dropdown-item"]}
                        to="/Userprofile"
                      >
                        Profile
                      </Link>
                    </li>
                    <li>
                      <Link className={style["dropdown-item"]} to="/SignUp">
                        My orders
                      </Link>
                    </li>
                    <li>
                      <Link className={style["dropdown-item"]} to="/SignUp">
                        Log out
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
            ) : (
              <div className={style["dropdown-container"]}>
                <button
                  className={style["dropdown-btn"]}
                  onClick={toggleDropDown}
                >
                  Account
                  <img src={ArrowDownIcon} alt="" />
                </button>
                {isOpen && (
                  <ul className={style["dropdown-menu"]}>
                    <li>
                      <Link className={style["dropdown-item"]} to="/SignUp">
                        Create Account
                      </Link>
                    </li>
                    <li>
                      <Link className={style["dropdown-item"]} to="/Login">
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={style["dropdown-item"]}
                        to="/Userprofile"
                      >
                        Profile
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
            )}
            <img src={TruckIcon} alt="" />
            <img src={ShoppingBagIcon} alt="" />
            <MenuIcon
              className={style["menu-icon"]}
              onClick={() => {
                setOpenMenu(!openMenu);
              }}
            />
          </div>
        </div>
        <div className={style.menu}>
          <HeaderMenu className={openMenu ? style.mobile : style['header-menu']} />
        </div>
      </div>
    </header>
  );
}