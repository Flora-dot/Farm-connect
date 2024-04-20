import style from "./style.module.css";
import { popularItems } from "./data";
import FiveStarIcons from "../../assets/icons/five-star-icon.svg";
import RightArrowIcon from "../../assets/icons/arrow-icon.svg";

export const PopularItems = () => {
  return (
    <section className={style.deals}>
      <div className={style.shop}>
        <h6>Popular Items</h6>
        <img src={RightArrowIcon} alt="" />
      </div>
      <div className={style["products-display"]}>
        {popularItems.map((product) => (
          <div className={style["product-card"]}>
            <div className={style.details}>
              <img
                src={product.image}
                alt=""
                className={style["product-image"]}
              />
              <div className={style["card-details"]}>
                <h1>{product.title}</h1>
                <h2>{product.description}</h2>
                <p>{product.price}</p>
                <div className={style["star-reviews"]}>
                  <img src={FiveStarIcons} alt="" />
                  <span>(201) Reviews</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
