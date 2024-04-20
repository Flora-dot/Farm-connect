import { FarmerReviews } from "./FarmerReviews";
import FiveStarIcons from "../../assets/icons/five-star-icon.svg";
import style from "./style.module.css";
import PlantainImage from "../../assets/images/plantain-image.png";
import VegetableOilImage from "../../assets/images/vegetable-oil.png";
import CatfishImage from "../../assets/images/catfish-image.png";
import RightArrowIcon from '../../assets/icons/arrow-icon.svg';

export const FarmerReviewsAndProducts = () => {
  return (
    <div className={style["reviews-more-products"]}>
      <FarmerReviews />
      <div className={style["more-products"]}>
        <div className={style.shop}>
        <h4>Shop Items from Andy</h4>
        <img src={RightArrowIcon} alt="" />
        </div>
        <div className={style["more-products-listing"]}>
          {farmerProducts.map((product) => (
            <div className={style["product-card"]}>
              <div className={style.details}>
                <img
                  src={product.image}
                  alt=""
                  className={style["product-image"]}
                />
                <h1>{product.title}</h1>
                <h2>{product.description}</h2>
                <p>{product.price}</p>
                <div className={style['star-reviews']}>
                  <img src={FiveStarIcons} alt="" />
                  <span>(201) Reviews</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const farmerProducts = [
  {
    image: PlantainImage,
    title: "Jumbo Size Unripe Plantain",
    description: "Healthy and organic",
    price: "N5000",
  },
  {
    image: CatfishImage,
    title: "Jumbo Size Unripe Plantain",
    description: "Healthy and organic",
    price: "N5000",
  },
  {
    image: VegetableOilImage,
    title: "Kings Vegetable Oil",
    description: "Healthy and organic",
    price: "N7000",
  },
  {
    image: PlantainImage,
    title: "Jumbo Size Unripe Plantain",
    description: "Healthy and organic",
    price: "N5000",
  },
  {
    image: CatfishImage,
    title: "Jumbo Size Unripe Plantain",
    description: "Healthy and organic",
    price: "N5000",
  },
  {
    image: VegetableOilImage,
    title: "Kings Vegetable Oil",
    description: "Healthy and organic",
    price: "N7000",
  },
  {
    image: PlantainImage,
    title: "Jumbo Size Unripe Plantain",
    description: "Healthy and organic",
    price: "N5000",
  },
  {
    image: CatfishImage,
    title: "Jumbo Size Unripe Plantain",
    description: "Healthy and organic",
    price: "N5000",
  },
  {
    image: VegetableOilImage,
    title: "Kings Vegetable Oil",
    description: "Healthy and organic",
    price: "N7000",
  },
];
