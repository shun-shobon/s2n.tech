import React, { FC } from "react";
import { BrowserRouterProps } from "react-router-dom";

import HexagonBackgroundMolecule from "../molecules/HexagonBackground";

import styles from "./Home.module.scss";

const Home: FC<BrowserRouterProps> = () => (
  <>
    <div className={styles.hexagonBackgroundWrapper}>
      <HexagonBackgroundMolecule />
    </div>
  </>
);

export default Home;
