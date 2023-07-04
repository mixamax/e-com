import { Link } from "react-router-dom";
import styles from "./FooterNavBar.module.scss";

export const HelpInfo = () => {
    return (
        <div className={styles["footer-navbar"]}>
            <ul>
                <li className={styles["footer-navbar-li"]}>
                    <Link to="/order" className={styles["footer-navbar-link"]}>
                        Track Your Order
                    </Link>
                </li>
                <li>
                    <Link to="/order" className={styles["footer-navbar-link"]}>
                        Returns policies
                    </Link>
                </li>
                <li>
                    <Link to="/order" className={styles["footer-navbar-link"]}>
                        Shipping + Delivery{" "}
                    </Link>
                </li>
                <li>
                    <Link to="/order" className={styles["footer-navbar-link"]}>
                        Contact Us
                    </Link>
                </li>
                <li>
                    <Link to="/order" className={styles["footer-navbar-link"]}>
                        Faqs
                    </Link>
                </li>
            </ul>
        </div>
    );
};
