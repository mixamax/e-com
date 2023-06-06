import { useContext } from "react";
import { ContentGallery } from "./ContentGallery";
import { TopSliderContext } from "./TopSlider";
import styles from "./SliderList.module.scss";

export const SlidesList = () => {
  const { imagesURLarray, slideNumber } = useContext(TopSliderContext);
  return (
    <div
      className={styles["slides-list"]}
      style={{ transform: `translateX(-${slideNumber * 100}%)` }}
    >
      {imagesURLarray.map((imageURL, index) => (
        <ContentGallery key={index} url={imageURL} />
      ))}
    </div>
  );
};
