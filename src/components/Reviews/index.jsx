import { testimonials } from "./data";
import style from "./style.module.css";

export const Reviews = () => {
  return (
    <section className={style["review-wrapper"]}>
      <h2 className={style.header}>Reviews</h2>
      <div className={style['testimonials-wrapper']}>
        {testimonials.map((testimonial) => (
          <div>
          <img src={testimonial.image} alt="" />
          <p>{testimonial.testimonial}</p>
          <h6>{testimonial.reviewer}</h6>
        </div>
        ))}
      </div>
    </section>
  );
};
