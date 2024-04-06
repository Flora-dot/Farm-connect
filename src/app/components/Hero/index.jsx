import { Items } from './data';
import { CustomButton } from '../Button';
import React from 'react';
import AdvertLogo from '../../assets/images/eclipse.png';
import Recipes from '../../assets/images/Recipe.svg';
import style from './style.module.css';
export const Hero = () => {
  return (
    <div className={style.hero}>
      <div className={style['hero-container']}>
        <section className={style.description}>
          <div className={style.text}>
            <h1>
              FOOD JUST GOT <br />
              <span>BETTER&EASIER</span>
            </h1>

            <p>
              At farm connect we ensure high quality and organically raised and
              grown food item for healthy consumption
            </p>
          </div>
          <div className={style.list}>
            {Items.map((Item) => (
              <div className={style.item}>
                <img src={Item.image} />
                <p className={style['light-text']}>{Item.title}</p>
              </div>
            ))}
          </div>
          <div className={style['custom-btn']}>
            <CustomButton className={style.mainBtn} onClick={() => {}}>
              Read More
            </CustomButton>
          </div>
        </section>
        <section className={style['description-img']}>
          <img className={style.eclipse} src={Recipes} />
        </section>
      </div>
      <img className={style['advert-logo']} src={AdvertLogo} />
    </div>
  );
};
