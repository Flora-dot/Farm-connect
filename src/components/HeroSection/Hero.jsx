import style from "./Hero.module.css";
import DropLightIcon from '../../assets/icons/droplight-icon.svg';
import PlantIcon from '../../assets/icons/plant-icon.svg';
import CustomButton from "../CustomButton";
import SpiceImage from '../../assets/images/spice.jpg';
import FarmConnectEclipse from '../../assets/icons/eclipse.png';
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section className={style.hero}>
      <div className={style['hero-text']}>
        <h1>
          Food just got <br />
          <span>Better&Easier</span>
        </h1>
        <p>
          At farm connect we ensure high quality and organically <br /> raised and
          grown food item for healthy consumption
        </p>
        <div>
            <img src={DropLightIcon} alt="" />
            <h5>Reliable</h5>
        </div>
        <div>
            <img src={PlantIcon} alt="" />
            <h5>Sustainable</h5>
        </div>
        <Link to='/AboutUs'><CustomButton children={'Read More'} className={style['read-more-btn']}/></Link>
      </div>
      <div className={style['hero-image']}>
        <img src={FarmConnectEclipse} alt="" className={style.eclipse}/>
        <img src={SpiceImage} alt=""className={style.spice} />
      </div>
    </section>
  );
};
