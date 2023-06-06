import styles from "./Arrows.module.scss";
import { ReactComponent as ArrowLeft } from "../../../images/arrowLeft.svg";
import { ReactComponent as RightLeft } from "../../../images/arrowRight.svg";
import { useContext } from "react";
import { TopSliderContext } from "./TopSlider";

export const Arrows = () => {
  const { changeSlide } = useContext(TopSliderContext);
  return (
    <div className={styles["arrow-rec"]}>
      <ArrowLeft
        className={styles["arrow-left"]}
        onClick={() => changeSlide(-1)}
      ></ArrowLeft>
      <RightLeft
        className={styles["arrow-right"]}
        onClick={() => changeSlide(1)}
      ></RightLeft>
    </div>
  );
};
