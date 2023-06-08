import styles from "./HoverButton.module.scss";
import { ReactComponent as CartIcon } from "../../../images/ion_cart copy.svg";

export const HoverButton = ({ showButton }) => {
    return (
        <div
            className={styles.hoverbtn}
            style={{
                opacity: showButton && 1,
                top: showButton && `320px`,
            }}
        >
            <span className={styles["hoverbtn-text"]}>add to cart</span>
            <CartIcon
                style={{ fill: "rgba(255, 255, 255, 1)" }}
                className={styles["cart-icon"]}
            />
        </div>
    );
};
