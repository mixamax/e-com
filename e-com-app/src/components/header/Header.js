import styles from "./Header.module.scss";
import { Logo } from "./Logo";
import { RightIconsAndNavBar } from "./RightIconsAndNavBar";

export const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Logo />
        <RightIconsAndNavBar />
      </nav>
    </header>
  );
};
