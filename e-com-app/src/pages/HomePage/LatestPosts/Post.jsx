import styles from "./LatestPosts.module.scss";

export const Post = ({ imageURL, text1, text2 }) => {
    return (
        <div className={styles.post}>
            <img
                src={imageURL}
                className={styles["post-image"]}
                alt="post"
            ></img>
            <div className={styles["post-text"]}>
                <span className={styles["post-text-1"]}>{text1}</span>
                <span className={styles["post-text-2"]}>{text2}</span>
            </div>
        </div>
    );
};
