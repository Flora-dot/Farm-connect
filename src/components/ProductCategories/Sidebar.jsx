import { useState } from "react";
import style from "./style.module.css";

const Subcategories = {
  "Crops": ["Tubers", "Grains and cereals"],
  "Fruits and Veggies": ["Fruits", "Veggies"],
  "Livestock": ["Meat", "Fish", "Poultry"],
};

export function SideBar(props) {
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  // const handlesSubcategorySelect = (category) => {
  //   setShowSubcategoryProducts(Subcategories[props.category])
  //   showSubcategoryproducts(products.subcategory)
  // }

  const handleSubcategorySelect = (subcategory) => {
    setSelectedSubcategory(subcategory);
    props.onSubcategorySelect(subcategory);
    console.log(subcategory);
  };

  return (
    <div className={style.sidebar}>
      <h6>{props.category}</h6>
      <div>
        <ul>
          {Subcategories[props.category].map((subcategory) => (
            <li
              key={subcategory}
              onClick={() => handleSubcategorySelect(subcategory)}
            >
              {subcategory}
            </li>
          ))}
        </ul>
      </div>

      {/* Price Filter Section */}
      <h6>Price Filter</h6>
      <div className={style["price-filter-wrapper"]}>
        <input
          type="radio"
          name="price-range"
          id="price-range-one"
          value="1000-5000"
          // checked={selectedPriceRange === "1000-5000"}
          // onChange={handlePriceRangeChange}
        />
        <label htmlFor="price-range-one">1000 - 5000</label>
      </div>
      <div className={style["price-filter-wrapper"]}>
        <input
          type="radio"
          name="price-range"
          id="price-range-two"
          value="6000-15000"
          // checked={selectedPriceRange === "6000-15000"}
          // onChange={handlePriceRangeChange}
        />
        <label htmlFor="price-range-two">6000 - 15000</label>
      </div>
      <div className={style["price-filter-wrapper"]}>
        <input
          type="radio"
          name="price-range"
          id="price-range-three"
          value="16000-25000"
          // checked={selectedPriceRange === "16000-25000"}
          // onChange={handlePriceRangeChange}
        />
        <label htmlFor="price-range-three">16000 - 25000</label>
      </div>
      <div className={style["price-filter-wrapper"]}>
        <input
          type="radio"
          name="price-range"
          id="price-range-four"
          value="26000-40000"
          // checked={selectedPriceRange === "26000-40000"}
          // onChange={handlePriceRangeChange}
        />
        <label htmlFor="price-range-four">26000 - 40000</label>
      </div>
      <div className={style["price-filter-wrapper"]}>
        <input
          type="radio"
          name="price-range"
          id="price-range-five"
          value="41000-60000"
          // checked={selectedPriceRange === "41000-60000"}
          // onChange={handlePriceRangeChange}
        />
        <label htmlFor="price-range-five">41000 - 60000</label>
      </div>
    </div>
  );
}

// const handlePriceRangeChange = (event) => {
//   setSelectedPriceRange(event.target.value); // Update state on radio button change
// };
