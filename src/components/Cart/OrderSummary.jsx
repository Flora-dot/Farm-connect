import { useContext } from 'react';
import CustomButton from '../CustomButton';
import { ItemSummryCard } from './ItemSummaryCard';
import style from './style.module.css';
import { ShopContext } from '../../Context/ShopContext';

export const OrderSummary = () => {

    const { cartItems, products, total, subtotal,deliveryFee } = useContext(ShopContext);

    // Filter out the products that are in the cart
    const cartProducts = products.filter(product => cartItems[product.id] > 0);

    return(
        <section className={style.order}>
            <div className={style.title}>
               <h1>Order Summary</h1>
               </div>
               {cartProducts.map(product => (
                <ItemSummryCard 
                    key={product.id}
                    product={product}
                />
            ))}
               <div className={style.total}>
                <p>Subtotal</p>
                <p>{subtotal}</p>
               </div>
               <div className={style.total}>
                <p>Delivery</p>
                <p>{deliveryFee}</p>
               </div>
               <div className={style.total}>
                <h6>Total</h6>
                <h6>{total}</h6>
               </div>
               <CustomButton>Checkout</CustomButton>
        </section>
    )
}