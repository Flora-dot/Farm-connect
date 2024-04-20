import CustomButton from '../CustomButton';
import Ife from '../../assets/images/ife.png';
import FarmersImage from '../../assets/images/basket-veggie.png';
import style from './style.module.css'

export const BecomeAgent = () => {
  return (
    <section className={style['agent-wrapper']}>
      <div className={style['agent-text']}>
        <h1>Want to become an Agent?</h1>
        <p>
          Join our agency team and get the chance to meet <br /> the right audience for
          your products
        </p>
        <CustomButton children={'Get started'} />
      </div>
      <div className={style['agent-testimonial']}>
        <div className={style['agent-review']}>
            <div className={style.review}>
                <img src={Ife} alt="" />
                <p>Business goals met.Thank You</p>
            </div>
            <div className={style.review}>
                <img src={Ife} alt="" />
                <p>The best decision ever made</p>
            </div>
        </div>
        <img src={FarmersImage} alt="" className={style.farmers} />
      </div>
    </section>
  );
};
