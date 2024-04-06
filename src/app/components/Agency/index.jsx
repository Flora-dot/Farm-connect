import style from './style.module.css';
import { CustomButton } from '../Button';
import { BusinessCards } from './BusinessCard';
import BasketVeggies from '../../assets/images/basket-veggie.png';

export const Agency = () => {
  return (
    <section class={style.agency}>
      <div className={style['agency-content']}>
        <div className={style['agency-statement']}>
          <div className={style.title}>
            <div>
              <h3>Want to become an Agent?</h3>
              <p className={style.description}>
                Join our agency team and get the chance to meet the right
                audience for your products
              </p>
            </div>

            <div className={style['custom-btn']}>
              <CustomButton className={style.mainBtn} onClick={() => {}}>
                Get started
              </CustomButton>
            </div>
          </div>
        </div>
        <div className={style['business-content']}>
          <div className={style.card}>
            <BusinessCards />
            <BusinessCards />
          </div>

          <div className={style.veggies}>
            <img src={BasketVeggies} />
          </div>
        </div>
      </div>
    </section>
  );
};
