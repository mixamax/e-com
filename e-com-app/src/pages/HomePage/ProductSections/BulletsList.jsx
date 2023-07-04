import { Bullet } from "./Bullet";
import styles from "./BulletsList.module.scss";

export const BulletsList = () => {
    const numberOfBullets = 3;
    return (
        <div className={styles["bullets-list"]}>
            {Array.from(new Array(numberOfBullets)).map((item, index) => {
                return <Bullet key={index} number={index} />;
            })}
        </div>
    );
};
