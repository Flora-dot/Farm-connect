import {
  CommunitiesMenu,
  AboutMenu,
  UsefulLinkMenu,
  SocialMedia,
  LegalUrls,
  Socialmedia,
} from './data';
import { CustomButton } from '../Button';
import style from './style.module.css';

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style['background-image']}>
        <div className={style.NewsLetter}>
          <NewsLetter />
        </div>
      </div>

      <div className={style.copyMenu}>
        <div className={style.menu}>
          <div className={style.flex}>
            <div className={style.menuItems}>
              <div className={style.flex}>
                <Menu title='Catalogs' options={AboutMenu} />
                <Menu title='' options={CommunitiesMenu} />
                <Menu title='' options={UsefulLinkMenu} />

                <Menu
                  className={style.telegram}
                  title=''
                  options={SocialMedia}
                />
                <Menu
                  className={style.telegram}
                  title=''
                  options={Socialmedia}
                />
              </div>
            </div>
          </div>

          <div className={style['legal-urls']}>
            {LegalUrls.map(({ url, name }) => (
              <a href={url}>{name}</a>
            ))}
          </div>
        </div>
        <div className={style.copyright}>
          <div className={style.social}>
            {/* <Menu title='' options={LegalUrls} /> */}
          </div>
        </div>
      </div>

      <PrivacyPolicy />
    </footer>
  );
};

export const Menu = ({ title, options, className }) => {
  return (
    <nav className={className}>
      <h5>{title || <>&nbsp;</>} </h5>
      <ul>
        {options &&
          options.map((option) => {
            return (
              <li>
                <a href={option.url}>{option.name}</a>

                {option.image && (
                  <a>
                    <img src={option.image} alt={option.name} />
                  </a>
                )}
              </li>
            );
          })}
      </ul>
    </nav>
  );
};

export const NewsLetter = () => {
  return (
    <div className={style.subscribe}>
      <h1> SUBSCRIBE TO OUR NEWSLETTER</h1>
      <CustomButton className={style.subBtn}></CustomButton>
      <CustomButton className='mini' onClick={() => {}}>
        Subscribe
      </CustomButton>
    </div>
  );
};

export const PrivacyPolicy = () => {
  return (
    <div className={style.policy}>
      <p>© 2024 — Copyright</p>
      <p>TERMS AND CONDITIONS</p>
      <p>PRIVACY POLICY</p>
      <p>SITEMAP</p>
    </div>
  );
};
