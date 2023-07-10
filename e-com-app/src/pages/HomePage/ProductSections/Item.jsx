import { useState } from "react";
import { HoverButton } from "./HoverButton";
import styles from "./Item.module.scss";

export const Item = ({ name, price, url, id }) => {
    const [hoverNode, setHoverNode] = useState(false);
    const hoverHandler = () => {
        setHoverNode(true);
    };

    const outHoverHandler = () => {
        setHoverNode(false);
    };
    return (
        <div
            className={styles.item}
            onMouseMove={hoverHandler}
            onMouseLeave={outHoverHandler}
        >
            <HoverButton
                showButton={hoverNode}
                id={id}
                name={name}
                url={url}
                price={price}
            />
            <img src={url} alt="phone"></img>
            <div className={styles.text}>
                <span className={styles.name}>{name}</span>
                <span className={styles.price}>{`$${price}`}</span>
            </div>
        </div>
    );
};
