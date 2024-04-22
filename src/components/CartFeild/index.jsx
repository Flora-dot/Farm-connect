import CartImage from '../../assets/images/cart-image.svg'
import styles from './styles.module.css'


export const EmptyCartPage = () => {
    return(
        <div className={styles.frame}>
            <h4>Opps! Your cart is empty,kindly add an item.</h4>
            <div className={styles.cartWrapper}>
                <img className={styles.cartImage} src={CartImage} alt="Cart Image" />
            </div>
            <div className={styles.shopBtn}>
                <button> Continue shopping </button>
            </div>
        </div>
    )
}