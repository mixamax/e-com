import { HeadComponent } from "../../components/HeadComponent";
import { Product } from "./Product";
import { SideBar } from "./SideBar";
import styles from "./shopPage.module.scss";
import { ReactComponent as Larrow } from "./Larrow.svg";
import { ReactComponent as Rarrow } from "./Rarrow.svg";
import { useState } from "react";

export const ShopPage = () => {
    const [activeNumber, setActiveNumber] = useState(1);
    const [numberOfpage, setNumberOfpage] = useState(3);
    const [filter, setFilter] = useState("");
    const [searchRequest, setSearchRequest] = useState("");
    const [selectValue, setSelectValue] = useState("DEFAULT");

    const filterHandler = (filter) => {
        setFilter(filter);
    };
    const clickNumberHandler = (number) => {
        setActiveNumber(number);
    };
    const getNumberPages = (number) => {
        setNumberOfpage(number);
    };
    const search = (req) => {
        setSearchRequest(req);
    };
    const clickRightArrowHandler = (number) => {
        if (number > numberOfpage) {
            return;
        }
        setActiveNumber(number);
    };
    const clickLeftArrowHandler = (number) => {
        if (number === 0) {
            return;
        }
        setActiveNumber(number);
    };
    const getSelectValue = (e) => {
        setSelectValue(e.target.value);
    };

    return (
        <div>
            <HeadComponent nameOfPage={"shop"} />
            <div className={styles.shopcontainer}>
                <div className={styles.productsAndsidebar}>
                    <div className={styles.productsAndpagination}>
                        <div className={styles["result-sorting-product"]}>
                            <div className={styles["result-sorting"]}>
                                <span className={styles.showing}>
                                    Showing 1–9 of 24 results
                                </span>
                                <form action="">
                                    <select
                                        name="name"
                                        size={1}
                                        defaultValue={"DEFAULT"}
                                        onChange={(e) => getSelectValue(e)}
                                    >
                                        <option name="n" value="DEFAULT">
                                            {" Default sorting"}
                                        </option>
                                        <option value="low>high">
                                            {"Price (low > high)"}
                                        </option>
                                        <option value="high>low">
                                            {"Price ( high > low)"}
                                        </option>
                                    </select>
                                </form>
                            </div>
                            <Product
                                numberOfpage={activeNumber}
                                getNumberPages={getNumberPages}
                                filter={filter}
                                clickNumberHandler={clickNumberHandler}
                                searchRequest={searchRequest}
                                selectValue={selectValue}
                            />
                        </div>
                        <div className={styles.pagination}>
                            <div className={styles.arrow}>
                                <Larrow
                                    onClick={() =>
                                        clickLeftArrowHandler(activeNumber - 1)
                                    }
                                />
                            </div>
                            <div className={styles.numberlist}>
                                {Array.from(new Array(numberOfpage)).map(
                                    (item, index) => (
                                        <span
                                            onClick={() =>
                                                clickNumberHandler(index + 1)
                                            }
                                            key={index}
                                            className={
                                                index + 1 === activeNumber
                                                    ? `${styles.number} ${styles.numberactive}`
                                                    : styles.number
                                            }
                                        >
                                            {index + 1}
                                        </span>
                                    )
                                )}
                            </div>
                            <div className={styles.arrow}>
                                <Rarrow
                                    onClick={() =>
                                        clickRightArrowHandler(activeNumber + 1)
                                    }
                                />
                            </div>
                        </div>
                    </div>
                    <SideBar
                        filterHandler={filterHandler}
                        filter={filter}
                        search={search}
                    />
                </div>
            </div>
        </div>
    );
};
