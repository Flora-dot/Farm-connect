import FarmLogoWhite from '../../assets/images/farm-logo-white.png';
import FarmLogoBlack from '../../assets/images/farm-logo.png';
import style from './style.module.css';

export function Logo(props) {
  const farmConnectImage = props.useWhite ? FarmLogoWhite : FarmLogoBlack;
  return (
    <a href='#/dashboard' className={style.logo}>
      <img src={FarmLogoWhite} />
    </a>
  );
}
