import { ContentGallery } from "./ContentGallery";
import styles from "./HomePage.module.scss";

export const HomePage = () => {
  return (
    <div className={styles.slider}>
      <ContentGallery />
      <div className={styles["arrow-rec"]}>
        <div className={styles["arrow-left"]}></div>
        <div className={styles["arrow-right"]}></div>
      </div>
    </div>
  );
};
