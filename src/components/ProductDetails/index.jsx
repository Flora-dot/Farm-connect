import Casava1 from '../../assets/images/casava1.svg'
import Casava2 from '../../assets/images/casava2.svg'
import Star from '../../assets/images/star.svg'
import Plus from '../../assets/images/plus.svg'
import Minus from '../../assets/images/minus.svg'
import styles from './styles.module.css'
import { CustomBtn } from './CustomBtn'
import '../../index.css'
import { useState } from 'react'
import { Reviews } from './Reviews'
import { Card } from './Card'
import { Link } from 'react-router-dom'

export const ProductDetail = () => {
    const [count, setCount] = useState(0)
    const handleIncreament = () => {
        setCount( count + 1)
    }
    const handleDecreament = () => {
        setCount( count - 1)
    }
    return (
       <section className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.leftcontent}>
                    <div className={styles.imgContainer}>
                        <img src={Casava1} alt="Casava" />
                        <img src={Casava2} alt="Casava" />
                    </div>

                </div>
                <div className={styles.rightcontent}>
                    <div className={styles.header}>
                        <h6>Organic Grown Cassava</h6>
                        <p className={styles.pragraph}>This is a clean and study cassava root grown organically</p>
                        <p><img src={Star} alt="Star" />  (201) Reviews</p>
                    </div>
                    
                    <div className={styles.btnFeild}>
                        <p>N 3000 <small>Per Bucket</small></p>
                        <div className={styles.btnFeildFlex}>
                            <CustomBtn theme="small" onClick={handleDecreament}><img src={Minus} alt="Minus Sign" /></CustomBtn>
                            <CustomBtn theme="middle">{count}</CustomBtn>
                            <CustomBtn theme="small" onClick={handleIncreament}><img src={Plus} alt="Plus Sign" /></CustomBtn>
                            <CustomBtn theme="big">Add</CustomBtn>
                       </div>
                    </div>
                    <div className={styles.content}>
                        <p><span>Appearance:</span> Our fresh Cassava Tubers are hand-selected to ensure optimal quality and freshness. Each tuber boasts a smooth, firm exterior, with a cylindrical shape and a bark-like brown skin. The creamy white flesh beneath the skin is tender and succulent, promising a delightful culinary experience.</p>
                        <p><span>Nutritional Value:</span>  Cassava is a nutrient-rich tuber, packed with essential vitamins and minerals. It is a significant source of carbohydrates, providing energy to fuel your daily activities.</p>
                        <p><span>Culinary Uses:</span> Culinary Uses: Versatility is one of the defining characteristics of Cassava. From savory to sweet dishes, this tuber can be incorporated into a wide range of recipes. Here are just a few ways to enjoy it:</p>
                        <ol>
                            <li>Boiled Cassava: Simply peel and boil the tubers until tender.</li>
                            <li>Fried Cassava: Cut the tubers into sticks or wedges, then fry until golden brown</li>
                            <li>Cassava Mash: Mash boiled cassava with butter, garlic, and seasoning to create <br /> a creamy and flavorful alternative to mashed potatoes.</li>
                            <li> Cassava Flour: Grate the cassava and dry it to make gluten-free cassava <br /> flour, perfect for baking bread, cakes, and other baked goods.</li>
                        </ol>
                        <p><span>Storage and Handling: </span> To maintain freshness, store the Cassava Tubers in a cool, dry place away from direct sunlight. They can also be stored in the refrigerator for extended freshness. When handling Cassava, ensure proper ventilation as the tubers release a toxic substance called cyanide when not prepared correctly. Always peel and cook Cassava thoroughly before consumption to remove any potential toxins.</p>
                    </div>
                    <div className={styles.reviewFeild}>
                        <CustomBtn theme="bigTwo">View more reviews</CustomBtn>
                        <Reviews/>
                        <Reviews/>
                        <Reviews/>
                        <Link to='/farmerprofile'><CustomBtn  theme="bigo" className={styles.farmer}>View more from Farmer</CustomBtn></Link>
                    </div>
                </div>
            </div>
            <h2 className={styles.footheader}>You May Also Like</h2>
            <div className={styles.cardContainer}>
                <Card/>
            </div>
       </section>

    )
}