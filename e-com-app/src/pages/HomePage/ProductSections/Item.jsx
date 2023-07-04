import { useState } from "react";
import { HoverButton } from "./HoverButton";
import styles from "./Item.module.scss";
// import { useEffect, useRef } from "react";

export const Item = ({ name, price, url }) => {
    // const nodeRef = useRef();
    // useEffect(() => {
    //     nodeRef.current.addEventListener("mouseenter", listener, options);
    // }, []);

    const [hoverNode, setHoverNode] = useState(false);
    const hoverHandler = () => {
        // e.target.parentNode.classList.add(); Можно ли напрямую добавлять класс?
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
            <HoverButton showButton={hoverNode} />
            <img src={url} alt="phone"></img>
            <div className={styles.text}>
                <span className={styles.name}>{name}</span>
                <span className={styles.price}>{`$${price}`}</span>
            </div>
        </div>
    );
};
// ref={nodeRef}
