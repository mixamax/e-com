// import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";
import { ReactComponent as Dhl } from "./dhl.svg";
import { ReactComponent as Post } from "./post.svg";
import { ReactComponent as MasterCard } from "./mastercard.svg";
import { ReactComponent as PayPal } from "./paypal.svg";
import { ReactComponent as Visa } from "./visa.svg";

export const Copyright = () => {
    return (
        <div className={styles["copyright-line"]}>
            <div className={styles.line}></div>
            <div className={styles.copyright}>
                <div className={styles.payment}>
                    <div className={styles.weShip}>
                        <span className={styles.weShipSpan}>We ship with:</span>
                        <Dhl />
                        <Post />
                    </div>
                    <div className={styles.pay}>
                        <span className={styles.weShipSpan}>
                            Payment options:
                        </span>
                        <MasterCard />
                        <Visa />
                        <PayPal />
                    </div>
                </div>
                <div className={styles.designby}>
                    © Copyright 2023 MiniStore. Design by TemplatesJungle
                </div>
            </div>
        </div>
    );
};
