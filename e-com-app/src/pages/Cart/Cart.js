import { useSelector } from "react-redux";
import { HeadComponent } from "../../components/HeadComponent";
import styles from "./Cart.module.scss";
import { CartItem } from "./CartItem";
import { Link } from "react-router-dom";
export const Cart = () => {
    const cartItemsProps = useSelector(
        (state) => state.cartReduser.cartItemsProps
    );
    const total = useSelector((state) => state.cartReduser.total);

    return (
        <div>
            <HeadComponent nameOfPage={"cart"} />
            <div className={styles["cart-page"]}>
                <div className={styles["cart"]}>
                    <div className={styles["cart-items-container"]}>
                        <div className={styles["cart-items-title"]}>
                            <span className={styles["items-title-text1"]}>
                                product
                            </span>
                            <span className={styles["items-title-text2"]}>
                                quantity
                            </span>
                            <span className={styles["items-title-text3"]}>
                                subtotal
                            </span>
                        </div>
                        {cartItemsProps.map((item) => (
                            <CartItem
                                key={item.id}
                                id={item.id}
                                name={item.name}
                                url={item.url}
                                price={item.price}
                                quantity={item.quantity}
                            />
                        ))}
                    </div>
                    <div className={styles["cart-total-container"]}>
                        <span className={styles["cart-total-title"]}>
                            Cart totals
                        </span>
                        <div className={styles["line"]}></div>
                        <div className={styles["cart-total"]}>
                            <div className={styles["cart-subtotal"]}>
                                <span className={styles["cart-subtotal-title"]}>
                                    subtotal
                                </span>
                                <span className={styles["cart-subtotal-price"]}>
                                    {total}
                                </span>
                            </div>
                            <div className={styles["line"]}></div>
                            <div className={styles["cart-subtotal"]}>
                                <span className={styles["cart-subtotal-title"]}>
                                    total
                                </span>
                                <span className={styles["cart-subtotal-price"]}>
                                    {total}
                                </span>
                            </div>
                            <div className={styles["line"]}></div>
                        </div>
                        <Link to="/shop">
                            <button className={styles["cart-btn"]}>
                                Continue shopping
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
