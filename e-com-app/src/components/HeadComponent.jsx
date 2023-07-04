import styles from "./HeadComponent.module.scss";
import { Link } from "react-router-dom";

export const HeadComponent = ({ nameOfPage }) => {
    return (
        <div className={styles.headComponent}>
            <span className={styles.nameOfPage}>{nameOfPage}</span>
            <span className={styles.path}>
                <Link to="/" className={styles.link}>{`Home > `}</Link>
                {nameOfPage}
            </span>
        </div>
    );
};
