import { useEffect, useState } from "react";
import styles from "./CartIcon.module.scss";
import { useSelector } from "react-redux";

export const CartIcon = () => {
    const cartItemsProps = useSelector(
        (state) => state.cartReduser.cartItemsProps
    );
    const numberofCartProduct = cartItemsProps.length;
    const [isAnimated, setIsAnimated] = useState(false);

    const styleScale = `${styles["cart"]} ${
        isAnimated ? styles["cart-scale"] : ""
    }`;

    useEffect(() => {
        setIsAnimated(true);
        const timer = setTimeout(() => {
            setIsAnimated(false);
        }, 300);
        return () => clearTimeout(timer);
    }, [numberofCartProduct]);

    return (
        <div className={styleScale}>
            <div className={styles["cart-icon"]}></div>
            <span
                className={styles["cart-span"]}
            >{`(${numberofCartProduct})`}</span>
        </div>
    );
};
