import { useDispatch } from "react-redux";
import styles from "./Cart.module.scss";
import { ReactComponent as RemoveItem } from "./removeIcon.svg";
import { minusQuantity, removeItem, plusQuantity } from "../../store/cartSlice";

export const CartItem = ({ id, url, name, price, quantity }) => {
    const dispatch = useDispatch();

    return (
        <div className={styles["cart-item"]}>
            <div className={styles["item-container"]}>
                <div className={styles["item-description"]}>
                    <img
                        className={styles["description-image"]}
                        src={url}
                        alt="product"
                    ></img>

                    <div className={styles["description-text"]}>
                        <span className={styles["description-text-name"]}>
                            {name}
                        </span>
                        <span className={styles["description-text-price"]}>
                            {`$${price}`}
                        </span>
                    </div>
                </div>
                <div className={styles["quantity"]}>
                    <div
                        className={styles["quantity-minus"]}
                        onClick={() => dispatch(minusQuantity({ id, price }))}
                    >
                        -
                    </div>
                    <div className={styles["quantity-value"]}>{quantity}</div>
                    <div
                        className={styles["quantity-plus"]}
                        onClick={() => dispatch(plusQuantity({ id, price }))}
                    >
                        +
                    </div>
                </div>
                <span className={styles["subtotal"]}>{price * quantity}</span>
                <div
                    className={styles["remove-item"]}
                    onClick={() => dispatch(removeItem({ id }))}
                >
                    <RemoveItem />
                </div>
            </div>
        </div>
    );
};
