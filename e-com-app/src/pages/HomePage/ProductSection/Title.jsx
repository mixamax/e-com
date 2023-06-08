import styles from "./Title.module.scss";
import { useContext } from "react";
import { DATAcontext } from "./ProductSection";

export const Title = () => {
    const { 1: titleText } = useContext(DATAcontext);
    return (
        <div className={styles.title}>
            <span className={styles.product}>{titleText}</span>
            <button className={styles["product-button"]}>GO TO SHOP</button>
        </div>
    );
};
