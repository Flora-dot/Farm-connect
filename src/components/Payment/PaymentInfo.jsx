import { ChoosePayment } from './ChoosePayment';
import {CustomerInformation} from './CustomerInfo';
import style from './style.module.css';

export const PaymentInfo = () => {
    return(
        <section className={style['payment-info']}>
            <CustomerInformation />
            <ChoosePayment />
        </section>
    )
}