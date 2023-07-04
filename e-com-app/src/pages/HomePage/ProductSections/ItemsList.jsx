import { useContext } from "react";
import { DATAcontext } from "./ProductSectionItem";
import { Item } from "./Item";
import styles from "./ItemList.module.scss";

export const ItemsList = () => {
    const { categoryOfProduct, slideNumber } = useContext(DATAcontext);

    return (
        <div
            className={styles.itemlist}
            style={{ transform: `translateX(-${slideNumber * 100}%)` }}
        >
            {categoryOfProduct.map((item) => (
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
