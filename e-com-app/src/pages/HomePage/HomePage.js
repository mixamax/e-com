import { ContentGallery } from "./ContentGallery";
import styles from "./HomePage.module.scss";
import { ReactComponent as ArrowLeft } from "../../images/arrowLeft.svg";
import { ReactComponent as RightLeft } from "../../images/arrowRight.svg";
import { useState, useRef, useEffect } from "react";

export const HomePage = () => {
  const [shift, setShift] = useState(0);
  const [widthNode, setWidthNode] = useState(0);
  const [quantityOfChildren, setQuantityOfChildren] = useState(0);
  const [count, setCount] = useState(1);
  //************** ниже: получаем кол-во чилдренов galleryWindow******************************** */
  const refGalleryWindowNode = useRef(null);
  useEffect(() => {
    setQuantityOfChildren(refGalleryWindowNode.current.children.length);
  }, []);
  //**************строчка ниже: получаем ширину блока ContentGallery ******************************** */
  const widthNodeFunc = (width) => setWidthNode(width);

  const leftArrowHandler = () => {
    if (count === 1) {
      console.log("count === 1");
      setShift(-widthNode * (quantityOfChildren - 1));
      setCount(quantityOfChildren);
      console.log(count);
    } else {
      setShift((shift) => shift + widthNode);
      setCount((count) => --count);
      console.log(count);
    }
  };
  const rightArrowHandler = () => {
    if (count === quantityOfChildren) {
      console.log("count === quantityOfChildren");
      setShift(0);
      setCount(1);
    } else {
      setShift((shift) => shift - widthNode);
      setCount((count) => ++count);
    }
  };

  return (
    <div className={styles.slider}>
      <div ref={refGalleryWindowNode} className={styles.galleryWindow}>
        <ContentGallery
          background={'none'}
          widthNode={widthNodeFunc}
          translatex={shift}
        />
        <ContentGallery
          background={'red'}
          widthNode={widthNodeFunc}
          translatex={shift}
        />
        <ContentGallery
          background={'blue'}
          widthNode={widthNodeFunc}
          translatex={shift}
        />
      </div>

      <div className={styles["arrow-rec"]}>
        <ArrowLeft
          className={styles["arrow-left"]}
          onClick={leftArrowHandler}
        ></ArrowLeft>
        <RightLeft
          className={styles["arrow-right"]}
          onClick={rightArrowHandler}
        ></RightLeft>
      </div>
    </div>
  );
};
