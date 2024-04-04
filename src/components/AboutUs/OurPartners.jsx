import style from './style.module.css';
import GlovoIcon from '../../assets/icons/glovo-icon.svg';
import IITAIcon from '../../assets/icons/iita-icon.svg';
import DominosIcon from '../../assets/icons/dominos-icon.svg';
import HiltonHotelIcon from '../../assets/icons/hilton-hotel-logo.png';
import SheratonIcon from '../../assets/icons/sheraton-icon.svg';
import BurgerKingIcon from '../../assets/icons/burger-king-icon.svg';
import KFCIcon from '../../assets/icons/kfc-icon.svg';

export function OurPartners () {
    return(
        <section className={style['our-partners']}>
            <h1>Our Partners</h1>
            <div className={style['partner-icons']}>
                <img src={KFCIcon} alt="" />
                <img src={IITAIcon} alt="" />
                <img src={GlovoIcon} alt="" />
                <img src={SheratonIcon} alt="" />
                <img src={BurgerKingIcon} alt="" />
                <img src={DominosIcon} alt="" />
                <img src={HiltonHotelIcon} alt=""  className={style.hilton} />
            </div>
        </section>
    );
}