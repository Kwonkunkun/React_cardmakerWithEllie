import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Editor from "../components/editor/editor";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import Preview from "../components/preview/preview";
import styles from "./maker.module.css";

const Maker = ({ authService }) => {
    const history = useHistory();

    const onLogout = () => {
        authService.logout();
    };

    useEffect(() => {
        authService.onAuthChange((user) => {
            if (!user) {
                history.push("/");
            }
        });
    });

    return (
        <section className={styles.maker}>
            <Header onLogout={onLogout} />
            <div className={styles.container}>
                <Editor />
                <Preview />
            </div>
            <Footer />
        </section>
    );
};

export default Maker;
