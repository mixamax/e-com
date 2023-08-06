import styles from "./NavBar.module.scss";
import { NavLink } from "react-router-dom";

const setActive = ({ isActive }) =>
    isActive ? styles.active : styles.noneactive;

export const NavBar = () => {
    return (
        <div className={styles.navbar}>
            <ul>
                <li>
                    <NavLink to="/e-com" className={setActive}>
                        {" "}
                        HOME
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/e-com/shop" className={setActive}>
                        МАГАЗИН
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/e-com/about" className={setActive}>
                        О КОМПАНИИ
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/e-com/blog" className={setActive}>
                        {" "}
                        БЛОГ
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/e-com/contact" className={setActive}>
                        КОНТАКТЫ
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};
