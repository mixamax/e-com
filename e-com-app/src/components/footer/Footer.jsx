import { Logo } from "../header/Logo";
import styles from "./Footer.module.scss";
import { ReactComponent as Fb } from "./fb.svg";
import { ReactComponent as Insta } from "./insta.svg";
import { ReactComponent as Twit } from "./twit.svg";
import { ReactComponent as In } from "./in.svg";
import { ReactComponent as YouT } from "./youtube.svg";
import { FooterNavBar } from "./FooterNavBar";
import { HelpInfo } from "./HelpInfo";
import { ContactUs } from "./ContactUs";
import { Copyright } from "./Copyright";

export const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.links}>
                <div className={styles.company}>
                    <Logo />
                    <div className={styles.newsletterAndSocial}>
                        <div className={styles.newsletter}>
                            Nisi, purus vitae, ultrices nunc. Sit ac sit
                            suscipit hendrerit. Gravida massa volutpat aenean
                            odio erat nullam fringilla.
                        </div>
                        <div className={styles.social}>
                            <Fb />
                            <Insta />
                            <Twit />
                            <In />
                            <YouT />
                        </div>
                    </div>
                </div>
                <div className={styles.qlinks}>
                    <div className={styles.heading}>Quick links</div>
                    <FooterNavBar />
                </div>
                <div className={styles.qlinks}>
                    <div className={styles.heading}>Help & info</div>
                    <HelpInfo />
                </div>
                <div className={styles.qlinks}>
                    <div className={styles.heading}>Contact us</div>
                    <ContactUs />
                </div>
            </div>
            <Copyright />
        </div>
    );
};
