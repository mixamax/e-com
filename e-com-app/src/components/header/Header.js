import styles from "./Header.module.scss";
import { Logo } from "./Logo";
import { RightIconsAndNavBar } from "./RightIconsAndNavBar";

export const Header = () => {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <nav className={styles.nav}>
                    <Logo />
                    <RightIconsAndNavBar />
                </nav>
            </header>
        </div>
    );
};
