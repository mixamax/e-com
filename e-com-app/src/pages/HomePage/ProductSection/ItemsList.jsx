import { useContext } from "react";
import { DATAcontext } from "./ProductSection";
import { Item } from "./Item";
import styles from "./ItemList.module.scss";

export const ItemsList = () => {
    // const {
    //     0: { PHONES },
    //     1: { WATCHES },
    // } = useContext(DATAcontext); //такая деструктуризация массива быстрее, чем через []
    const { 0: PRODUCT } = useContext(DATAcontext);

    return (
        <div className={styles.itemlist}>
            {PRODUCT.map((item) => (
                <Item
                    key={item.id}
                    name={item.name}
                    price={item.price}
                    url={item.url}
                />
            ))}
        </div>
    );
};
