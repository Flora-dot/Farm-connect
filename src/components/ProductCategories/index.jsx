import style from './style.module.css'
import {SideBar} from './Sidebar';
import {ProductDisplay} from './ProductDisplay';


export const ProductCategory = ({ category,selectedSubcategory,onSubcategorySelect }) => {

    return(
        <section className={style['product-wrapper']}>
            <SideBar category={category} onSubcategorySelect={onSubcategorySelect} />
            <ProductDisplay category={category}  subcategory={selectedSubcategory} />
        </section>
    )
}