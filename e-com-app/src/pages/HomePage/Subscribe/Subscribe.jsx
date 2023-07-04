import { useState } from "react";
import styles from "./Subscribe.module.scss";

export const Subscribe = () => {
    const [inputText, setInputText] = useState("");
    const submitHandler = (event) => {
        event.preventDefault();
        console.log("e-male:", inputText);
        setInputText("");
    };
    const inputHandler = (event) => {
        setInputText(event.target.value);
    };
    return (
        <div className={styles.subscribe}>
            <div className={styles.text}>
                <span className={styles.span1}>Subscribe Us now</span>
                <span className={styles.span2}>
                    Get latest news, updates and deals directly mailed to your
                    inbox.
                </span>
            </div>
            <form className={styles.form} onSubmit={submitHandler}>
                <input
                    className={styles.input}
                    type="email"
                    placeholder="Your email address here"
                    onInput={inputHandler}
                    value={inputText}
                ></input>
                <button type="submit" className={styles.btn}>
                    <span className={styles.btntext}> SUBSCRIBE</span>
                </button>
            </form>
        </div>
    );
};
