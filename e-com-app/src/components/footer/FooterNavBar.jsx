import styles from "./FooterNavBar.module.scss";
import { NavLink } from "react-router-dom";

const setActive = ({ isActive }) =>
    isActive ? styles.active : styles.noneactive;

export const FooterNavBar = () => {
    return (
        <div className={styles["footer-navbar"]}>
            <ul>
                <li>
                    <NavLink to="/" className={setActive}>
                        {" "}
                        HOME
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/shop" className={setActive}>
                        МАГАЗИН
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={setActive}>
                        О КОМПАНИИ
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/blog" className={setActive}>
                        {" "}
                        БЛОГ
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className={setActive}>
                        КОНТАКТЫ
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};
