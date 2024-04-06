import SearchIcon from '../../assets/icons/search-icon.png';
import Filter from '../../assets/icons/filter.png';
import TrucktimeIcon from '../../assets/icons/truck-time-icon.png';
import BagIcon from '../../assets/icons/bag-timer-icon.png';

import { Logo } from '../Logo/Logo';
import { CustomButton } from '../Button';
import { AccountOptions } from './AccountOptions';
import './LandingHeader.css';
export const SearchBar = () => {
  return (
    <section className='search'>
      <div className='input-container'>
        <Logo />
        <div className='input-field'>
          <input
            className='search-input'
            placeholder='What are you looking for'
          />
          <img src={SearchIcon} />
        </div>
        <CustomButton className='filter' onClick={() => {}}>
          <img className='filter-icon' src={Filter} />
        </CustomButton>
      </div>
      <div className='account-container'>
        <AccountOptions />
        <img className='truck-time' src={TrucktimeIcon} />
        <div className='bag-timer-container'>
          <img src={BagIcon} />
          <div className='bag-timer-count'>3</div>
        </div>
      </div>
    </section>
  );
};
