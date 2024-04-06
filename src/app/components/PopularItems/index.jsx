import { popularItems } from './data';
import styles from './style.module.css';

export const PopularItems = () => {
  return (
    <div className={styles['latest-offer']}>
      <h3 className={styles.header}>Popular Items</h3>
      <section className={styles.products}>
        <div className={styles.list}>
          {popularItems.map((item) => (
            <div className={styles.item}>
              <img src={item.image} />
              <div className={styles['product-details']}>
                <h5 className={styles.title}>{item.title}</h5>
                <p className={styles.description}>{item.description}</p>
                <p className={styles.price}>{item.price}</p>
                <span className={styles.stars}>{item.stars}</span>
                <span className={styles.reviews}>{item.reviews}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
