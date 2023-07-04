import { TopSlider } from "./TopSlider/TopSlider";
import { Features } from "./Features/Features";
import { ProductSections } from "./ProductSections/ProductSections";
import styles from "./HomePage.module.scss";
import { Banner } from "./Banner/Banner";
import { LatestPosts } from "./LatestPosts/LatestPosts";
import { Testimonials } from "./Testimonials/Testimonials";
import { Subscribe } from "./Subscribe/Subscribe";

export const HomePage = () => {
    return (
        <div className={styles["home-page"]}>
            <TopSlider></TopSlider>
            <Features />
            <ProductSections />
            <Banner />
            <LatestPosts />
            <Testimonials />
            <Subscribe />
        </div>
    );
};
