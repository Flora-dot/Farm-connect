import style from "./style.module.css";
import DeleteIcon from "../../assets/icons/delete-icon.svg";
import CustomButton from "../CustomButton";
import { useContext } from "react";
import AddIcon from "../../assets/icons/add-icon.svg";
import MinusIcon from "../../assets/icons/minus-icon.svg";
import { ShopContext } from "../../Context/ShopContext";

export const CartItem = ({ product }) => {
  const { removeFromCart, setCartItems, addToCart, cartItems } =
    useContext(ShopContext);
  const quantity = cartItems[product.id];

  const handleIncrement = () => {
    addToCart(product.id);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      const updatedCartItems = { ...cartItems };
      updatedCartItems[product.id] = quantity - 1;
      setCartItems(updatedCartItems);
    }
  };

  return (
    <div className={style["cart-item"]}>
      <div className={style["image-holder"]}>
        <img src={product.image} alt="" className={style["product-image"]} />
      </div>
      <div className={style.details}>
        <div className={style.info}>
          <h3>{product.name}</h3>
          <p>N{product.price}</p>
          <img
            src={DeleteIcon}
            alt="Remove"
            onClick={() => removeFromCart(product.id)}
          />
        </div>
        <div className={style.counter}>
          <CustomButton onClick={handleDecrement}>
            <img src={MinusIcon} alt="Decrement" />
          </CustomButton>
          <div>{quantity}</div>
          <CustomButton onClick={handleIncrement}>
            <img src={AddIcon} alt="Increment" />
          </CustomButton>
        </div>
      </div>
    </div>
  );
};
