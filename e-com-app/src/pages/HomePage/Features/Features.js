import styles from "./Features.module.scss";
import delivery from "../../../images/featuresimg/delivery.png";
import guarantee from "../../../images/featuresimg/guarantee.png";
import offers from "../../../images/featuresimg/offers.png";
import payment from "../../../images/featuresimg/payment.png";
import { FeatureCard } from "./FeatureCard";

const DATA = [
    {
        image: delivery,
        headerText: "Free delivery",
        text: "Consectetur adipi elit lorem ipsum dolor sit amet.",
    },
    {
        image: guarantee,
        headerText: "Quality guarantee",
        text: "Dolor sit amet orem ipsu mcons ectetur adipi elit.",
    },
    {
        image: offers,
        headerText: "Daily offers",
        text: "Amet consectetur adipi elit loreme ipsum dolor sit.",
    },
    {
        image: payment,
        headerText: "100% secure payment",
        text: "Rem Lopsum dolor sit amet, consectetur adipi elit.",
    },
];

export const Features = () => {
    return (
        <div className={styles.features}>
            {DATA.map((item, i) => (
                <FeatureCard
                    key={i}
                    img={item.image}
                    headerText={item.headerText}
                    text={item.text}
                />
            ))}
        </div>
    );
};
