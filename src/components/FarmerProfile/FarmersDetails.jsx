import style from "./style.module.css";
import FarmerDisplayImage from "../../assets/images/farmer-display-image.png";
import FiveStarIcons from "../../assets/icons/five-star-icon.svg";
import LocationIcon from "../../assets/icons/location-icon.svg";
import VerifiedIcon from "../../assets/icons/user-check-icon.svg";

export const FarmersDetails = () => {
  return (
    <div className={style["farmers-details"]}>
      <div  className={style['dp-holder']}>
      <img src={FarmerDisplayImage} alt="" className={style.dp} />
      </div>
      <div className={style["details-container"]}>
        <h3>Andy Williams</h3>
        <p className={style["joined-date"]}>Joined 16th March 2022</p>
        <div className={style["location-container"]}>
          <div>
            <img src={FiveStarIcons} alt="" />
            <span>(21) Reviews</span>
          </div>
          <div>
            <img src={LocationIcon} alt="" />
            <p>Lagos, Nigeria</p>
          </div>
        </div>
        <div className={style.verified}>
          <img src={VerifiedIcon} alt="" />
          <p>Verified</p>
        </div>
        <div className={style.about}>
        <h4>About</h4>
        <p>
          Andy Williams is not just a farm agent; he's a dedicated advocate for
          sustainable agriculture and rural communities. With over a decade of
          experience in farming and agricultural consultancy, Andy brings a
          wealth of knowledge to our platform. Growing up on a family farm, he
          developed a deep appreciation for the land and its potential
        </p>
      </div>
      </div>
    </div>
  );
};
