import FarmConnectLogo from "../../assets/icons/farm-connect-logo.svg";
import style from './Logo.module.css';

export function Logo(props) {
    return(
    <a href="/">
        <img src={FarmConnectLogo} alt="farm connect logo" className={style.logo} />
    </a>
    );
}