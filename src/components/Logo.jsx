import FarmConnectLogo from "../assets/icons/farm-connect-logo.svg";
// import style from './Logo.style.module.css';

export function Logo(props) {
    return(
    <a href="/">
        <img src={FarmConnectLogo} alt="farm connect logo" />
    </a>
    );
}