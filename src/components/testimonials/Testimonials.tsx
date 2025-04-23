import styles from "./testimonials.module.scss";
interface TestimonialsProps {
  lng: string;
}
export default async function Testimonials({ lng }: TestimonialsProps) {
  // Fetching testimonials data from JSON
  const testimonialsData = await import(
    "../../app/i18n/locales/" + lng + "/translation.json"
  );

  return (
    <>
      <div className={styles.testimonials}>
        {testimonialsData.testimonials.tesimonials.map(
          (testimonial: any, index: number) => (
            <div key={index} className={styles.testimonial}>
              <p>
                <b>{testimonial.name}</b>
              </p>
              <p className={styles.b}>
                {testimonial.work}
              </p>
              <p className={styles.testimonialContent}>"{testimonial.comment}"</p>
            </div>
          )
        )}
      </div>
    </>
  );
}
