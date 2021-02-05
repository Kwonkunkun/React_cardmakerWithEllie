import React from "react";
import CardAddForm from "../card_add_form/card_add_form";
import CardEditForm from "../card_edit_form/card_edit_form";
import styles from "./editor.module.css";

const Editor = ({ cards, addCard, updateCard, deleteCard }) => {
    return (
        <div className={styles.editor}>
            <h1 className={styles.title}>Editor</h1>
            {Object.keys(cards).map((key) => (
                <CardEditForm
                    key={key}
                    card={cards[key]}
                    updateCard={updateCard}
                    deleteCard={deleteCard}
                />
            ))}
            <CardAddForm onAdd={addCard} />
        </div>
    );
};

export default Editor;
