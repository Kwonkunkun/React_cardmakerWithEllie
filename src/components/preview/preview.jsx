import React from "react";
import Card from "../card/card";
import styles from "./preview.module.css";

const Preview = ({ cards }) => {
    return (
        <div className={styles.preview}>
            <h1 className={styles.title}>Preview</h1>
            <ul className={styles.cards}>
                {Object.keys(cards).map((key) => (
                    <Card key={key} card={cards[key]} />
                ))}
            </ul>
        </div>
    );
};

export default Preview;
