import { useState } from "react";
import style from "./style.module.css";

const Subcategories = {
  "Crops": ["Tubers", "Grains and cereals"],
  "Fruits and Veggies": ["Fruits", "Veggies"],
  "Livestock": ["Meat", "Fish", "Poultry"],
};

export function SideBar(props) {
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

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
    </div>
  );
}

// const handlePriceRangeChange = (event) => {
//   setSelectedPriceRange(event.target.value); // Update state on radio button change
// };
