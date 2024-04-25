import { NavLink } from "react-router-dom";
import { useState } from "react";
import style from "./Header.module.css";

export const HeaderMenu = (props) => {
  const [activeMenu, setActiveMenu] = useState("");

  return (
    <ul className={props.className}>
      <li
        onClick={() => {
          setActiveMenu("Latest offers");
        }}
      >
        <NavLink className={style["header-menu-content"]} to="/LatestOffers">
          Latest Offers
        </NavLink>
        {activeMenu === 'Latest offers' ? <hr /> :<></> }
      </li>
      <li
        onClick={() => {
          setActiveMenu("crops");
        }}
      >
        <NavLink
          className={style["header-menu-content"]}
          to="/ProductCategory/Crops"
        >
          Crops
        </NavLink>
        {activeMenu==='crops'?<hr />:<></> }
      </li>
      <li
        onClick={() => {
          setActiveMenu("livestock");
        }}
      >
        <NavLink
          className={style["header-menu-content"]}
          to="/ProductCategory/Livestock"
        >
          Livestock
        </NavLink>
        {activeMenu === 'livestock' ? <hr /> :<></> }
      </li>
      <li
        onClick={() => {
          setActiveMenu("fruits and veggies");
        }}
      >
        <NavLink
          className={style["header-menu-content"]}
          to="/ProductCategory/FruitsandVeggies"
        >
          Fruits and Veggies
        </NavLink>
        {activeMenu === 'fruits and veggies' ? <hr /> :<></> }
      </li>
      <li
        onClick={() => {
          setActiveMenu("contact");
        }}
      >
        <NavLink className={style["header-menu-content"]} to="/ContactUs">
          Contact us
        </NavLink>
        {activeMenu === 'contact' ? <hr /> :<></> }
      </li>
      <li
        onClick={() => {
          setActiveMenu("about");
        }}
      >
        <NavLink className={style["header-menu-content"]} to="/AboutUs">
          About us
        </NavLink>
        {activeMenu === 'about' ? <hr /> :<></> }
      </li>
    </ul>
  );
};
