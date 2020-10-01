import React, { FC } from "react";
import range from "../../utils/range";

import HexagonAtom from "../atoms/Hexagon";

import styles from "./HexagonBackground.module.scss";

const HexagonBackground: FC = () => (
  <div className={styles.hexagonBackground}>
    {range({ stop: 2 }).map((i) => (
      <div key={i} className={styles.hexagon__wrapper}>
        <HexagonAtom />
      </div>
    ))}
  </div>
);

export default HexagonBackground;
