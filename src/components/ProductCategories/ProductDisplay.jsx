import style from "./style.module.css";
import FiveStarIcons from "../../assets/icons/five-star-icon.svg";
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import { Link } from "react-router-dom";

export function ProductDisplay (props) {
  const { products } = useContext(ShopContext);

  return (
    <>
      <div className={style["products-listing"]}>
        {products.map((product) => {
          if (
            props.category === product.category &&
            (!props.subcategory || props.subcategory === product.subcategory)
          ) {
          
            return (
              <div key={product.id} className={style["product-card"]}>
                <div className={style.details}>
                  <Link to={`/ProductDetail/${product.id}`}>
                  <img
                    src={product.image}
                    alt=""
                    className={style["product-image"]}
                    loading="lazy"
                  />
                  </Link>
                  <div className={style["card-details"]}>
                    <h1>{product.name}</h1>
                    <h2>{product.description}</h2>
                    <p>&#8358;{product.price}</p>
                    <div className={style["star-reviews"]}>
                      <img src={FiveStarIcons} alt="" />
                      <span>(201) Reviews</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          } else {
            console.log(
              "Product did not match category or subcategory:",
            );
            return null;
          }
        })}
      </div>
    </>
  );
};
