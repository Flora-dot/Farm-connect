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
      <div>
        <SearchBar />
      </div>
      <div>
        <div className='menu'>
          <MenuIcon className='menu-icon' onClick={toggleMenu} fill='black' />
          {<HeaderNavigation className={showMenu ? 'mobile' : ''} />}
        </div>
      </div>
    </header>
  );
};

const HeaderNavigation = (props) => {
  return (
    <ul className={props.className}>
      <li>
        <a href='#/Premium'>farm connect</a>
      </li>
      <li>
        <a href='#/Support'>latest offers</a>
      </li>
      <li>
        <a href='#/Download'>crops</a>
      </li>
      <li>
        <a href='/life stock'>life stock</a>
      </li>
      <li className='active'>
        <a href='#/Sign up'>fruit and veggies</a>
      </li>
      <li className='active'>
        <a href='#/Login'>contact us</a>
      </li>
      <li className='active'>
        <a href='#/Login'>about us</a>
      </li>
      <AccountOptions />
    </ul>
  );
};
