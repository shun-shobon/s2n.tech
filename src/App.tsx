import React, { FC } from "react";
import { BrowserRouter } from "react-router-dom";

import styles from "./App.module.scss";

const App: FC = () => (
  <BrowserRouter>
    <div className={styles.app}>
      <div />
    </div>
  </BrowserRouter>
);

export default App;
