import style from '../../components/AboutUs/style.module.css';
import { services } from './services';

export const OurServices = () => {
    return(
        <section className={style['our-services']}>
            <h1>Our services</h1>
            <div className={style['service-card-container']}>
                {services.map((service) => (
                    <div className={style['service-card']}>
                        <div className={style['text']}>
                            <h5>{service.title}</h5>
                            <p>{service.description}</p>
                        </div>
                        <div className={style['gradient-cont']}>
                            <img src={service.image} alt="" />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}