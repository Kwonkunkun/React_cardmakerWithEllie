import React from "react";
import styles from "./header.module.css";

const Header = ({ onLogout }) => {
    return (
        <header className={styles.header}>
            <img className={styles.logo} src="/images/logo.png" alt="" />
            <div className={styles.title}>Card Maker</div>
            {onLogout && (
                <button className={styles.logout} onClick={onLogout}>
                    logout
                </button>
            )}
        </header>
    );
};

export default Header;
