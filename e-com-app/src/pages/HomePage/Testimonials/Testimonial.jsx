import styles from "./Testimonials.module.scss";
import { ReactComponent as Star } from "./star.svg";

export const Testimonial = ({ name, text, slideNumber, starsNumber }) => {
    const stars = Array.from(new Array(starsNumber));

    return (
        <div
            className={styles.content}
            style={{ transform: `translateX(-${slideNumber * 100}%)` }}
        >
            <div className={styles.quotation}></div>
            <div className={styles.text}>{text}</div>
            <div className={styles.starsblock}>
                <div className={styles.stars}>
                    {stars.map((star, ind) => (
                        <Star key={ind} />
                    ))}
                </div>
                <span className={styles.name}>{name}</span>
            </div>
        </div>
    );
};
