// import styles from "./ProductSections.module.scss";
import { useCallback, useEffect, useState } from "react";
import { ProductSectionItem } from "./ProductSectionItem";

export const ProductSections = () => {
    const mobilePRODUCTStitle = "MOBILE PRODUCT";
    const smartWATCHEStitle = "SMART WATCHES";
    const [mobilePRODUCTS, setMobilePRODUCTS] = useState([]);
    const [smartWATCHES, setSmartWATCHES] = useState([]);
    const [error, setError] = useState("начальное состояние");

    const getDATA = useCallback(async () => {
        try {
            let response = await fetch("http://localhost:3001/products");
            if (!response.ok) {
                throw new Error("что-то пошло не так...");
            }
            let product = await response.json();
            const DATA = product.product;

            const phones = DATA.filter(({ category }) => category === "phone");
            const watches = DATA.filter(({ category }) => category === "watch");
            setMobilePRODUCTS(phones);
            setSmartWATCHES(watches);
        } catch (err) {
            setError(err.message);
            console.warn(error);
        }
    }, [error]);

    // useLayoutEffect(() => {
    //     getDATA();
    // }, [getDATA]);

    useEffect(() => {
        getDATA();
    }, [getDATA]);

    return (
        <>
            <ProductSectionItem
                categoryOfProduct={mobilePRODUCTS}
                nameOfTitle={mobilePRODUCTStitle}
            />
            <ProductSectionItem
                categoryOfProduct={smartWATCHES}
                nameOfTitle={smartWATCHEStitle}
            />
        </>
    );
};
