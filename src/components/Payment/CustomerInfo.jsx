import style from "./style.module.css";

export const CustomerInformation = () => {
  return (
    <div className={style["customer-info"]}>
      <div className={style.title}>
        <h1>Customer Information</h1>
      </div>
      <form action="">
        <label htmlFor="fullname">Enter your name</label>
        <input
          type="text"
          id="fullname"
          name="fullname"
          placeholder="Enter your full name"
          required
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter email address"
          required
        />
        <label htmlFor="fullname">Phone Number</label>
        <input
          type="number"
          id="phonenumber"
          name="phonenumber"
          placeholder="Enter your Phone Number"
          required
        />
        <label htmlFor="email">Enter your address</label>
        <input
          type="text"
          id="address"
          name="address"
          placeholder="Enter your full address"
          required
        />
      </form>
    </div>
  );
};
