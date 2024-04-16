import styles from './styles.module.css'
import ImgContact from '../../assets/images/contactimg.png'


export const ContactUs = () => {
    return(
       <div className={styles.container}>
            {/* <img src={ImgContact}/> */}
            <div className={styles.contactImg}>
                <div className={styles.divider}>
                    <h3>Contact Us</h3>
                    <p>We have answers to some of your questions</p>
                    <button>View Our FAQs</button>
                </div>
            </div>
            <div className={styles.wrapper}>
                <p className={styles.emailHeader}><span>Email enquiries</span> <br />Need help with your order? Drop us an email and our lovely Customer Care team will be happy to help.</p>
                <div className={styles.emailinfo}>
                    <div>
                        <h4>Customer enquiries</h4>
                        <p>chatme@farmconnect.com</p>
                    </div>
                    <div>
                        <h4>Collaborations</h4>
                        <p>collab@farmconnect.com</p>
                    </div>
                    <div>
                        <h4>Telephone</h4>
                        <p>+2347575905755</p>
                    </div>
                    
                </div>

                <div className={styles.inputFeild}>
                    <p><span>Alternatively, fill out our contact form </span><br />We aim to respond to all customer enquiries within 48 hours, Monday to Friday.</p>
                    <form action="">
                        <div className={styles.userImputfield}>
                            <div>
                                <label htmlFor="name">Enter your name</label> <br />
                                <input type="text" placeholder='Enter your full name' /> <br />
                                <label htmlFor="email">Enter your email</label> <br />
                                <input type="email" placeholder='Enter your email' />
                            </div>
                            <div>
                                <label htmlFor="number">Enter your Phone number</label> <br />
                                <input type="number" placeholder='Enter your Phone number' /> <br />
                                <label htmlFor="category"> Choose a category </label> <br />
                                <input type="category" placeholder='Choose a category' list='category' />
                                <datalist id='category'>Choose a category
                                    <option value='Category'>Choose a category</option>
                                    <option value='Cereals'>Cereals</option>
                                    <option value='Cereals'>Cereals</option>
                                </datalist>
                                
                            </div>
                        </div>
                        <label htmlFor="message" className={styles.labelTxt}>Write a message</label> <br />
                        <textarea name="message" id="" cols="133" rows="10">Write us a message</textarea> <br />
                        <button className={styles.Btn}>Send  Message</button>
                    
                    </form>
                    
                </div>
            
            </div>
            <div className={styles.foot}>
                <div className={styles.newsLetter}>
                    <div>
                        <h4>SUBSCRIBE TO OUR NEWSLETTER</h4>
                        <input type="text" />
                        <button>Subscribe</button>
                    </div>
                    <div className={styles.footerComp}> The footer component here</div>
                </div>
                <div className={styles.copyWrite}>
                    <div>
                        <h6>© 2024 — Copyright</h6>
                        <ul>
                            <li>
                                <a href="#">TERMS AND CONDITIONS</a>
                            </li>
                            <li>
                                <a href="#">PRIVACY POLICY</a>
                            </li>
                            
                        </ul>


                    </div>
                </div>
            </div>
        </div>
    )
}