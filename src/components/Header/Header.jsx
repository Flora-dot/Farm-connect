import { Logo } from "../Logo/Logo";
import { Link } from "react-router-dom";
import { HeaderMenu } from "./HeaderMenu";
import FilterIcon from "../../assets/icons/filter-icon.svg";
import ArrowDownIcon from "../../assets/icons/arrow-down-icon.svg";
import ShoppingBagIcon from "../../assets/icons/shopping-bag-icon.svg";
import TruckIcon from "../../assets/icons/truck-icon.svg";
import SearchIcon from "../../assets/icons/search-icon.svg";
import { useState } from "react";
import style from "./Header.module.css";
import { ReactComponent as MenuIcon } from "../../assets/icons/menu-icon.svg";

export default function Header() {

      // change menu state
      const [showMenu, setMenu] = useState(false);

      // toggle menu
      const toggleMenu = () => {
        setMenu(!showMenu);
        console.log("Menu toggled:", !showMenu);
      };

  return (
    <header className={style.header}>
      <div className={style.logo}>
        <Logo />
        <Link to="/" className={style["logo-text"]}>
          FARM CONNECT
        </Link>
      </div>
      <div className={style['header-navigation']}>
        <div className={style['header-details']}>
          <div className={style['search-wrapper']}>
            <div className={style['search']}>
              <img src={SearchIcon} alt="" />
              <input type="search" id="search" placeholder="What are you looking for?" />
            </div>
            <div className={style.filter}>
              <img src={FilterIcon} alt="" />
            </div>
          </div>
          <div className={style.account}>
            <div className={style["dropdown-container"]}>
              <button className={style["dropdown-btn"]}>
                Account
                <img src={ArrowDownIcon} alt="" />
              </button>
                <ul className={style["dropdown-menu"]}>
                <li><Link className={style["dropdown-item"]} to="/SignUp">Create Account</Link></li>
                <li><Link className={style["dropdown-item"]} to='/Login'>Login</Link></li>
                <li><Link className={style["dropdown-item"]} to='/Userprofile'>Profile</Link></li>
                </ul>
            </div>
            <img src={TruckIcon} alt="" />
            <img src={ShoppingBagIcon} alt="" />
            <MenuIcon className={style["menu-icon"]} onClick={toggleMenu} />
          </div>
        </div>       
        <div className={style.menu}>
        <HeaderMenu className={showMenu ? 'mobile' : ''} />
        </div>
      </div>
    </header>
  );
}
