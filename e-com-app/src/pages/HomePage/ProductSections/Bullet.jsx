import styles from "./Bullet.module.scss";
import { useContext } from "react";
import { DATAcontext } from "./ProductSectionItem";

export const Bullet = ({ number }) => {
    const { goToSlide, slideNumber } = useContext(DATAcontext);
    return (
        <div
            className={
                slideNumber === number
                    ? styles.bullet + " " + styles["bullet-active"]
                    : styles.bullet
            }
            onClick={() => goToSlide(number)}
        ></div>
    );
};
