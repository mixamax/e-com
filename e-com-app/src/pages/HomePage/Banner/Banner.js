import styles from "./Banner.module.scss";
import { ContentBanner } from "./ContentBanner";

export const Banner = () => {
    return (
        <div className={styles.banner}>
            <ContentBanner />
        </div>
    );
};
