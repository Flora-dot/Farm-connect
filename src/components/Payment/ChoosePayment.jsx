import style from './style.module.css';

export const ChoosePayment = () => {
    return(
        <section className={style['payment-option']}>
             <div className={style.title}>
               <h1>Choose Payment Type</h1>
               </div>
               <div className={style.details}>
                <div>
                    <input type="radio" name='delivery-option' />
                    <label htmlFor="delivery-option">Card</label>
                </div>
                <div>
                    <input type="radio" name='pickup-option' />
                    <label htmlFor="pickup-option">Paypal</label>
                </div>
                <div>
                    <input type="radio" name='pickup-option' />
                    <label htmlFor="pickup-option">Flutterwave</label>
                </div>
                <div>
                    <input type="radio" name='pickup-option' />
                    <label htmlFor="pickup-option">Bank Transfer</label>
                </div>
               </div>
        </section>
    )
}