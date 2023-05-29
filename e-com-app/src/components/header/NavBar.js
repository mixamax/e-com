import styles from "./NavBar.module.scss";

export const NavBar = () => {
  return (
    <div className={styles.navbar}>
    <ul>
          <li><a href="/">HOME</a></li>
          <li> <a href="/">О КОМПАНИИ</a></li>
          <li><a href="/"> БЛОГ</a> </li>
          <li><a href="/">КОНТАКТЫ</a></li>
        </ul>
    </div>
  );
};
