import style from './style.module.css'

export const FarmConnectInfo = () => {
    return(
        <section className={style['info-wrapper']}>
            <div className={style['wrapper-content']}>
                <div className={style.info}>
                    <h5>150+</h5>
                    <p>Verified Agents</p>
                </div>
                <div className={style.info}>
                    <h5>6K+</h5>
                    <p>Reviews</p>
                </div>
                <div className={style.info}>
                    <h5>5yrs</h5>
                    <p>Since Launch</p>
                </div>
                <div className={style.info}>
                    <h5>40+</h5>
                    <p>Partners</p>
                </div>
                <div className={style.info}>
                    <h5>30+</h5>
                    <p>Categories</p>
                </div>
                <div className={style.info}>
                    <h5>100%</h5>
                    <p>Reliable & Safe</p>
                </div>
            </div>
        </section>
    )
}