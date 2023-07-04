import styles from "./ContentBanner.module.scss";

export const ContentBanner = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.text}>
                    <div className={styles.off}>
                        <div className={styles.rec}></div>
                        <span className={styles.span1}>10%</span>
                    </div>

                    <span className={styles.span2}>New year sale</span>
                    <button>SHOP SALE</button>
                </div>
                <div className={styles["banner-image"]}></div>
                {/* <img
                    className={styles["banner-image"]}
                    src="./BannerImg/banner.png"
                    alt="banner"
                /> */}
            </div>
        </div>
    );
};
