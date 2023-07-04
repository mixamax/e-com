import styles from "./Title.module.scss";

export const Title = ({ nameOfTitle, buttonText }) => {
    return (
        <div className={styles.title}>
            <span className={styles.product}>{nameOfTitle}</span>
            <button className={styles["product-button"]}>{buttonText}</button>
        </div>
    );
};
