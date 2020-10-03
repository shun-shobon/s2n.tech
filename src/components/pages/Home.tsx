import React, { FC } from "react";
import { BrowserRouterProps } from "react-router-dom";

import TitleAtom from "../atoms/Title";
import HexagonBackgroundMolecule from "../molecules/HexagonBackground";

import styles from "./Home.module.scss";

const Home: FC<BrowserRouterProps> = () => (
  <>
    <div className={styles.hexagonBackgroundWrapper}>
      <HexagonBackgroundMolecule />
    </div>
    <div className={styles.title}>
      <div className={styles.welcome}>
        <TitleAtom>
          <span>W</span>elcome to
        </TitleAtom>
        <TitleAtom>
          My <span>P</span>ortfolio
        </TitleAtom>
      </div>
      <div className={styles.myName}>
        <TitleAtom>
          S<span>H</span>UN/しゅん
        </TitleAtom>
      </div>
    </div>
  </>
);

export default Home;
