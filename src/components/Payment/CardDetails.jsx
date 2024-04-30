import style from "./style.module.css";
import MasterCardIcon from "../../assets/icons/mastercard-icon.svg";
import VisaCardIcon from "../../assets/icons/visacard-icon.svg";
import CustomButton from "../CustomButton";

export const CardDetails = () => {
  return (
    <section className={style["card-details"]}>
      <div className={style.title}>
        <h1>Card Details</h1>
      </div>
      <div className={style["payment-cards"]}>
        <img src={MasterCardIcon} alt="" />
        <img src={VisaCardIcon} alt="" />
      </div>
      <form action="">
        <label htmlFor="fullname">Enter card name</label>
        <input
          type="text"
          id="cardname"
          name="cardname"
          placeholder="Enter card name"
          required
        />
        <label htmlFor="email">Enter card number</label>
        <input
          type="text"
          id="cardnumber"
          name="cardnumber"
          placeholder="Enter card number"
          required
        />
        <div className={style.number}>
          <div>
            <label htmlFor="fullname">Expiry Date</label>
            <input
              type="text"
              id="carddate"
              name="carddate"
              placeholder="DD/MM/YYYY"
              required
            />
          </div>
          <div>
            <label htmlFor="fullname">CVV</label>
            <input
              type="text"
              id="cvv"
              name="cvv"
              placeholder="Enter cvv"
              required
            />
          </div>
        </div>
        <div className={style.save}>
          <input type="radio" name="delivery-option" />
          <label htmlFor="delivery-option">Save card details ?</label>
        </div>
        <CustomButton children={'Make Payment'} />
      </form>
    </section>
  );
};
