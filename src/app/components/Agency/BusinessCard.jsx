import EclipseThree from '../../assets/images/eclipse-three.png';
import style from './style.module.css';
export const BusinessCards = () => {
  return (
    <div className={style['business-card']}>
      <div className={style['card-content']}>
        <img src={EclipseThree} />
        <p>Business goals met.Thank You</p>
      </div>
    </div>
  );
};
