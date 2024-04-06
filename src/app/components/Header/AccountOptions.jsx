import React, { useState } from 'react';
import { CustomButton } from '../Button';
import DropdownIcon from '../../assets/icons/toggle-drop-down.png';

export const AccountOptions = ({ showMenu }) => {
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div className={`account ${showOptions ? 'open' : ''}`}>
      <CustomButton className='account-btn' onClick={() => {}}>
        Account
        <img
          src={DropdownIcon}
          onClick={toggleOptions}
          className={showOptions ? 'rotate' : ''}
        />
      </CustomButton>
      {showOptions && (
        <ul className='options-list'>
          <li>
            <a href='#'>Login</a>
          </li>
          <li>
            <a href='#'>Signup</a>
          </li>
        </ul>
      )}
    </div>
  );
};
