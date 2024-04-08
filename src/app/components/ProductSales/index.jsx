import { Products } from './data';
import Pharrow from '../../assets/icons/pharrow.svg';
import styles from './style.module.css';

export const ProductSales = () => {
  return (
    <div className={styles['latest-offer']}>
      <h3 className={styles.header}>
        Latest Offers
        <span>
          <img src={Pharrow} />
        </span>
      </h3>

      <section className={styles.products}>
        <div className={styles.list}>
          {Products.map((product) => (
            <div className={styles.item}>
              <img src={product.image} />
              <div className={styles['product-details']}>
                <h5 className={styles.title}>{product.title}</h5>
                <p className={styles.description}>{product.description}</p>
                <p className={styles.price}>{product.price}</p>
                <span className={styles.stars}>{product.stars}</span>
                <span className={styles.reviews}>{product.reviews}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
