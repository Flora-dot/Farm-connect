import style from './style.module.css';

export const Delivery = () => {
    return(
        <section className={style.delivery}>
             <div className={style.title}>
               <h1>Delivery Details</h1>
               </div>
               <div className={style.details}>
                <div>
                    <input type="radio" name='delivery-option' />
                    <label htmlFor="delivery-option">Delivery</label>
                </div>
                <div>
                    <input type="radio" name='pickup-option' />
                    <label htmlFor="pickup-option">Pick up</label>
                </div>
               </div>
        </section>
    )
}