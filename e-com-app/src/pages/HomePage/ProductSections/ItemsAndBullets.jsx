import { BulletsList } from "./BulletsList";
import styles from "./ItemsAndBullets.module.scss";
import { ItemsList } from "./ItemsList";

export const ItemsAndBullets = () => {
    return (
        <div className={styles.itemsandbullets}>
            <ItemsList />
            <BulletsList />
        </div>
    );
};
