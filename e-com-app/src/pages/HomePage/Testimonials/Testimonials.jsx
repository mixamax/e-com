import styles from "./Testimonials.module.scss";
import { Testimonial } from "./Testimonial";
import { ReactComponent as ArrowL } from "./arrowL.svg";
import { ReactComponent as ArrowR } from "./arrowR.svg";
import { useState } from "react";

const testimonialsDATA = [
    {
        name: "Emma Chamberlin",
        text: `Per aspera ad astra! Через тернии - к звездам. Fortes fortuna juiat. Фортуна помогает смелым.`,
        starsNumber: 4,
        id: 1,
    },
    {
        name: "Eva Rose",
        text: "Scio me nihil scire. Я знаю, что я ничего не знаю.",
        starsNumber: 5,
        id: 2,
    },
];
export const Testimonials = () => {
    const [slideNumber, setSlideNumber] = useState(0);

    const changeSlide = (shift) => {
        let slide = 0;
        if (slideNumber + shift < 0) {
            slide = testimonialsDATA.length - 1;
        } else {
            slide = (slideNumber + shift) % testimonialsDATA.length;
        }
        setSlideNumber(slide);
    };

    return (
        <div className={styles.container}>
            <div className={styles.leftarrow} onClick={() => changeSlide(1)}>
                <ArrowL />
            </div>
            <div className={styles.window}>
                {testimonialsDATA.map((test) => (
                    <Testimonial
                        key={test.id}
                        name={test.name}
                        text={test.text}
                        slideNumber={slideNumber}
                        starsNumber={test.starsNumber}
                    />
                ))}
            </div>

            <div className={styles.rightarrow} onClick={() => changeSlide(-1)}>
                <ArrowR />
            </div>
        </div>
    );
};
