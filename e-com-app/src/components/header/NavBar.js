import styles from "./NavBar.module.scss";
import { NavLink } from "react-router-dom";

const setActive = ({ isActive }) =>
  isActive ? styles.active : styles.noneactive;

export const NavBar = () => {
  return (
    <div className={styles.navbar}>
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
