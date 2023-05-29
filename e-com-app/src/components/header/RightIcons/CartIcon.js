import styles from "./CartIcon.module.scss";

export const CartIcon = () => {
  return (
    <div className={styles["cart"]}>
        <div className={styles["cart-icon"]}></div>
        <span className={styles["cart-span"]}>(0)</span>
      </div>
  );
};
