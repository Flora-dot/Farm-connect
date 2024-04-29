import { CartItemsDisplay } from "../../components/Cart/CartDisplay";
import Header from "../../components/Header/Header";
import { Footer } from "../../components/Footer/index";
import style from "../../components/Cart/style.module.css";
import { CheckoutStart } from "../../components/Cart/CheckoutStart";
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import { EmptyCart } from "../../components/EmptyCart";

export const Cart = () => {
  const { cartItems } = useContext(ShopContext);

  const isCartEmpty =
    Object.values(cartItems).reduce((total, count) => total + count, 0) === 0;

  return (
    <>
      <Header />

      {isCartEmpty ? (
        <EmptyCart />
      ) : (
        <section className={style.cart}>
          <CartItemsDisplay />
          <CheckoutStart />
        </section>
      )}
      <Footer />
    </>
  );
};
