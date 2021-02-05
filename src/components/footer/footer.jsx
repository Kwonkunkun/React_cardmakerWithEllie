import React, { memo } from "react";
import styles from "./footer.module.css";

const Footer = memo(() => {
    return (
        <footer className={styles.footer}>
            <span className={styles.comment}>coding is Life</span>
        </footer>
    );
});

export default Footer;
