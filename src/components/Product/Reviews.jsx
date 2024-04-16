import styles from './styles.module.css'
import Star from '../../assets/images/star.svg'

export const Reviews = () => {
    return(
        <div className={styles.review}>
            <div>
                <p><span>Anna Beth</span> <img src={Star} alt="Star" /> <small>(201) Reviews</small></p>
                <p>Such a good breed. My family really enjoyed cooking with it</p>
            </div>
            <div><p>3 days ago</p></div>
        </div>
    )
      
}