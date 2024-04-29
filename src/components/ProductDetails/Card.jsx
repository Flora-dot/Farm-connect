import styles from "./styles.module.css";
import Star from "../../assets/images/star.svg";
import { data } from "./data";

export const Card = () => {
  return (
    <div className={styles.cardWrapper}>
      {data.map((item) => {
        return (
          <div className={styles.card}>
            <img src={item.img} alt=" "/>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
            <p>{item.price}</p>
            <span>
              {" "}
              <img className={styles.star} src={Star} alt="Star" />
              <small>{item.review}</small>
            </span>
          </div>
        );
      })}
    </div>
  );
};
