import { NavLink } from "react-router-dom";

import style from "./Header.module.css";

export const HeaderMenu = () => {
  return (
    <ul className={style["header-menu"]}>
      <li>
        <NavLink
          className={style["header-menu-content"]}
          activeClassName={style["header-menu-content.active"]}
          exact
          to="/LatestOffers"
        >
          Latest Offers
        </NavLink>
      </li>
      <li>
        <NavLink
          className={style["header-menu-content"]}
          activeClassName={style["header-menu-content.active"]}
          exact
          to="/productcategory"
        >
          Crops
        </NavLink>
      </li>
      <li>
        <NavLink
          className={style["header-menu-content"]}
          activeClassName={style["header-menu-content.active"]}
          exact
          to="/productcategory"
        >
          Livestock
        </NavLink>
      </li>
      <li>
        <NavLink
          className={style["header-menu-content"]}
          activeClassName={style["header-menu-content.active"]}
          exact
          to="/productcategory"
        >
          Fruits and Veggies
        </NavLink>
      </li>
      <li>
        <NavLink
          className={style["header-menu-content"]}
          activeClassName={style["header-menu-content.active"]}
          exact
          to="/ContactUs"
        >
          Contact us
        </NavLink>
      </li>
      <li>
        <NavLink
          className={style["header-menu-content"]}
          activeClassName={style["header-menu-content.active"]}
          exact
          to="/AboutUs"
        >
          About us
        </NavLink>
      </li>
    </ul>
  );
};
