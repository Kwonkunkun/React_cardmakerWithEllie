import React, { useState } from "react";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

const Maker = (props) => {
    const [cards, setCards] = useState([
        {
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
    ]);

    return (
        <div className={styles.maker}>
            <Header />
            <section className={styles.contents}>
                <Editor cards={cards} />
                <Preview cards={cards} />
            </section>
            <Footer />
        </div>
    );
};

export default Maker;
