import { useState } from "react";
import styles from "./shopPage.module.scss";
import { ReactComponent as SearchIcon } from "./search.svg";

export const SideBar = ({ filterHandler, filter, search }) => {
    const [inputText, setInputText] = useState("");
    const submitHandler = (event) => {
        event.preventDefault();
        search(inputText);
        setInputText("");
    };

    const inputHandler = (event) => {
        setInputText(event.target.value);
    };

    return (
        <div className={styles.shopSidebar}>
            <form className={styles.searchform} onSubmit={submitHandler}>
                <input
                    className={styles.input}
                    type="search"
                    placeholder="Search"
                    onInput={inputHandler}
                    value={inputText}
                ></input>
                <button type="submit" className={styles.btn}>
                    <SearchIcon />
                </button>
            </form>
            <div className={styles.categories}>
                <span className={styles.categoriesname}>categories</span>
                <div className={styles["category-btn"]}>
                    <span
                        className={
                            filter === ""
                                ? `${styles.category} ${styles.categoryactive}`
                                : styles.category
                        }
                        onClick={() => {
                            filterHandler("");
                            search(0);
                        }}
                    >
                        Все
                    </span>
                    <span
                        className={
                            filter === "phone"
                                ? `${styles.category} ${styles.categoryactive}`
                                : styles.category
                        }
                        onClick={() => {
                            filterHandler("phone");
                            search(0);
                        }}
                    >
                        Телефоны
                    </span>
                    <span
                        className={
                            filter === "watch"
                                ? `${styles.category} ${styles.categoryactive}`
                                : styles.category
                        }
                        onClick={() => {
                            filterHandler("watch");
                            search(0);
                        }}
                    >
                        Часы
                    </span>
                </div>
            </div>
        </div>
    );
};
