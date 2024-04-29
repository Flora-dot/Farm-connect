import style from './style.module.css';
import { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';

export const ItemSummryCard = ({product}) => {
    const {cartItems} = useContext(ShopContext);

    return(
        <div className={style['summary-item']}>
            <img src={product.image} alt="" />
            <h4>{product.name}</h4>
            <span>{cartItems[product.id]}</span>
            <p>N{product.price}</p>
        </div>
    )
}