import './LandingHeader.css';
import React from 'react';
import { ReactComponent as MenuIcon } from '../../assets/icons/menu.svg';
import { SearchBar } from './SearchBar';
import { AccountOptions } from './AccountOptions';

export const LandingHeader = () => {
  const [showMenu, setMenu] = React.useState(false);

  const toggleMenu = () => {
    if (showMenu === false) {
      setMenu(true);
    } else {
      setMenu(false);
    }
  };

  return (
    <header className='header'>
      <div className='logo'>
        <SearchBar />
      </div>
      <MenuIcon className='menu-icon' onClick={toggleMenu} fill='white' />
      <div className='menu'>
        <HeaderNavigation className={showMenu ? 'mobile' : ''} />
      </div>
    </header>
  );
};

const HeaderNavigation = (props) => {
  return (
    <ul className={props.className}>
      <li>
        <a className='bold' href='/farm connect'>
          farm connect
        </a>
      </li>
      <li>
        <a href='/latest offers'>latest offers</a>
      </li>
      <li>
        <a href='/crops'>crops</a>
      </li>
      <li>
        <a href='/life stock'>life stock</a>
      </li>
      <li className='active'>
        <a href='/fruit and veggies'>fruit and veggies</a>
      </li>
      <li className='active'>
        <a href='/contact us'>contact us</a>
      </li>
      <li className='active'>
        <a href='/about us'>about us</a>
      </li>
      <li>
        <a className='act' href='/account'>
          <AccountOptions />
        </a>
      </li>
    </ul>
  );
};
