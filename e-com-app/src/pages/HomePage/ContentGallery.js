import styles from "./ContentGallery.module.scss";
import watchimage from "../../images/watch.png";
import { useRef, useEffect } from "react";

export const ContentGallery = (props) => {

  // **************** ниже: получаем ширину блока Content и передаем в HomePage.js через вызов функции props.widthNode **************
  const contentGalleryRef = useRef(null);
  useEffect(() => {
    props.widthNode(contentGalleryRef.current.clientWidth);
  }, [window.screen.width]);
 
  return (
    <div
      className={styles.content}
      style={{
        transform: `translateX(${props.translatex}px)`,
        background: props.background,
      }}
      ref={contentGalleryRef}
    >
      <div className={styles.text}>
        <span>Your Products are great.</span>
        <button>SHOP PRODUCT</button>
      </div>
      <img src={watchimage} alt="watch" />
    </div>
  );
};
