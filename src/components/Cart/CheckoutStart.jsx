import { Delivery } from './Delivery';
import { OrderSummary } from './OrderSummary';
import style from './style.module.css';

export const CheckoutStart = () => {
    return(
        <section className={style['delivery-wrapper']}>
            <Delivery />
            <OrderSummary />
        </section>
    )
}