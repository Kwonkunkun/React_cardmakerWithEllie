import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

const Maker = ({ FileInput, authService, cardRepository }) => {
    const historyState = useHistory().state;
    const [cards, setCards] = useState({});
    const [userId, setUserId] = useState(historyState && historyState.id);

    const history = useHistory();
    const onLogout = useCallback(() => {
        authService.logout();
    }, [authService]);

    useEffect(() => {
        if (!userId) {
            return;
        }
        const stopSync = cardRepository.syncCard(userId, (cards) => {
            setCards(cards);
        });

        return () => {
            stopSync();
        };
    }, [userId, cardRepository]);

    useEffect(() => {
        authService.onAuthChange((user) => {
            if (user) {
                setUserId(user.uid);
            } else {
                history.push("/");
            }
        });
    }, [authService, history]);

    const CreateOrUpdateCard = (card) => {
        setCards((cards) => {
            const updated = { ...cards };
            updated[card.id] = card;
            return updated;
        });
        cardRepository.saveCard(userId, card);
    };

    const deleteCard = (card) => {
        setCards((cards) => {
            const updated = { ...cards };
            delete updated[card.id];
            return updated;
        });
        cardRepository.removeCard(userId, card);
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
                    FileInput={FileInput}
                />
                <Preview cards={cards} />
            </section>
            <Footer />
        </div>
    );
};

export default Maker;
