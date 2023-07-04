import { Link } from "react-router-dom";
import styles from "./FooterNavBar.module.scss";

export const ContactUs = () => {
    return (
        <div className={styles["footer-navbar"]}>
            <ul>
                <li className={styles["contact-li"]}>
                    <span> Do you have any queries or suggestions?</span>
                    <Link
                        className={styles["contact-link"]}
                        to="mailto: yourinfo@gmail.com"
                    >
                        yourinfo@gmail.com
                    </Link>
                </li>
                <li className={styles["contact-li"]}>
                    <span>If you need support? Just give us a call.</span>
                    <Link className={styles["contact-link"]} to="tel:+79111111">
                        +22 2222 222 22 22
                    </Link>
                </li>
            </ul>
        </div>
    );
};
