import CustomButton from '../CustomButton';
import style from './style.module.css';
import MessageIcon from '../../assets/icons/message-icon.svg';
import WhatsappIcon from '../../assets/icons/whatsapp-icon.svg';

export const Footer = () => {
    return(
        <footer>
            <section className={style['footer-image']}>
                <div className={style.subscribe}>
                    <h6>Subscribe to our Newsletter</h6>
                    <input type="email" id='email'/>
                    <CustomButton children={'Subscribe'}/>
                </div>
                <div className={style['footer-navigation']}>
                    <div>
                        <h5>Catalog</h5>
                        <ul>
                            <li>Hot Deals</li>
                            <li>Poultry</li>
                            <li>Top Rated</li>
                            <li>Processed Products</li>
                            <li>Most Popular</li>
                            <li>Crops</li>
                            <li>Fruits</li>
                            <li>Spice and Condiments</li>
                        </ul>
                    </div>
                    <div>
                    <h5>Services</h5>
                        <ul>
                            <li>Technical Support</li>
                            <li>Consulting</li>
                            <li>Delivery</li>
                            <li>Processing</li>
                            <li>Customer</li>
                            <li>Support</li>
                        </ul>
                    </div>
                    <div className={style['contact-wrapper']}>
                        <h5>Contact</h5>
                        <div className={style.contact}>
                           <div>
                           <p>+2340946783450</p>
                            <p>info@farmconnect</p>
                           </div>
                           <div>
                            <button>
                                <img src={MessageIcon} alt="" />
                            </button>
                            <button>
                                <img src={WhatsappIcon} alt="" />
                            </button>
                           </div>
                        </div>
                    </div>
                    <h5 className={style.follow}>Follow us on</h5>
                </div>
            </section>
            <section className={style.black}>
                <p>&copy; 2024 - Copyright</p>
                <h6>Terms and Conditions</h6>
                <h6>Privacy Policy</h6>
                <h6>Sitemap</h6>
            </section>
        </footer>
    )
}