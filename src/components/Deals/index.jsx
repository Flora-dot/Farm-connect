import style from './style.module.css';
import {Products} from './data';
import FiveStarIcons from "../../assets/icons/five-star-icon.svg";
import RightArrowIcon from '../../assets/icons/arrow-icon.svg';
import { Link } from 'react-router-dom';

export const Deals = () => {
    return(
        <section className={style.deals}>
        <div className={style.shop}>
        <h6>Deals of the Day</h6>
        <Link to='/DealsPage'><img src={RightArrowIcon} alt="" /></Link>
        </div>
        <div  className={style['products-display']}>
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