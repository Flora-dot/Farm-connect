import { Footer } from '../../components/Footer';
import Header from '../../components/Header/Header';
import { CardDetails } from '../../components/Payment/CardDetails';
import { PaymentInfo } from '../../components/Payment/PaymentInfo';
import style from '../../components/Payment/style.module.css';

export const PaymentPage = () => {
    return(
        <>
        <Header />
        <section className={style.payment}>
            <PaymentInfo />
            <CardDetails />
        </section>
        <Footer />
        </>
    )
}