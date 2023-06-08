import { createContext } from "react";
import { ItemsAndBullets } from "./ItemsAndBullets";
import styles from "./ProductSection.module.scss";
import { Title } from "./Title";
import iphone10 from "../../../images/productsectionimg/iphone10.png";
import iphone11 from "../../../images/productsectionimg/iphone11.png";
import iphone8 from "../../../images/productsectionimg/iphone8.png";
import iphone13 from "../../../images/productsectionimg/iphone13.png";
import blackwatch from "../../../images/productsectionimg/blackwatch.png";
import heavywatch from "../../../images/productsectionimg/heavywatch.png";
import pinkwatch from "../../../images/productsectionimg/pinkwatch.png";
import spottedwatch from "../../../images/productsectionimg/spottedwatch.png";

const DATA = [
    {
        mobilePRODUCTS: [
            {
                category: "phone",
                id: 1,
                name: "iphone 10",
                price: 980,
                url: iphone10,
            },
            {
                category: "phone",
                id: 2,
                name: "iphone 11",
                price: 1100,
                url: iphone11,
            },
            {
                category: "phone",
                id: 3,
                name: "iphone 8",
                price: 780,
                url: iphone8,
            },
            {
                category: "phone",
                id: 4,
                name: "iphone 13",
                price: 1500,
                url: iphone13,
            },
        ],
    },
    {
        smartWATCHES: [
            {
                category: "watch",
                id: 1,
                name: "black watch",
                price: 980,
                url: blackwatch,
            },
            {
                category: "watch",
                id: 2,
                name: "heavy watch",
                price: 1100,
                url: heavywatch,
            },
            {
                category: "watch",
                id: 3,
                name: "pink watch",
                price: 780,
                url: pinkwatch,
            },
            {
                category: "watch",
                id: 4,
                name: "spotted watch",
                price: 1500,
                url: spottedwatch,
            },
        ],
    },
];

export const DATAcontext = createContext([]);
export const ProductSection = () => {
    const {
        0: { mobilePRODUCTS },
    } = DATA; //такая деструктуризация массива быстрее, чем через []
    const {
        1: { smartWATCHES },
    } = DATA;

    const mobilePRODUCTStitle = "MOBILE PRODUCT";
    const smartWATCHEStitle = "SMART WATCHES";
    return (
        <>
            <DATAcontext.Provider value={[mobilePRODUCTS, mobilePRODUCTStitle]}>
                <div className={styles["product-section"]}>
                    <Title />
                    <ItemsAndBullets />
                </div>
            </DATAcontext.Provider>
            <DATAcontext.Provider value={[smartWATCHES, smartWATCHEStitle]}>
                <div className={styles["product-section"]}>
                    <Title />
                    <ItemsAndBullets />
                </div>
            </DATAcontext.Provider>
        </>
    );
};
