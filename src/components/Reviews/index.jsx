import Ahmed from '../../assets/images/ahmed.png';
import Ife from '../../assets/images/ife.png';
import style from './style.module.css';
export const Reviews = () => {
  return (
    <section>
      <p className={style.header}>Reviews</p>
      <div className={style.reviews}>
        <div className={style.flex}>
          <div className={style['image-div']}>
            <img src={Ahmed} />
          </div>

          <div className={style['text-div']}>
            <p>
              I really love the platform. Its so reliable and the customer
              service is top notch. I would recommend any day any time
              <br />
              <br />
              <br />
              <p className={style.title}>Ahmed Kosoko</p>
            </p>
          </div>
        </div>

        <div className={style.flex}>
          <div className={style['image-div']}>
            <img src={Ahmed} />
          </div>

          <div className={style['text-div']}>
            <p>
              I really love the platform. Its so reliable and the customer
              service is top notch. I would recommend any day any time
              <br />
              <br />
              <br />
              <p className={style.title}>Ahmed Kosoko</p>
            </p>
          </div>
        </div>

        <div className={style.flex}>
          <div className={style['image-div']}>
            <img src={Ahmed} />
          </div>

          <div className={style['text-div']}>
            <p>
              I really love the platform. Its so reliable and the customer
              service is top notch. I would recommend any day any time
              <br />
              <br />
              <br />
              <p className={style.title}>Ahmed Kosoko</p>
            </p>
          </div>
        </div>
        <div className={style.flex}>
          <div className={style['image-div']}>
            <img src={Ife} />
          </div>

          <div className={style['text-div']}>
            <p>
              I really love the platform. Its so reliable and the customer
              service is top notch. I would recommend any day any time
              <br />
              <br />
              <br />
              <p>Ifeoluwa Mary</p>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
