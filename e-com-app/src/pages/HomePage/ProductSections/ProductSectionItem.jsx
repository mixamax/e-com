import styles from "./ProductSectionItem.module.scss";
import { createContext, useState } from "react";
import { ItemsAndBullets } from "./ItemsAndBullets";
import { Title } from "./Title";

export const DATAcontext = createContext([]);
export const ProductSectionItem = ({ nameOfTitle, categoryOfProduct }) => {
    const [slideNumber, setSlideNumber] = useState(0);
    console.log(categoryOfProduct);

    const goToSlide = (number) => {
        setSlideNumber(number);
    };
    return (
        <DATAcontext.Provider
            value={{ slideNumber, goToSlide, categoryOfProduct }}
        >
            <div className={styles["product-section-item"]}>
                <Title nameOfTitle={nameOfTitle} buttonText="GO TO SHOP" />
                <ItemsAndBullets />
            </div>
        </DATAcontext.Provider>
    );
};
