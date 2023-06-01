import styles from "./ContentGallery.module.scss";
import watchimage from "../../images/watch.png";

export const ContentGallery = () => {
  return (
    <div className={styles.content}>
      <div className={styles.text}>
        <span>Your Products are great.</span>
        <button>SHOP PRODUCT</button>
      </div>
      <img src={watchimage} alt="watch" />
    </div>
  );
};
