import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

const Maker = ({ authService }) => {
    const [cards, setCards] = useState({
        1: {
            id: "1",
            name: "kwon",
            company: "Samsung",
            theme: "colorful",
            title: "Software engineer",
            email: "kunwoo242@gmail.com",
            message: "go for it",
            fileName: "kwon",
            fileURL: null,
        },
    });

    const history = useHistory();
    const onLogout = () => {
        authService.onAuthChange((user) => {
            if (!user) {
                history.push("/");
            }
        });
    };
    const CreateOrUpdateCard = (card) => {
        setCards((cards) => {
            const updated = { ...cards };
            updated[card.id] = card;
            return updated;
        });
    };

    const deleteCard = (card) => {
        setCards((cards) => {
            const updated = { ...cards };
            delete updated[card.id];
            return updated;
        });
    };

    return (
        <div className={styles.maker}>
            <Header onLogout={onLogout} />
            <section className={styles.contents}>
                <Editor
                    cards={cards}
                    addCard={CreateOrUpdateCard}
                    updateCard={CreateOrUpdateCard}
                    deleteCard={deleteCard}
                />
                <Preview cards={cards} />
            </section>
            <Footer />
        </div>
    );
};

export default Maker;
