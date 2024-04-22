import style from '../../../components/LatestOffers/style.module.css';
import {Products} from '../../../components/LatestOffers/data';
import FiveStarIcons from "../../../assets/icons/five-star-icon.svg";
import Header from '../../../components/Header/Header';
import { Footer } from '../../../components/Footer';

export const DealsOfTheDay = () => {
    return(
        <>
        <Header />
        <section className={style.offers}>
        <h6>Deals of the Day</h6>
        <div className={style['products-display']}>
        {Products.map((product) => (
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
        <Footer />
        </>
    )
}