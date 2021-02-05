import React from "react";
import Login from "./components/login/login";
import styles from "./app.module.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Maker from "./components/maker/maker";

const App = ({ FileInput, authService, cardRepository }) => {
    return (
        <div className={styles.app}>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Login authService={authService} />
                    </Route>
                    <Route path="/maker">
                        <Maker
                            FileInput={FileInput}
                            authService={authService}
                            cardRepository={cardRepository}
                        />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

export default App;
