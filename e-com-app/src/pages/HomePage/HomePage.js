import { TopSlider } from "./TopSlider/TopSlider";
import { Features } from "./Features/Features";
import styles from "./HomePage.module.scss";
import { ProductSection } from "./ProductSection/ProductSection";

export const HomePage = () => {
    return (
        <div className={styles["home-page"]}>
            <TopSlider></TopSlider>
            <Features />
            <ProductSection />
        </div>
    );
};
