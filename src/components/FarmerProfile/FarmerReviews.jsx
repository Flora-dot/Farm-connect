import ReviewImage from "../../assets/images/review-image.png";
import style from './style.module.css';

export const FarmerReviews = () => {
  return (
    <div className={style.reviews}>
      <h4>Reviews</h4>
      {reviews.map((review) => (
        <div className={style['review-details']}>
          <img src={review.image} alt="" />
          <div className={style['review-text']}>
            <h2>{review.customername}</h2>
            <p>
              {review.review}
            </p>
            <span>2 weeks ago</span>
          </div>
        </div>
      ))}
    </div>
  );
};



const reviews = [
  {
    image: ReviewImage,
    customername: "Zainab Aladeyelu",
    review:
      "I was able to shop for different varieties of livestock that i was unable to get at the local store.",
  },
  {
    image: ReviewImage,
    customername: "Ifunanya Azuka",
    review:
      "I was able to shop for different varieties of livestock that i was unable to get at the local store.",
  },
  {
    image: ReviewImage,
    customername: "Gift Onuoha",
    review:
      "I was able to shop for different varieties of livestock that i was unable to get at the local store.",
  },
  {
    image: ReviewImage,
    customername: "Abimbola Oni",
    review:
      "I was able to shop for different varieties of livestock that i was unable to get at the local store.",
  },
];
