import { rating } from './data';
import style from './style.module.css';
export const Ratings = () => {
  return (
    <section className={style.container}>
      <div className={style.list}>
        {rating.map((ratings) => (
          <div className={style.item}>
            <h1 className={style.rate}>{ratings.rate}</h1>
            <p className={style.title}>{ratings.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
