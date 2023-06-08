import styles from "./FeatureCard.module.scss";

export const FeatureCard = ({ img, headerText, text }) => {
    return (
        <div className={styles.featurecard}>
            <div>
                <img src={img} alt="features"></img>
            </div>
            <div className={styles.textblock}>
                <h1>{headerText}</h1>
                <span>{text}</span>
            </div>
        </div>
    );
};
