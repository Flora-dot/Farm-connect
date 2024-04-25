import style from './style.module.css';
import { Products } from './data';
import FiveStarIcons from "../../assets/icons/five-star-icon.svg";
import { Link } from "react-router-dom";

export const LatestOffer = () => {
    return(
        <section className={style.offers}>
        <h6>Latest Offers</h6>
        <div className={style['products-display']}>
        {Products.map((product) => (
                <div className={style["product-card"]}>
                <div className={style.details}>
                <Link to='/ProductDetail'>
                  <img
                    src={product.image}
                    alt=""
                    className={style["product-image"]}
                    loading="lazy"
                  />
                  </Link>
                   <div className={style["card-details"]}>
                <h1>{product.title}</h1>
                <h2>{product.description}</h2>
                <p> &#8358;{product.price}</p>
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
    )
}