import React, { FC } from "react";
import range from "../../utils/range";

import styles from "./Hexagon.module.scss";

const Hexagon: FC = () => (
  <div className={styles.hexagon}>
    {range({ stop: 6 }).map((i) => (
      <div key={i} className={styles.hexagon__inner} />
    ))}
  </div>
);

export default Hexagon;
