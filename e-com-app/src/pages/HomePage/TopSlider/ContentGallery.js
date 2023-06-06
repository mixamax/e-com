import styles from "./ContentGallery.module.scss";

export const ContentGallery = ({url}) => {

  return (
    <div className={styles.content}>
      <div className={styles.text}>
        <span>Your Products are great.</span>
        <button>SHOP PRODUCT</button>
      </div>
      <img src={url} alt="watch" />
    </div>
  );
};
