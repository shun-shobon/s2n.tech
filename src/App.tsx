import React, { FC } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomePage from "./components/pages/Home";

import styles from "./App.module.scss";
import "./scss/_global.scss";

const App: FC = () => (
  <BrowserRouter>
    <div className={styles.app}>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
