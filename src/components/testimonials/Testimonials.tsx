import styles from "./testimonials.module.scss";

export default async function Testimonials({ lng }) {
  // Fetching testimonials data from JSON
  const testimonialsData = await import(
    "../../app/i18n/locales/" + lng + "/translation.json"
  );

  return (
    <>
      <div className={styles.testimonials}>
        {testimonialsData.testimonials.tesimonials.map((testimonial, index) => (
          <div key={index} className={styles.testimonial}>
            <p>
              <b>{testimonial.name}</b>
            </p>
            <p>{testimonial.comment}</p>
            <p>
              <b>{testimonial.work}</b>
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
