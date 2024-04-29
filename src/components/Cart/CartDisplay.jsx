import { useContext } from "react";
import { CartItem } from "./CartItem";
import style from "./style.module.css";
import { ShopContext } from "../../Context/ShopContext";

export const CartItemsDisplay = () => {
  const { products, cartItems } = useContext(ShopContext);
  const productsInCart = products.filter(product => cartItems[product.id] > 0);
  return (
    <section className={style["cart-display"]}>
      <div className={style.title}>
        <h1>Cart</h1>
      </div>
      {productsInCart.map(product => (
        <CartItem key={product.id} product={product} />
      ))}
    </section>
  );
};
