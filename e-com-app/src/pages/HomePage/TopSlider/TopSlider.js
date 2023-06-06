import styles from "./TopSlider.module.scss";
import React, { useState, useEffect } from "react";
import { getHomeImages } from "../getHomeImages";
import { SlidesList } from "./SlidesList";
import { Arrows } from "./Arrows";

export const TopSliderContext = React.createContext({});

export const TopSlider = () => {
  const [imagesURLarray, setImagesURLarray] = useState([]);
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const imagesURL = getHomeImages();
    setImagesURLarray(imagesURL);
  }, []);

  const changeSlide = (direction = 1) => {
    let sliderNumber = 0;
    if (slide + direction < 0) {
      sliderNumber = imagesURLarray.length - 1;
    } else {
      sliderNumber = (slide + direction) % imagesURLarray.length;
    }

    setSlide(sliderNumber);
  };

  // const goToSlide = (num) => {
  //   setSlide(num % imagesURLarray.length);
  // };

  return (
    <div className={styles.slider}>
      <TopSliderContext.Provider
        value={{
          // goToSlide,
          changeSlide,
          // slidesCount: imagesURLarray.length,
          slideNumber: slide,
          imagesURLarray,
        }}
      >
        <div className={styles.galleryWindow}>{ <SlidesList /> }</div>
        <Arrows></Arrows>
      </TopSliderContext.Provider>
    </div>
  );
};
