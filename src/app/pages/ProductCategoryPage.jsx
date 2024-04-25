import { Footer } from "../../components/Footer";
import Header from "../../components/Header/Header";
import { ProductCategory } from "../../components/ProductCategories";
import { useState } from "react";

export function ProductCategoryPage(props) {
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const handleSubcategorySelect = (subcategory) => {
    setSelectedSubcategory(subcategory);
  };
  const { category } = props;
  return (
    <>
      <Header />
      <ProductCategory
        category={category}
        selectedSubcategory={selectedSubcategory}
        onSubcategorySelect={handleSubcategorySelect}
      />
      <Footer />
    </>
  );
}
