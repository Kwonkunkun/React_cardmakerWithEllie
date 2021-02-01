import React from "react";
import CardEditForm from "../card_edit_form/card_edit_form";
import styles from "./editor.module.css";

const Editor = ({ cards }) => {
    return (
        <div className={styles.editor}>
            <h1 className={styles.title}>Editor</h1>
            {cards.map((card) => (
                <CardEditForm card={card} />
            ))}
        </div>
    );
};

export default Editor;
