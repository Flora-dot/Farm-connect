import { NavLink } from "react-router-dom";

import style from "./Header.module.css";

export const HeaderMenu = (props) => {
  return (
    <ul className={props.className}>
      <li>
        <NavLink
          className={style["header-menu-content"]}
          activeclassname={style["header-menu-content.active"]}
          exact
          to="/LatestOffers"
        >
          Latest Offers
        </NavLink>
      </li>
      <li>
        <NavLink
          className={style["header-menu-content"]}
          activeclassname={style["header-menu-content.active"]}
          exact
          to="/ProductCategory/Crops"
        >
          Crops
        </NavLink>
      </li>
      <li>
        <NavLink
          className={style["header-menu-content"]}
          activeclassname={style["header-menu-content.active"]}
          exact
          to="/ProductCategory/Livestock"
        >
          Livestock
        </NavLink>
      </li>
      <li>
        <NavLink
          className={style["header-menu-content"]}
          activeclassname={style["header-menu-content.active"]}
          exact
          to="/ProductCategory/FruitsandVeggies"
        >
          Fruits and Veggies
        </NavLink>
      </li>
      <li>
        <NavLink
          className={style["header-menu-content"]}
          activeclassname={style["header-menu-content.active"]}
          exact
          to="/ContactUs"
        >
          Contact us
        </NavLink>
      </li>
      <li>
        <NavLink
          className={style["header-menu-content"]}
          activeclassname={style["header-menu-content.active"]}
          exact
          to="/AboutUs"
        >
          About us
        </NavLink>
      </li>
    </ul>
  );
};
