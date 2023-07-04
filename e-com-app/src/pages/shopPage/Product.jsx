import styles from "./shopPage.module.scss";
import { useCallback, useEffect, useState } from "react";
import { Item } from "../HomePage/ProductSections/Item";

export const Product = ({
    numberOfpage,
    getNumberPages,
    filter,
    clickNumberHandler,
    searchRequest,
    selectValue,
}) => {
    const [shopProduct, setShopProduct] = useState([]);
    const [error, setError] = useState("начальное состояние");

    const getDATA = useCallback(async () => {
        try {
            let response = await fetch("http://localhost:3001/products");
            if (!response.ok) {
                throw new Error("что-то пошло не так...");
            }
            let product = await response.json();
            const DATA = product.product;
            let DATAbySelectValue;
            const getDATAbySelectValue = () => {
                if (selectValue === "DEFAULT") {
                    DATAbySelectValue = DATA;
                } else if (selectValue === "low>high") {
                    DATAbySelectValue = DATA.sort((a, b) => a.price - b.price);
                } else {
                    DATAbySelectValue = DATA.sort((a, b) => b.price - a.price);
                }
            };
            getDATAbySelectValue();

            const DATAfilter = DATAbySelectValue.filter(({ category }) => {
                if (filter === "phone") {
                    return category === filter;
                } else if (filter === "watch") {
                    return category === filter;
                } else {
                    return category === "phone" || "watch";
                }
            });
            const DATAfilterAfterSearch = DATAfilter.filter(({ name }) => {
                if (!searchRequest) {
                    return true;
                } else {
                    return name
                        .toLowerCase()
                        .includes(searchRequest.toLowerCase());
                }
            });

            getNumberPages(Math.ceil((DATAfilterAfterSearch.length + 1) / 9));
            setShopProduct(DATAfilterAfterSearch);
        } catch (err) {
            setError(err.message);
            console.warn(error);
        }
    }, [error, getNumberPages, filter, searchRequest, selectValue]);

    useEffect(() => {
        getDATA();
    }, [getDATA]);
    useEffect(() => {
        clickNumberHandler(1);
    }, [filter]);

    return (
        <div className={styles.products}>
            {shopProduct
                .map((item) => (
                    <Item
                        key={item.id}
                        name={item.name}
                        price={item.price}
                        url={item.url}
                    />
                ))
                .slice(numberOfpage * 10 - 10, numberOfpage * 10 - 1)}
        </div>
    );
};
